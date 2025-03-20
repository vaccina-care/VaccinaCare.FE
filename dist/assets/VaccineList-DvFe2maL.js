import { j as jsxRuntimeExports, B as Button, r as reactExports, u as useNavigate, o as Input } from './index-BxW4NEkE.js';
import { C as Card, b as CardHeader, a as CardContent, d as CardFooter, c as CardTitle } from './card-B_2urvVV.js';
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from './select-DSKKSaz0.js';
import { P as Package } from './package-8gWhVaRY.js';
import { g as getAllTypes } from './getAllType-iaJTPXZe.js';
import { u as useDebounce, S as Search } from './use-debounce-DN1o4nP7.js';
import { S as Syringe } from './syringe-BY_crmr6.js';
import { C as ChevronLeft, a as ChevronRight } from './chevron-right-xZVHym6g.js';
import './chevron-up-wBRuSHft.js';

function VaccinePackageCard({ package: vaccinePackage, onSelect }) {
  const discountPercentages = {
    "0-6": 5,
    "0-9": 6,
    "0-12": 7
  };
  const getDiscount = () => {
    const matches = vaccinePackage.packageName.match(/\d+-\d+/);
    return matches ? discountPercentages[matches[0]] || 5 : 5;
  };
  const discount = getDiscount();
  const discountAmount = vaccinePackage.price * discount / 100;
  const finalPrice = vaccinePackage.price - discountAmount;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-50 to-white flex flex-col h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-48 bg-blue-100/50 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "h-24 w-24 text-blue-600/40" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 space-y-4 flex-grow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-[#1e1b4b] line-clamp-2", children: vaccinePackage.packageName }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-500 line-through text-sm", children: new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND"
          }).format(vaccinePackage.price) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-7 -top-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-red-500 text-white text-xs px-1.5 py-0.5 rounded", children: [
            "-",
            discount,
            "%"
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold text-blue-600", children: new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND"
          }).format(finalPrice) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-gray-500", children: [
            "(-",
            new Intl.NumberFormat("vi-VN").format(discountAmount),
            " VND)"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium text-sm", children: "Prevention:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 line-clamp-3", children: vaccinePackage.description })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardFooter, { className: "p-4 mt-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "w-full bg-[#1e1b4b] hover:bg-[#1e1b4b]/90", onClick: () => onSelect(vaccinePackage.id), children: "Choose" }) })
  ] });
}

function VaccineList() {
  const [filterType, setFilterType] = reactExports.useState("all");
  const [searchName, setSearchName] = reactExports.useState("");
  const [searchDescription, setSearchDescription] = reactExports.useState("");
  const [vaccines, setVaccines] = reactExports.useState([]);
  const [packages, setPackages] = reactExports.useState([]);
  const [currentPage, setCurrentPage] = reactExports.useState(1);
  const [totalPages, setTotalPages] = reactExports.useState(1);
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const pageSize = 12;
  const navigate = useNavigate();
  const debouncedSearchName = useDebounce(searchName, 300);
  const debouncedSearchDescription = useDebounce(searchDescription, 300);
  reactExports.useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await getAllTypes({
          searchName: debouncedSearchName,
          searchDescription: debouncedSearchDescription,
          pageNumber: currentPage,
          pageSize
        });
        if (response.isSuccess) {
          const data = response.data.items[0];
          if (filterType === "package") {
            setPackages(data.vaccinePackages);
            setVaccines([]);
          } else if (filterType === "single") {
            setVaccines(data.vaccines);
            setPackages([]);
          } else {
            setVaccines(data.vaccines);
            setPackages(data.vaccinePackages);
          }
          setTotalPages(response.data.totalPages);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [currentPage, debouncedSearchName, debouncedSearchDescription, filterType]);
  const handlePackageSelect = (packageId) => {
    navigate(`/vaccine-package/${packageId}`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "container py-8 px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-[#1e1b4b]", children: "LIST OF VACCINES" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 md:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: filterType, onValueChange: (value) => setFilterType(value), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-[200px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Display by" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "All" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "single", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Syringe, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Single Vaccines" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "package", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Vaccine Packages" })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "search",
                placeholder: "Search by name...",
                value: searchName,
                onChange: (e) => setSearchName(e.target.value),
                className: "w-full sm:w-[200px] pl-9"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "search",
                placeholder: "Search by description...",
                value: searchDescription,
                onChange: (e) => setSearchDescription(e.target.value),
                className: "w-full sm:w-[200px] pl-9"
              }
            )
          ] })
        ] })
      ] })
    ] }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", children: Array.from({ length: 8 }).map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-pulse", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-200 h-48 rounded-t-lg" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 p-4 bg-white rounded-b-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-gray-200 rounded w-3/4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-gray-200 rounded w-1/2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-gray-200 rounded w-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 bg-gray-200 rounded w-full" })
      ] })
    ] }, index)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", children: [
      filterType !== "package" && vaccines.map((vaccine) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: vaccine.picUrl || "/placeholder.svg?height=200&width=300",
                alt: vaccine.vaccineName,
                className: "w-full h-48 object-cover"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 space-y-4 flex-grow", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg font-semibold line-clamp-2", children: vaccine.vaccineName }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500", children: [
                  "Origin: ",
                  vaccine.type
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 line-clamp-3", children: vaccine.description }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold text-blue-600", children: new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND"
                }).format(vaccine.price) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardFooter, { className: "p-4 mt-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                className: "w-full bg-[#1e1b4b] hover:bg-[#1e1b4b]/90",
                onClick: () => navigate(`/vaccine/${vaccine.id}`),
                children: "Choose"
              }
            ) })
          ]
        },
        vaccine.id
      )),
      (filterType === "package" || filterType === "all") && packages.map((pkg) => /* @__PURE__ */ jsxRuntimeExports.jsx(VaccinePackageCard, { package: pkg, onSelect: handlePackageSelect }, pkg.id))
    ] }),
    filterType !== "package" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "outline",
          size: "icon",
          onClick: () => setCurrentPage((prev) => Math.max(prev - 1, 1)),
          disabled: currentPage === 1,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm", children: [
        "Page ",
        currentPage,
        " / ",
        totalPages
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "outline",
          size: "icon",
          onClick: () => setCurrentPage((prev) => Math.min(prev + 1, totalPages)),
          disabled: currentPage >= totalPages,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
        }
      )
    ] })
  ] }) }) });
}

export { VaccineList as default };
