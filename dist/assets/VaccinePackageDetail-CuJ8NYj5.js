import { r as reactExports, j as jsxRuntimeExports, z as cn, B as Button, _ as useParams, u as useNavigate, t as useLocation } from './index-BxW4NEkE.js';
import { a as getVaccinePackageById } from './package--2T6S3B8.js';
import { C as Card, a as CardContent } from './card-B_2urvVV.js';
import { u as useEmblaCarousel } from './embla-carousel-react.esm-CeFYjVej.js';
import { A as ArrowLeft } from './arrow-left-D-m9pVgB.js';
import { A as ArrowRight } from './arrow-right-BuuHlQvH.js';
import { S as Syringe } from './syringe-BY_crmr6.js';
import { P as Package } from './package-8gWhVaRY.js';
import { I as Info } from './info-DnawUoCu.js';
import { b as getVaccineById } from './vaccine-GWachqK5.js';

const CarouselContext = reactExports.createContext(null);
function useCarousel() {
  const context = reactExports.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = reactExports.forwardRef(
  ({
    orientation = "horizontal",
    opts,
    setApi,
    plugins,
    className,
    children,
    ...props
  }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = reactExports.useState(false);
    const [canScrollNext, setCanScrollNext] = reactExports.useState(false);
    const onSelect = reactExports.useCallback((api2) => {
      if (!api2) {
        return;
      }
      setCanScrollPrev(api2.canScrollPrev());
      setCanScrollNext(api2.canScrollNext());
    }, []);
    const scrollPrev = reactExports.useCallback(() => {
      api?.scrollPrev();
    }, [api]);
    const scrollNext = reactExports.useCallback(() => {
      api?.scrollNext();
    }, [api]);
    const handleKeyDown = reactExports.useCallback(
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );
    reactExports.useEffect(() => {
      if (!api || !setApi) {
        return;
      }
      setApi(api);
    }, [api, setApi]);
    reactExports.useEffect(() => {
      if (!api) {
        return;
      }
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      CarouselContext.Provider,
      {
        value: {
          carouselRef,
          api,
          opts,
          orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            ref,
            onKeyDownCapture: handleKeyDown,
            className: cn("relative", className),
            role: "region",
            "aria-roledescription": "carousel",
            ...props,
            children
          }
        )
      }
    );
  }
);
Carousel.displayName = "Carousel";
const CarouselContent = reactExports.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: cn(
        "flex",
        orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        className
      ),
      ...props
    }
  ) });
});
CarouselContent.displayName = "CarouselContent";
const CarouselItem = reactExports.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      role: "group",
      "aria-roledescription": "slide",
      className: cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      ),
      ...props
    }
  );
});
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = reactExports.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute  h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollPrev,
      onClick: scrollPrev,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = reactExports.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollNext,
      onClick: scrollNext,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
CarouselNext.displayName = "CarouselNext";

function PackageDetails({ packageName, description, vaccineInfo, price }) {
  window.scrollTo(0, 0);
  const { packageId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const handleBookAppointment = () => {
    navigate("/appointments", { state: { fromVaccinePackageDetail: true, vaccinepackageId: packageId } });
  };
  const handleBackToVaccineList = () => {
    if (!location.state?.fromVaccinePackageDetail) {
      navigate("/vaccine-list");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto py-8 px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", onClick: handleBackToVaccineList, className: "mb-8 hover:bg-gray-100", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
      " Back to Vaccine List"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-[#1e1b4b]", children: packageName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mt-4", children: description })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative rounded-lg overflow-hidden bg-white shadow-lg p-4", children: vaccineInfo.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Carousel, { className: "w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselContent, { children: vaccineInfo.map((vaccine, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselItem, { className: "basis-1/3 md:basis-1/3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center rounded-md overflow-hidden bg-white p-2 h-[200px]", children: [
          vaccine.picUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: vaccine.picUrl || "/placeholder.svg",
              alt: vaccine.vaccineName,
              className: "h-[150px] w-full object-contain"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-[150px] w-full bg-gray-100 rounded-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Syringe, { className: "h-12 w-12 text-gray-400" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-center font-medium line-clamp-2", children: vaccine.vaccineName })
        ] }) }) }, index)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselPrevious, { className: "left-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselNext, { className: "right-2" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-[300px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center text-gray-400", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "h-16 w-16 mb-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No vaccines in this package" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-[#1e1b4b] mb-4", children: "Vaccine List" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full border-collapse", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b bg-gray-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-3 px-4", style: { width: "18%" }, children: "Vaccine Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-3 px-4", style: { width: "52%" }, children: "Disease Prevention" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-3 px-4", style: { width: "18%" }, children: "Origin" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-3 px-4", style: { width: "12%" }, children: "Doses" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: vaccineInfo.length > 0 ? vaccineInfo.map((info, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b last:border-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4", children: info.vaccineName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4", children: info.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4", children: info.type }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4", children: info.requiredDoses })
          ] }, index)) : /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 4, className: "py-3 px-4 text-center text-gray-500", children: "No vaccine information available" }) }) })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 p-6 rounded-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-blue-900 mb-2", children: "Vaccine Package Price" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline space-x-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-bold text-blue-600", children: new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND"
            }).format(price) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-blue-600", children: "/package" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-blue-600 mt-2", children: [
            "Total price for ",
            vaccineInfo.length,
            " vaccine, including all necessary injections."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 text-gray-600 bg-gray-50/80 p-4 rounded-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-4 w-4 mt-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Detailed injection schedule will be advised when booking." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "lg",
              className: "w-full bg-[#1e1b4b] hover:bg-[#1e1b4b]/90",
              onClick: handleBookAppointment,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Syringe, { className: "mr-2 h-5 w-5" }),
                "Book Appointment"
              ]
            }
          )
        ] })
      ] }) }) })
    ] })
  ] }) });
}

const PackageLayout = () => {
  const { packageId } = useParams();
  const [packageData, setPackageData] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  const [vaccineInfo, setVaccineInfo] = reactExports.useState([]);
  reactExports.useEffect(() => {
    const fetchPackageDetails = async () => {
      if (!packageId) return;
      try {
        setLoading(true);
        const packageDetail = await getVaccinePackageById(packageId);
        setPackageData(packageDetail);
        const vaccines = await Promise.all(
          packageDetail.vaccineDetails.map((detail) => getVaccineById(detail.vaccineId))
        );
        setVaccineInfo(vaccines);
      } catch (err) {
        setError("Không thể lấy dữ liệu gói vaccine.");
      } finally {
        setLoading(false);
      }
    };
    fetchPackageDetails();
  }, [packageId]);
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Đang tải..." });
  if (error) return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500", children: error });
  if (!packageData) return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Không có dữ liệu." });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    PackageDetails,
    {
      packageName: packageData.packageName,
      price: packageData.price,
      description: packageData.description,
      vaccineInfo
    }
  );
};

const VaccinePackageDetail = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PackageLayout, {}) });
};

export { VaccinePackageDetail as default };
