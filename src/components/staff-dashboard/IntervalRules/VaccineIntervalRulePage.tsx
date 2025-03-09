"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Plus, Search, MoreHorizontal, Pencil, Trash2, ArrowRight, Clock, Check, X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useDebounce } from "@/hooks/use-debounce"
import { getAllVaccines, getVaccineById, type VaccineBase } from "@/api/staff/vaccineStaff"
import {
    getVaccineIntervalRules,
    createVaccineIntervalRule,
    updateVaccineIntervalRule,
    deleteVaccineIntervalRule,
    type VaccineIntervalRule,
    type VaccineIntervalRuleRequest,
} from "@/api/staff/vaccineIntervalRules"
import { VaccineIntervalRuleDialog } from "@/components/staff-dashboard/IntervalRules/VaccineIntervalRuleDialog"

// Interface to store vaccine details with rule
interface EnhancedVaccineIntervalRule extends VaccineIntervalRule {
    firstVaccineDetails?: VaccineBase
    secondVaccineDetails?: VaccineBase
}

export default function VaccineIntervalRulePage() {
    const [rules, setRules] = useState<EnhancedVaccineIntervalRule[]>([])
    const [vaccines, setVaccines] = useState<VaccineBase[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [firstVaccineSearch, setFirstVaccineSearch] = useState("")
    const [secondVaccineSearch, setSecondVaccineSearch] = useState("")
    const [dialogOpen, setDialogOpen] = useState(false)
    const [selectedRule, setSelectedRule] = useState<VaccineIntervalRule | null>(null)
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false)
    const [ruleToDelete, setRuleToDelete] = useState<VaccineIntervalRule | null>(null)
    const [loadingVaccineDetails, setLoadingVaccineDetails] = useState(false)
    const { toast } = useToast()

    // Debounce search inputs
    const debouncedFirstVaccineSearch = useDebounce(firstVaccineSearch, 300)
    const debouncedSecondVaccineSearch = useDebounce(secondVaccineSearch, 300)

    // Fetch vaccine details for a rule
    const fetchVaccineDetailsForRule = useCallback(
        async (rule: VaccineIntervalRule): Promise<EnhancedVaccineIntervalRule> => {
            try {
                const [firstVaccineResponse, secondVaccineResponse] = await Promise.all([
                    getVaccineById(rule.vaccineId),
                    getVaccineById(rule.relatedVaccineId),
                ])

                return {
                    ...rule,
                    firstVaccineDetails: firstVaccineResponse.isSuccess ? firstVaccineResponse.data : undefined,
                    secondVaccineDetails: secondVaccineResponse.isSuccess ? secondVaccineResponse.data : undefined,
                }
            } catch (error) {
                console.error("Error fetching vaccine details for rule:", error)
                return rule
            }
        },
        [],
    )

    // Fetch vaccines and rules
    const fetchData = useCallback(async () => {
        try {
            setIsLoading(true)
            const [vaccinesResponse, rulesResponse] = await Promise.all([getAllVaccines({}), getVaccineIntervalRules()])

            if (vaccinesResponse.isSuccess) {
                setVaccines(vaccinesResponse.data.vaccines)
            }

            if (rulesResponse.isSuccess) {
                // Fetch details for each rule
                setLoadingVaccineDetails(true)
                const rulesWithDetails = await Promise.all(rulesResponse.data.map((rule) => fetchVaccineDetailsForRule(rule)))
                setRules(rulesWithDetails)
                setLoadingVaccineDetails(false)
            }
        } catch (error) {
            console.error("Error fetching data:", error)
            toast({
                title: "Error",
                description: "Failed to fetch data",
                variant: "destructive",
            })
        } finally {
            setIsLoading(false)
        }
    }, [toast, fetchVaccineDetailsForRule])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    // Filter rules based on search
    const filteredRules = rules.filter((rule) => {
        const firstVaccineName =
            rule.firstVaccineDetails?.vaccineName || vaccines.find((v) => v.id === rule.vaccineId)?.vaccineName || ""
        const secondVaccineName =
            rule.secondVaccineDetails?.vaccineName || vaccines.find((v) => v.id === rule.relatedVaccineId)?.vaccineName || ""

        const matchesFirstSearch =
            debouncedFirstVaccineSearch === "" ||
            firstVaccineName.toLowerCase().includes(debouncedFirstVaccineSearch.toLowerCase())

        const matchesSecondSearch =
            debouncedSecondVaccineSearch === "" ||
            secondVaccineName.toLowerCase().includes(debouncedSecondVaccineSearch.toLowerCase())

        return matchesFirstSearch && matchesSecondSearch
    })

    // Handle create/update rule
    const handleSaveRule = async (data: VaccineIntervalRuleRequest) => {
        try {
            if (selectedRule) {
                // Update existing rule
                const response = await updateVaccineIntervalRule(selectedRule.id, data)
                if (response.isSuccess) {
                    toast({
                        title: "Success",
                        description: "Vaccine interval rule updated successfully",
                        variant: "success",
                    })
                    fetchData() // Refresh data
                }
            } else {
                // Create new rule
                const response = await createVaccineIntervalRule(data)
                if (response.isSuccess) {
                    toast({
                        title: "Success",
                        description: "Vaccine interval rule created successfully",
                        variant: "success",
                    })
                    fetchData() // Refresh data
                }
            }
        } catch (error) {
            console.error("Error saving rule:", error)
            toast({
                title: "Error",
                description: "Failed to save vaccine interval rule",
                variant: "destructive",
            })
        }
    }

    // Handle delete rule
    const handleDeleteRule = async () => {
        if (!ruleToDelete) return

        try {
            const response = await deleteVaccineIntervalRule(ruleToDelete.id)
            if (response.isSuccess) {
                toast({
                    title: "Success",
                    description: "Vaccine interval rule deleted successfully",
                    variant: "success",
                })
                fetchData() // Refresh data
            }
        } catch (error) {
            console.error("Error deleting rule:", error)
            toast({
                title: "Error",
                description: "Failed to delete vaccine interval rule",
                variant: "destructive",
            })
        } finally {
            setRuleToDelete(null)
            setDeleteConfirmOpen(false)
        }
    }

    // Get vaccine name by ID - now uses the enhanced rule data first
    const getVaccineName = (rule: EnhancedVaccineIntervalRule, isFirstVaccine: boolean) => {
        if (isFirstVaccine) {
            return (
                rule.firstVaccineDetails?.vaccineName ||
                vaccines.find((v) => v.id === rule.vaccineId)?.vaccineName ||
                "Unknown Vaccine"
            )
        } else {
            return (
                rule.secondVaccineDetails?.vaccineName ||
                vaccines.find((v) => v.id === rule.relatedVaccineId)?.vaccineName ||
                "Unknown Vaccine"
            )
        }
    }

    return (
        <div className="flex flex-col gap-6 p-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold">Vaccine Interval Rules</h1>
                <Button
                    onClick={() => {
                        setSelectedRule(null)
                        setDialogOpen(true)
                    }}
                    className="bg-[#1e1b4b] hover:bg-[#1e1b4b]/90"
                >
                    <Plus className="mr-2 h-4 w-4" />
                    Add New Rule
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Search Rules</CardTitle>
                    <CardDescription>Filter rules by vaccine names</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                placeholder="Search first vaccine..."
                                value={firstVaccineSearch}
                                onChange={(e) => setFirstVaccineSearch(e.target.value)}
                                className="pl-9"
                            />
                        </div>
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                placeholder="Search second vaccine..."
                                value={secondVaccineSearch}
                                onChange={(e) => setSecondVaccineSearch(e.target.value)}
                                className="pl-9"
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Vaccine Interval Rules</CardTitle>
                    <CardDescription>Manage rules for vaccine intervals and compatibility</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>First Vaccine</TableHead>
                                    <TableHead></TableHead>
                                    <TableHead>Second Vaccine</TableHead>
                                    <TableHead>Can Be Given Together</TableHead>
                                    <TableHead>Minimum Interval (Days)</TableHead>
                                    <TableHead className="w-[80px]">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {isLoading || loadingVaccineDetails ? (
                                    Array.from({ length: 5 }).map((_, index) => (
                                        <TableRow key={`skeleton-${index}`} className="animate-pulse">
                                            <TableCell>
                                                <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
                                            </TableCell>
                                            <TableCell>
                                                <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-5" />
                                            </TableCell>
                                            <TableCell>
                                                <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
                                            </TableCell>
                                            <TableCell>
                                                <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-16" />
                                            </TableCell>
                                            <TableCell>
                                                <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-12" />
                                            </TableCell>
                                            <TableCell>
                                                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-8 ml-auto" />
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : filteredRules.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={6} className="h-24 text-center">
                                            No rules found.
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    filteredRules.map((rule) => (
                                        <TableRow key={rule.id}>
                                            <TableCell className="font-medium">{getVaccineName(rule, true)}</TableCell>
                                            <TableCell>
                                                <ArrowRight className="h-4 w-4 text-muted-foreground" />
                                            </TableCell>
                                            <TableCell className="font-medium">{getVaccineName(rule, false)}</TableCell>
                                            <TableCell>
                                                {rule.canBeGivenTogether ? (
                                                    <Badge
                                                        variant="outline"
                                                        className="bg-green-50 text-green-700 hover:bg-green-100 border-green-200"
                                                    >
                                                        <Check className="mr-1 h-3 w-3" /> Yes
                                                    </Badge>
                                                ) : (
                                                    <Badge variant="outline" className="bg-red-50 text-red-700 hover:bg-red-100 border-red-200">
                                                        <X className="mr-1 h-3 w-3" /> No
                                                    </Badge>
                                                )}
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center">
                                                    <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                                                    <span>{rule.minIntervalDays} days</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="ghost" size="icon" className="h-8 w-8">
                                                            <MoreHorizontal className="h-4 w-4" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end">
                                                        <DropdownMenuItem
                                                            onClick={() => {
                                                                setSelectedRule(rule)
                                                                setDialogOpen(true)
                                                            }}
                                                        >
                                                            <Pencil className="mr-2 h-4 w-4" />
                                                            Edit
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem
                                                            onClick={() => {
                                                                setRuleToDelete(rule)
                                                                setDeleteConfirmOpen(true)
                                                            }}
                                                            className="text-red-600"
                                                        >
                                                            <Trash2 className="mr-2 h-4 w-4" />
                                                            Delete
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>

            {/* Create/Edit Dialog */}
            <VaccineIntervalRuleDialog
                isOpen={dialogOpen}
                onClose={() => {
                    setDialogOpen(false)
                    setSelectedRule(null)
                }}
                onSave={handleSaveRule}
                selectedRule={selectedRule}
                vaccines={vaccines}
            />

            {/* Delete Confirmation Dialog */}
            <AlertDialog
                open={deleteConfirmOpen}
                onOpenChange={(open) => {
                    if (!open) {
                        setDeleteConfirmOpen(false)
                        setRuleToDelete(null)

                        // Ensure pointer events are restored after a slight delay
                        setTimeout(() => {
                            document.body.style.pointerEvents = "auto"
                        }, 300)
                    }
                }}
            >
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete the vaccine interval rule between{" "}
                            <span className="font-semibold">
                                {ruleToDelete ? getVaccineName(ruleToDelete as EnhancedVaccineIntervalRule, true) : ""}
                            </span>{" "}
                            and{" "}
                            <span className="font-semibold">
                                {ruleToDelete ? getVaccineName(ruleToDelete as EnhancedVaccineIntervalRule, false) : ""}
                            </span>
                            .
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleDeleteRule} className="bg-red-600 hover:bg-red-700">
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}

