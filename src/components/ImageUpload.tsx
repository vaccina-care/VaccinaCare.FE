"use client"

import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import Cropper from "react-easy-crop"
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Upload, X } from "lucide-react"

interface Point {
    x: number
    y: number
}

interface Area {
    x: number
    y: number
    width: number
    height: number
}

interface ImageUploadProps {
    onChange: (file: File) => void
    defaultImage?: string
    ratio?: number
    disabled?: boolean
}

export function ImageUpload({ onChange, defaultImage, ratio = 1, disabled = false }: ImageUploadProps) {
    const [preview, setPreview] = useState<string | null>(defaultImage || null)
    const [crop, setCrop] = useState<Point>({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null)
    const [isCropperOpen, setIsCropperOpen] = useState(false)

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = () => {
                setPreview(reader.result as string)
                setIsCropperOpen(true)
            }
            reader.readAsDataURL(file)
        }
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { "image/*": [] },
        multiple: false,
        disabled,
    })

    const onCropComplete = useCallback((_croppedArea: Area, croppedAreaPixels: Area) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }, [])

    const createImage = (url: string): Promise<HTMLImageElement> =>
        new Promise((resolve, reject) => {
            const image = new Image()
            image.addEventListener("load", () => resolve(image))
            image.addEventListener("error", reject)
            image.src = url
        })

    const getCroppedImage = async (imageSrc: string, pixelCrop: Area): Promise<File> => {
        const image = await createImage(imageSrc);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        if (!ctx) {
            throw new Error("No 2d context");
        }

        canvas.width = pixelCrop.width;
        canvas.height = pixelCrop.height;

        ctx.drawImage(
            image,
            pixelCrop.x,
            pixelCrop.y,
            pixelCrop.width,
            pixelCrop.height,
            0,
            0,
            pixelCrop.width,
            pixelCrop.height,
        );

        return new Promise((resolve) => {
            canvas.toBlob((blob) => {
                if (blob) {
                    // Ensure correct file format
                    const file = new File([blob], `avatar-${Date.now()}.jpg`, { type: "image/jpeg" });
                    resolve(file);
                }
            }, "image/jpeg");
        });
    };


    const handleCropConfirm = async () => {
        if (preview && croppedAreaPixels) {
            try {
                const croppedImage = await getCroppedImage(preview, croppedAreaPixels);
                onChange(croppedImage); // Send properly formatted file
                setIsCropperOpen(false);
            } catch (e) {
                console.error(e);
            }
        }
    };

    const handleRemove = () => {
        setPreview(null)
        onChange(new File([], ""))
    }

    return (
        <div className="relative">
            <div
                {...getRootProps()}
                className={`relative aspect-square overflow-hidden rounded-full border-2 border-dashed transition-colors ${isDragActive ? "border-primary bg-primary/10" : "border-muted-foreground/25"
                    } ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:border-muted-foreground/50"}`}
            >
                <input {...getInputProps()} />
                {preview ? (
                    <div className="relative h-full w-full">
                        <img src={preview || "/placeholder.svg"} alt="Preview" className="h-full w-full object-cover" />
                        {!disabled && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity hover:opacity-100">
                                <Button
                                    type="button"
                                    variant="secondary"
                                    size="icon"
                                    className="h-8 w-8"
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        handleRemove()
                                    }}
                                >
                                    <X className="h-4 w-4" />
                                </Button>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-1 p-4">
                        <Upload className="h-8 w-8 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">
                            {isDragActive ? "Drop the image here" : "Upload an image"}
                        </span>
                    </div>
                )}
            </div>

            <Dialog open={isCropperOpen} onOpenChange={setIsCropperOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <div className="relative h-[300px]">
                        {preview && (
                            <Cropper
                                image={preview}
                                crop={crop}
                                zoom={zoom}
                                aspect={ratio}
                                onCropChange={setCrop}
                                onCropComplete={onCropComplete}
                                onZoomChange={setZoom}
                            />
                        )}
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">Zoom</span>
                        <Slider value={[zoom]} min={1} max={3} step={0.1} onValueChange={(value) => setZoom(value[0])} />
                    </div>
                    <DialogFooter>
                        <Button type="button" variant="secondary" onClick={() => setIsCropperOpen(false)}>
                            Cancel
                        </Button>
                        <Button type="button" onClick={handleCropConfirm}>
                            Crop & Save
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

