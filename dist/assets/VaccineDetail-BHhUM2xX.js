import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, z as cn, Z as cva, _ as useParams, u as useNavigate, t as useLocation, B as Button, O as Badge, q as Calendar, C as Clock } from './index-BxW4NEkE.js';
import { C as Card, a as CardContent } from './card-B_2urvVV.js';
import { b as getVaccineById } from './vaccine-GWachqK5.js';
import { A as ArrowLeft } from './arrow-left-D-m9pVgB.js';
import { T as TriangleAlert } from './triangle-alert-DCnevubJ.js';
import { S as Syringe } from './syringe-BY_crmr6.js';
import { D as Droplets, S as ShieldAlert } from './shield-alert-Bc-y0MS_.js';
import { P as Pill } from './pill-C9rOjwW7.js';
import { I as Info } from './info-DnawUoCu.js';

/**
 * @license lucide-react v0.470.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Ban = createLucideIcon("Ban", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m4.9 4.9 14.2 14.2", key: "1m5liu" }]
]);

/**
 * @license lucide-react v0.470.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const HeartPulse = createLucideIcon("HeartPulse", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ],
  ["path", { d: "M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27", key: "1uw2ng" }]
]);

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const Alert = reactExports.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    ref,
    role: "alert",
    className: cn(alertVariants({ variant }), className),
    ...props
  }
));
Alert.displayName = "Alert";
const AlertTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "h5",
  {
    ref,
    className: cn("mb-1 font-medium leading-none tracking-tight", className),
    ...props
  }
));
AlertTitle.displayName = "AlertTitle";
const AlertDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    ref,
    className: cn("text-sm [&_p]:leading-relaxed", className),
    ...props
  }
));
AlertDescription.displayName = "AlertDescription";

function VaccineDetail() {
  window.scrollTo(0, 0);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [vaccine, setVaccine] = reactExports.useState(null);
  const [isLoading, setIsLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const fetchVaccine = async () => {
      if (!id) return;
      try {
        const data = await getVaccineById(id);
        setVaccine(data);
      } catch (error) {
        console.error("Error fetching vaccine:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchVaccine();
  }, [id]);
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto py-8 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-pulse space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 bg-gray-200 rounded w-1/4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-gray-200 rounded w-3/4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-gray-200 rounded w-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-gray-200 rounded w-2/3" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-64 bg-gray-200 rounded" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-96 bg-gray-200 rounded" })
    ] }) });
  }
  if (!vaccine) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto py-8 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600", children: "Vaccine not found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => navigate(-1), className: "mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
        " Go Back"
      ] })
    ] }) });
  }
  const handleBookAppointment = () => {
    navigate("/appointments", {
      state: {
        fromVaccineDetail: true,
        vaccineId: id
      }
    });
  };
  const handleBackToVaccineList = () => {
    if (!location.state?.fromVaccineDetail) {
      navigate("/vaccine-list");
    } else {
      navigate(-1);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto py-8 px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", onClick: handleBackToVaccineList, className: "mb-8 hover:bg-gray-100", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
      " Back to Vaccine List"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose max-w-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-[#1e1b4b] m-0", children: vaccine.vaccineName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "h-fit", children: vaccine.type })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-5 rounded-lg shadow-sm border border-gray-100 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-[#1e1b4b] mb-2", children: "About this vaccine" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 mb-3 leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium underline", children: [
              "Vaccine ",
              vaccine.vaccineName
            ] }),
            " helps prevent",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium underline", children: vaccine.description }),
            ", strengthens the immune system, and reduces the risk of infection."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 mt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 px-4 py-2 rounded-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-700 font-medium", children: "Required doses:" }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-800 font-bold", children: vaccine.requiredDoses })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 px-4 py-2 rounded-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-700 font-medium", children: "Interval:" }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-blue-800 font-bold", children: [
                vaccine.doseIntervalDays,
                " days"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Post-vaccination reactions may include mild pain, fever, or fatigue, with severe complications being rare. Book an appointment now to protect your health!" }),
        (vaccine.avoidChronic || vaccine.avoidAllergy || vaccine.hasDrugInteraction || vaccine.hasSpecialWarning) && /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { variant: "destructive", className: "mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AlertTitle, { children: "Important Warnings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { children: "This vaccine has special considerations. Please consult with your healthcare provider." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-[300px] rounded-lg overflow-hidden bg-white shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: vaccine.picUrl || "/placeholder.svg?height=300&width=400",
          alt: vaccine.vaccineName,
          className: "w-full h-full object-contain"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl font-semibold flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Syringe, { className: "h-5 w-5" }),
              "Dosage Information"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 divide-y divide-gray-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 pt-3 first:pt-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4 mt-1 text-gray-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "Required Doses" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-600", children: [
                    vaccine.requiredDoses,
                    " dose(s)"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 pt-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 mt-1 text-gray-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "Interval Between Doses" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-600", children: [
                    vaccine.doseIntervalDays,
                    " days"
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl font-semibold flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(HeartPulse, { className: "h-5 w-5" }),
              "Medical Considerations"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 divide-y divide-gray-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 pt-3 first:pt-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Droplets, { className: "h-4 w-4 mt-1 text-gray-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "Blood Type Compatibility" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: vaccine.forBloodType || "All blood types" })
                ] })
              ] }),
              vaccine.avoidChronic && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 pt-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Ban, { className: "h-4 w-4 mt-1 text-red-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-red-600", children: "Chronic Conditions" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: "May be contraindicated for chronic conditions" })
                ] })
              ] }),
              vaccine.avoidAllergy && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 pt-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4 mt-1 text-red-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-red-600", children: "Allergy Warning" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: "May cause allergic reactions" })
                ] })
              ] }),
              vaccine.hasDrugInteraction && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 pt-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { className: "h-4 w-4 mt-1 text-amber-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-amber-600", children: "Drug Interactions" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: "May interact with other medications" })
                ] })
              ] })
            ] })
          ] })
        ] }),
        vaccine.hasSpecialWarning && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-amber-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "h-5 w-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Special Warnings" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-amber-700", children: "This vaccine requires special medical consideration. Please consult with your healthcare provider before proceeding." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 p-6 rounded-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-blue-900 mb-2", children: "Price per Dose" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline space-x-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-bold text-blue-600", children: new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND"
            }).format(vaccine.price) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-blue-600", children: "/dose" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-blue-600 mt-2", children: [
            "Total for ",
            vaccine.requiredDoses,
            " doses:",
            " ",
            new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND"
            }).format(vaccine.price * vaccine.requiredDoses)
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 text-gray-600 bg-gray-50/80 p-4 rounded-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-4 w-4 mt-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
              "Schedule includes ",
              vaccine.requiredDoses,
              " doses with ",
              vaccine.doseIntervalDays,
              " days between each dose"
            ] })
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

export { VaccineDetail as default };
