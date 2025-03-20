import { a0 as axiosInstance, r as reactExports, u as useNavigate, j as jsxRuntimeExports, B as Button, O as Badge, C as Clock, S as Separator } from './index-BxW4NEkE.js';
import { C as Card, b as CardHeader, a as CardContent, c as CardTitle } from './card-B_2urvVV.js';
import { S as Skeleton } from './skeleton-Dc4Ew3Pt.js';
import { A as ArrowLeft } from './arrow-left-D-m9pVgB.js';
import { T as TriangleAlert } from './triangle-alert-DCnevubJ.js';
import { I as Info } from './info-DnawUoCu.js';
import { F as FileText } from './file-text-C0z9tgvb.js';

const getAllPolicies = async () => {
  try {
    const response = await axiosInstance.get("/policies");
    if (response.data.isSuccess && response.data.data && response.data.data.policies && Array.isArray(response.data.data.policies)) {
      return response.data.data.policies;
    } else {
      console.warn("API returned success but data structure is unexpected:", response.data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching policies:", error);
    throw error;
  }
};

function PolicyPage() {
  const [policies, setPolicies] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    const fetchPolicies = async () => {
      try {
        setLoading(true);
        const data = await getAllPolicies();
        setPolicies(Array.isArray(data) ? data : []);
        setError(null);
      } catch (err) {
        setError("Failed to load policies. Please try again later.");
        console.error(err);
        setPolicies([]);
      } finally {
        setLoading(false);
      }
    };
    fetchPolicies();
  }, []);
  const handleGoBack = () => {
    navigate(-1);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto py-10 px-4 max-w-4xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", className: "mr-2", onClick: handleGoBack, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4 mr-2" }),
        "Go Back"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", children: "Cancellation & Rescheduling Policies" })
    ] }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: [1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-3/4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-1/2" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-24 w-full" }) })
    ] }, i)) }) : error ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-red-50 p-6 rounded-lg border border-red-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-5 w-5 text-red-500 mr-3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-700", children: error })
    ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-10", children: policies.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-10 bg-gray-50 rounded-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-10 w-10 text-gray-400 mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-lg", children: "No policies found." })
    ] }) : policies.map((policy) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "w-full shadow-md overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gray-50 pb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:justify-between md:items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xl mb-1", children: policy.policyName }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500", children: [
            "Policy ID: ",
            policy.policyId
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200 px-3 py-1.5 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5 mr-1.5" }),
            policy.cancellationDeadline,
            " hours notice"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-amber-100 text-amber-800 border-amber-200 hover:bg-amber-200 px-3 py-1.5 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3.5 w-3.5 mr-1.5" }),
            policy.penaltyFee,
            "% penalty fee"
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-6 pb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 p-5 rounded-lg border border-blue-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "flex items-center text-blue-800 font-medium mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-5 w-5 mr-2 text-blue-600" }),
              "Cancellation Deadline"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-blue-700", children: [
              "You must cancel or reschedule your appointment at least",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-lg mx-1", children: [
                policy.cancellationDeadline,
                " hours"
              ] }),
              "before the scheduled time."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-amber-50 p-5 rounded-lg border border-amber-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "flex items-center text-amber-800 font-medium mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-5 w-5 mr-2 text-amber-600" }),
              "Penalty Fee"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-amber-700", children: policy.penaltyFee === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              "There is ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "no penalty fee" }),
              " if you cancel before the deadline."
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              "A ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-lg", children: [
                policy.penaltyFee,
                "%"
              ] }),
              " penalty fee will be charged if you cancel after the deadline."
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "flex items-center text-gray-700 font-medium mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-5 w-5 mr-2 text-gray-500" }),
            "Full Policy Description"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-50 p-6 rounded-lg border border-gray-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 leading-relaxed whitespace-pre-line", children: policy.description }) })
        ] })
      ] })
    ] }, policy.policyId)) })
  ] });
}

export { PolicyPage as default };
