import { c as createLucideIcon, a0 as axiosInstance, p as useToast, r as reactExports, j as jsxRuntimeExports, o as Input, O as Badge, q as Calendar, B as Button, U as User, Q as AnimatePresence, n as motion } from './index-BxW4NEkE.js';
import { D as DashboardLayout } from './DashboardLayout-BYaHOMeS.js';
import { C as Card, b as CardHeader, a as CardContent, c as CardTitle, e as CardDescription } from './card-B_2urvVV.js';
import { g as getChildren } from './children-CDjq7Dbq.js';
import { a as getVaccineList, b as getVaccineById } from './vaccine-GWachqK5.js';
import { S as Skeleton } from './skeleton-Dc4Ew3Pt.js';
import { D as Dialog, c as DialogContent, f as DialogHeader, g as DialogTitle, d as DialogFooter } from './dialog-3s5tW-4P.js';
import { L as Label } from './label-CC7x5zSE.js';
import { T as Textarea } from './textarea-Bx7BMk8e.js';
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from './select-DSKKSaz0.js';
import { u as useDebounce, S as Search } from './use-debounce-DN1o4nP7.js';
import { L as LoaderCircle } from './loader-circle-CmNZu_CB.js';
import { S as Syringe } from './syringe-BY_crmr6.js';
import { o as format } from './format-CqEybc0i.js';
import { C as ChevronUp, a as ChevronDown } from './chevron-up-wBRuSHft.js';
import { P as Plus } from './plus-Dsbyyh0v.js';
import { R as RefreshCw } from './refresh-cw-_HVOApyi.js';
import { F as FileText } from './file-text-C0z9tgvb.js';
import { p as parseISO } from './parseISO-wIMaF3nH.js';
import './users-DfEX5jUe.js';
import './index-BZ7ugsel.js';

/**
 * @license lucide-react v0.470.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const CircleAlert = createLucideIcon("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);

const addVaccinationRecord = async (data) => {
  try {
    const response = await axiosInstance.post("/vaccination/records", data);
    return response.data;
  } catch (error) {
    console.error("Error adding vaccination record:", error);
    throw error;
  }
};
const getChildVaccinationRecords = async (childId) => {
  try {
    const response = await axiosInstance.get(`/vaccination/records/${childId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching vaccination records:", error);
    throw error;
  }
};

function VaccineRecordDialog({ isOpen, onClose, childId, childName, onRecordAdded }) {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const debouncedSearch = useDebounce(searchQuery, 500);
  const [vaccines, setVaccines] = reactExports.useState([]);
  const [selectedVaccine, setSelectedVaccine] = reactExports.useState(null);
  const [doseNumber, setDoseNumber] = reactExports.useState(1);
  const [vaccinationDate, setVaccinationDate] = reactExports.useState(format(/* @__PURE__ */ new Date(), "yyyy-MM-dd"));
  const [reactionDetails, setReactionDetails] = reactExports.useState("");
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [searchLoading, setSearchLoading] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const fetchVaccines = async () => {
      if (!isOpen) return;
      try {
        setSearchLoading(true);
        const response = await getVaccineList({
          search: debouncedSearch,
          pageSize: 10
        });
        if (response.isSuccess) {
          setVaccines(response.data.vaccines);
        }
      } catch (error) {
        console.error("Error fetching vaccines:", error);
        toast({
          title: "Error",
          description: "Failed to load vaccines. Please try again.",
          variant: "destructive"
        });
      } finally {
        setSearchLoading(false);
      }
    };
    if (isOpen) {
      fetchVaccines();
    }
  }, [debouncedSearch, isOpen, toast]);
  reactExports.useEffect(() => {
    if (!isOpen) {
      setSearchQuery("");
      setSelectedVaccine(null);
      setDoseNumber(1);
      setVaccinationDate(format(/* @__PURE__ */ new Date(), "yyyy-MM-dd"));
      setReactionDetails("");
    }
  }, [isOpen]);
  const handleSubmit = async () => {
    if (!selectedVaccine) {
      toast({
        title: "Missing Information",
        description: "Please select a vaccine.",
        variant: "destructive"
      });
      return;
    }
    if (!vaccinationDate) {
      toast({
        title: "Missing Information",
        description: "Please enter the vaccination date.",
        variant: "destructive"
      });
      return;
    }
    try {
      setIsSubmitting(true);
      const recordData = {
        childId,
        vaccineId: selectedVaccine.id,
        vaccinationDate: new Date(vaccinationDate).toISOString(),
        doseNumber,
        reactionDetails: reactionDetails || void 0
      };
      const response = await addVaccinationRecord(recordData);
      if (response.isSuccess) {
        toast({
          title: "Success",
          description: "Vaccination record added successfully.",
          variant: "success"
        });
        onRecordAdded();
        onClose();
      } else {
        toast({
          title: "Error",
          description: response.message || "Failed to add vaccination record.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Error adding vaccination record:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const groupedVaccines = vaccines.reduce(
    (acc, vaccine) => {
      if (!acc[vaccine.type]) {
        acc[vaccine.type] = [];
      }
      acc[vaccine.type].push(vaccine);
      return acc;
    },
    {}
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: isOpen, onOpenChange: (open) => !open && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-[500px] max-h-[90vh] overflow-y-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-xl", children: "Add External Vaccination Record" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-1 text-sm font-medium text-gray-700", children: "Child" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-blue-50 rounded-md text-blue-800", children: childName })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "vaccine-search", children: "Search Vaccine" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "vaccine-search",
              placeholder: "Search by vaccine name...",
              className: "pl-9",
              value: searchQuery,
              onChange: (e) => setSearchQuery(e.target.value)
            }
          ),
          searchLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "absolute right-2.5 top-2.5 h-4 w-4 animate-spin text-gray-500" })
        ] })
      ] }),
      Object.keys(groupedVaccines).length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: Object.entries(groupedVaccines).map(([type, typeVaccines]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "bg-blue-50 text-blue-700 border-blue-200", children: type }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-2 pl-2", children: typeVaccines.map((vaccine) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `p-3 rounded-md border cursor-pointer transition-colors ${selectedVaccine?.id === vaccine.id ? "bg-blue-50 border-blue-300" : "hover:bg-gray-50 border-gray-200"}`,
            onClick: () => setSelectedVaccine(vaccine),
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium text-gray-900", children: vaccine.vaccineName }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-1 line-clamp-2", children: vaccine.description })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Syringe, { className: "h-3 w-3" }),
                vaccine.requiredDoses,
                " ",
                vaccine.requiredDoses > 1 ? "doses" : "dose"
              ] })
            ] })
          },
          vaccine.id
        )) })
      ] }, type)) }) : searchQuery && !searchLoading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-4 text-gray-500", children: [
        'No vaccines found matching "',
        searchQuery,
        '"'
      ] }),
      selectedVaccine && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-blue-50 rounded-md border border-blue-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-medium text-blue-900", children: [
          "Selected: ",
          selectedVaccine.vaccineName
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-blue-800", children: "Required Doses:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-700", children: selectedVaccine.requiredDoses })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-blue-800", children: "Price:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-700", children: new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND"
          }).format(selectedVaccine.price) })
        ] })
      ] }),
      selectedVaccine && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "dose-number", children: "Dose Number" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: doseNumber.toString(), onValueChange: (value) => setDoseNumber(Number.parseInt(value)), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "dose-number", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select dose number" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: Array.from({ length: selectedVaccine.requiredDoses }, (_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: (i + 1).toString(), children: [
            "Dose ",
            i + 1,
            " of ",
            selectedVaccine.requiredDoses
          ] }, i + 1)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "vaccination-date", className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4" }),
          "Vaccination Date"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "vaccination-date",
            type: "date",
            value: vaccinationDate,
            onChange: (e) => setVaccinationDate(e.target.value),
            max: format(/* @__PURE__ */ new Date(), "yyyy-MM-dd")
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "reaction-details", className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4" }),
          "Reaction Details (Optional)"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            id: "reaction-details",
            placeholder: "Enter any reactions or side effects...",
            value: reactionDetails,
            onChange: (e) => setReactionDetails(e.target.value),
            rows: 3
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: onClose, children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleSubmit, disabled: isSubmitting || !selectedVaccine, children: isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
        "Saving..."
      ] }) : "Save Record" })
    ] })
  ] }) });
}

function VaccineRecordSection() {
  const [children, setChildren] = reactExports.useState([]);
  const [vaccineRecords, setVaccineRecords] = reactExports.useState({});
  const [expandedChild, setExpandedChild] = reactExports.useState(null);
  const [loadingChildren, setLoadingChildren] = reactExports.useState(true);
  const [loadingRecords, setLoadingRecords] = reactExports.useState({});
  const [isDialogOpen, setIsDialogOpen] = reactExports.useState(false);
  const [selectedChild, setSelectedChild] = reactExports.useState(null);
  const [refreshing, setRefreshing] = reactExports.useState(null);
  const [vaccineDetails, setVaccineDetails] = reactExports.useState({});
  const [loadingVaccines, setLoadingVaccines] = reactExports.useState({});
  const { toast } = useToast();
  reactExports.useEffect(() => {
    const fetchChildren = async () => {
      try {
        setLoadingChildren(true);
        const childrenData = await getChildren();
        setChildren(childrenData);
        if (childrenData.length > 0) {
          setExpandedChild(childrenData[0].id);
        }
      } catch (error) {
        console.error("Failed to fetch children:", error);
        toast({
          title: "Error",
          description: "Failed to load children data",
          variant: "destructive"
        });
      } finally {
        setLoadingChildren(false);
      }
    };
    fetchChildren();
  }, [toast]);
  reactExports.useEffect(() => {
    const fetchVaccineRecords = async (childId) => {
      if (!childId) return;
      try {
        setLoadingRecords((prev) => ({ ...prev, [childId]: true }));
        const response = await getChildVaccinationRecords(childId);
        if (response.isSuccess) {
          setVaccineRecords((prev) => ({
            ...prev,
            [childId]: response.data
          }));
          const vaccineIds = new Set(response.data.map((record) => record.vaccineId));
          fetchVaccineDetails(Array.from(vaccineIds));
        }
      } catch (error) {
        console.error("Failed to fetch vaccine records:", error);
        toast({
          title: "Error",
          description: "Failed to load vaccination records",
          variant: "destructive"
        });
      } finally {
        setLoadingRecords((prev) => ({ ...prev, [childId]: false }));
      }
    };
    if (expandedChild && (!vaccineRecords[expandedChild] || refreshing === expandedChild)) {
      fetchVaccineRecords(expandedChild);
      if (refreshing === expandedChild) {
        setRefreshing(null);
      }
    }
  }, [expandedChild, vaccineRecords, toast, refreshing]);
  const fetchVaccineDetails = reactExports.useCallback(
    async (vaccineIds) => {
      const idsToFetch = vaccineIds.filter((id) => !vaccineDetails[id] && !loadingVaccines[id]);
      if (idsToFetch.length === 0) return;
      setLoadingVaccines((prev) => {
        const newState = { ...prev };
        idsToFetch.forEach((id) => {
          newState[id] = true;
        });
        return newState;
      });
      const fetchPromises = idsToFetch.map(async (id) => {
        try {
          const vaccine = await getVaccineById(id);
          return { id, vaccine };
        } catch (error) {
          console.error(`Failed to fetch vaccine details for ID ${id}:`, error);
          return { id, error };
        }
      });
      const results = await Promise.allSettled(fetchPromises);
      const newVaccineDetails = { ...vaccineDetails };
      const newLoadingState = { ...loadingVaccines };
      results.forEach((result) => {
        if (result.status === "fulfilled") {
          const { id, vaccine, error } = result.value;
          if (!error && vaccine) {
            newVaccineDetails[id] = vaccine;
          }
          newLoadingState[id] = false;
        }
      });
      setVaccineDetails(newVaccineDetails);
      setLoadingVaccines(newLoadingState);
    },
    [vaccineDetails, loadingVaccines]
  );
  const toggleChildExpansion = (childId) => {
    setExpandedChild(expandedChild === childId ? null : childId);
  };
  const handleAddRecord = (childId, childName) => {
    setSelectedChild({ id: childId, name: childName });
    setIsDialogOpen(true);
  };
  const handleRecordAdded = () => {
    if (selectedChild) {
      setRefreshing(selectedChild.id);
    }
  };
  const handleRefresh = (childId) => {
    setRefreshing(childId);
  };
  const groupRecordsByVaccine = (records) => {
    const grouped = {};
    records.forEach((record) => {
      const vaccineId = record.vaccineId;
      if (!grouped[vaccineId]) {
        grouped[vaccineId] = [];
      }
      grouped[vaccineId].push(record);
    });
    Object.keys(grouped).forEach((vaccineId) => {
      grouped[vaccineId].sort((a, b) => a.doseNumber - b.doseNumber);
    });
    return grouped;
  };
  const getVaccineName = (vaccineId, fallbackName) => {
    if (vaccineDetails[vaccineId]) {
      return vaccineDetails[vaccineId].vaccineName;
    }
    return fallbackName || "Loading vaccine name...";
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-between items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold tracking-tight", children: "Vaccination Records" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1", children: "Track vaccination history for your children, including doses received at other centers" })
    ] }) }),
    loadingChildren ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "animate-pulse", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-6 w-48" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-72 mt-2" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-24 w-full" }) })
    ] }, i)) }) : children.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: children.map((child) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: expandedChild === child.id ? "border-blue-200" : "", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CardHeader,
        {
          className: `cursor-pointer hover:bg-gray-50 ${expandedChild === child.id ? "bg-blue-50/50" : ""}`,
          onClick: () => toggleChildExpansion(child.id),
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-100 p-2 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-5 w-5 text-blue-600" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg", children: child.fullName }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: child.dateOfBirth ? format(new Date(child.dateOfBirth), "MMMM d, yyyy") : "No birth date" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", children: expandedChild === child.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-5 w-5" }) })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: expandedChild === child.id && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { height: 0, opacity: 0 },
          animate: { height: "auto", opacity: 1 },
          exit: { height: 0, opacity: 0 },
          transition: { duration: 0.3 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  onClick: () => handleAddRecord(child.id, child.fullName),
                  className: "text-blue-600 border-blue-200 hover:bg-blue-50",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4 mr-1" }),
                    "Add External Record"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => handleRefresh(child.id),
                  disabled: loadingRecords[child.id] || refreshing === child.id,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `h-4 w-4 mr-1 ${refreshing === child.id ? "animate-spin" : ""}` }),
                    "Refresh"
                  ]
                }
              )
            ] }),
            loadingRecords[child.id] ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-24 w-full" }, i)) }) : vaccineRecords[child.id]?.length ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: Object.entries(groupRecordsByVaccine(vaccineRecords[child.id])).map(
              ([vaccineId, records]) => {
                const vaccineName = getVaccineName(vaccineId, records[0].vaccineName);
                const isLoading = loadingVaccines[vaccineId];
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Syringe, { className: "h-4 w-4 text-blue-600" }),
                    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-40" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-blue-800", children: vaccineName })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 pl-6", children: records.map((record) => {
                    const vaccinationDate = parseISO(record.vaccinationDate);
                    return /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "rounded-lg border border-blue-200 bg-blue-50/50 p-4",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-blue-100 text-blue-800 border-blue-200", children: [
                              "Dose ",
                              record.doseNumber
                            ] }),
                            vaccineDetails[vaccineId] && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-gray-500", children: [
                              "of ",
                              vaccineDetails[vaccineId].requiredDoses,
                              " required"
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3.5 w-3.5 text-gray-500" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: format(vaccinationDate, "MMMM d, yyyy") })
                          ] }),
                          record.reactionDetails && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 text-sm", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-3.5 w-3.5 text-amber-500 mt-0.5" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-amber-700", children: "Reaction:" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mt-0.5", children: record.reactionDetails })
                            ] })
                          ] })
                        ] })
                      },
                      record.id
                    );
                  }) })
                ] }, vaccineId);
              }
            ) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12 bg-gray-50 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-12 w-12 text-gray-300 mx-auto mb-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium text-gray-900", children: "No vaccination records found" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 mt-1", children: "Add external vaccination records or book appointments to start tracking" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  className: "mt-4",
                  onClick: () => handleAddRecord(child.id, child.fullName),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4 mr-1" }),
                    "Add External Record"
                  ]
                }
              )
            ] })
          ] })
        }
      ) })
    ] }, child.id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "text-center py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-12 w-12 text-gray-300 mx-auto mb-3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium text-gray-900", children: "No children found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 mt-1", children: "Add a child profile to track vaccination records" })
    ] }) }),
    selectedChild && /* @__PURE__ */ jsxRuntimeExports.jsx(
      VaccineRecordDialog,
      {
        isOpen: isDialogOpen,
        onClose: () => setIsDialogOpen(false),
        childId: selectedChild.id,
        childName: selectedChild.name,
        onRecordAdded: handleRecordAdded
      }
    )
  ] });
}

const VaccineRecordDashboard = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(VaccineRecordSection, {}) });
};

export { VaccineRecordDashboard as default };
