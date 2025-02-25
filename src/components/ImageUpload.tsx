"use client"

import { useState, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Slider } from "@/components/ui/slider"
import { Upload, Trash2Icon } from "lucide-react"
import { useDropzone } from "react-dropzone"
import Cropper, { Area } from 'react-easy-crop'


interface ImageUploadProps {
    onChange: (file: File) => void
    ratio?: "1:1" | "16:9" | "round"
    showGrid?: boolean
    defaultImage?: string
    isTextDisplay?: boolean
}

export function ImageUpload({
    onChange,
    ratio = "1:1",
    showGrid = true,
    defaultImage,
    isTextDisplay = false,
}: ImageUploadProps) {
    const [preview, setPreview] = useState<string | null>(defaultImage || null)
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const [rotation, setRotation] = useState(0)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null)
    const [isCropperOpen, setIsCropperOpen] = useState(false)
    const [currentFile, setCurrentFile] = useState<File | null>(null)

    const aspectRatio = {
        "1:1": 1,
        "16:9": 16 / 9,
        round: 1,
    }[ratio]

    const isRound = ratio === "round"

    const handleImageUpload = useCallback((files: File[]) => {
        const file = files[0]
        if (file) {
            setCurrentFile(file)
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreview(reader.result as string)
                setIsCropperOpen(true)
            }
            reader.readAsDataURL(file)
        }
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: handleImageUpload,
        accept: { "image/*": [] },
        multiple: false,
    })

    const removeImage = () => {
        setPreview(null)
        setCurrentFile(null)
    }

    const handleCropComplete = useCallback((_croppedArea: Area, croppedAreaPixels: Area) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }, [])

    const createImage = (url: string): Promise<HTMLImageElement> =>
        new Promise((resolve, reject) => {
            const image = new Image()
            image.addEventListener("load", () => resolve(image))
            image.addEventListener("error", (error) => reject(error))
            image.setAttribute("crossOrigin", "anonymous")
            image.src = url
        })

    const getCroppedImg = async (imageSrc: string, pixelCrop: Area, rotation = 0): Promise<Blob> => {
        const image = await createImage(imageSrc)
        const canvas = document.createElement("canvas")
        const ctx = canvas.getContext("2d")

        if (!ctx) {
            throw new Error("No 2d context")
        }

        const maxSize = Math.max(image.width, image.height)
        canvas.width = maxSize
        canvas.height = maxSize

        ctx.translate(maxSize / 2, maxSize / 2)
        ctx.rotate((rotation * Math.PI) / 180)
        ctx.translate(-maxSize / 2, -maxSize / 2)

        ctx.drawImage(image, maxSize / 2 - image.width / 2, maxSize / 2 - image.height / 2)

        const data = ctx.getImageData(pixelCrop.x, pixelCrop.y, pixelCrop.width, pixelCrop.height)

        canvas.width = pixelCrop.width
        canvas.height = pixelCrop.height

        ctx.putImageData(data, 0, 0)

        return new Promise((resolve) => {
            canvas.toBlob((blob) => {
                if (blob) {
                    resolve(blob)
                }
            }, "image/jpeg")
        })
    }

    const handleCropConfirm = async () => {
        if (preview && croppedAreaPixels && currentFile) {
            try {
                const croppedBlob = await getCroppedImg(preview, croppedAreaPixels, rotation)
                const croppedFile = new File([croppedBlob], currentFile.name, {
                    type: "image/jpeg",
                })
                onChange(croppedFile)
                setPreview(URL.createObjectURL(croppedBlob))
                setIsCropperOpen(false)
            } catch (e) {
                console.error(e)
            }
        }
    }

    return (
        <>
            <Card className={`mx-auto w-full ${isRound ? "overflow-hidden rounded-full" : ""}`}>
                <CardContent className="p-2">
                    <div
                        {...getRootProps()}
                        className={`relative ${isRound ? "aspect-square" : ratio === "16:9" ? "aspect-video" : "aspect-square"
                            } border-2 border-dashed transition-colors ${isDragActive ? "border-muted-foreground bg-primary/10" : "border-muted hover:border-muted-foreground"
                            } ${isRound ? "rounded-full" : "rounded-lg"}`}
                    >
                        <input {...getInputProps()} />
                        {preview ? (
                            <div className="group relative h-full w-full cursor-pointer">
                                <img
                                    src={preview || "/placeholder.svg"}
                                    alt="Preview"
                                    className={`h-full w-full object-cover ${isRound ? "rounded-full" : "rounded-lg"}`}
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
                                    <div className="flex gap-2">
                                        <Button
                                            type="button"
                                            variant="outline"
                                            size="icon"
                                            onClick={(event) => {
                                                event.stopPropagation()
                                                removeImage()
                                            }}
                                            aria-label="Remove image"
                                        >
                                            <Trash2Icon className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex h-full cursor-pointer flex-col items-center justify-center p-4 text-center">
                                <Upload className="mb-4 h-12 w-12 text-gray-400" />
                                <p className="text-sm text-gray-500">
                                    {isTextDisplay
                                        ? isDragActive
                                            ? "Drop the image here"
                                            : "Drag 'n' drop an image here, or click to select"
                                        : undefined}
                                </p>
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>

            <Dialog open={isCropperOpen} onOpenChange={setIsCropperOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Crop Image</DialogTitle>
                    </DialogHeader>
                    <div className="relative h-[300px] w-full">
                        {preview && (
                            <Cropper
                                image={preview}
                                crop={crop}
                                zoom={zoom}
                                aspect={aspectRatio}
                                onCropChange={setCrop}
                                onCropComplete={handleCropComplete}
                                onZoomChange={setZoom}
                                rotation={rotation}
                                showGrid={showGrid}
                            />
                        )}
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="w-16 text-right">Zoom:</span>
                        <Slider value={[zoom]} min={1} max={3} step={0.1} onValueChange={(value) => setZoom(value[0])} />
                        <span>{zoom.toFixed(1)}x</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="w-16 text-right">Rotate:</span>
                        <Slider value={[rotation]} min={0} max={360} step={1} onValueChange={(value) => setRotation(value[0])} />
                        <span>{rotation}°</span>
                    </div>
                    <DialogFooter>
                        <Button type="button" onClick={handleCropConfirm}>
                            Confirm
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}

