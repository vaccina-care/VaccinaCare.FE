import { u as useNavigate, r as reactExports, j as jsxRuntimeExports, n as motion, B as Button, E as like } from './index-BxW4NEkE.js';
import { C as CircleCheckBig } from './circle-check-big-zj_ofpHZ.js';

const successImg = "https://minio.ae-tao-fullstack-api.site/api/v1/buckets/vaccinacare-bucket/objects/download?preview=true&prefix=payment%2Fsuccess.jpg&version_id=null";
function PaymentSuccessPage() {
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    window.scrollTo(0, 0);
    if (window.history.replaceState) {
      const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
      window.history.replaceState({}, "", cleanUrl);
    }
  }, []);
  const handleFinish = () => {
    navigate("/appointments-dashboard", {
      replace: true,
      state: {}
      // Empty state to clear any previous state
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 flex flex-col items-center justify-center px-4 py-12 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        className: "max-w-md w-full mx-auto flex flex-col items-center bg-white p-10 rounded-2xl shadow-xl",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { scale: 0 },
                animate: { scale: 1 },
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1
                },
                className: "bg-green-100 rounded-full p-3",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-16 w-16 text-green-600", strokeWidth: 2 })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { scale: 0, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                transition: { delay: 0.5, duration: 0.3 },
                className: "absolute -top-2 -right-2 bg-[#1e1b4b] text-white text-xs font-bold rounded-full h-8 w-8 flex items-center justify-center",
                children: "✓"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.h1,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.3 },
              className: "text-3xl font-bold text-gray-800 mb-3",
              children: "Payment Successful!"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.4 },
              className: "text-gray-600 mb-8",
              children: "Your payment has been completed."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.5 },
              className: "mb-8 w-full",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: successImg,
                  alt: "Payment Success",
                  width: 300,
                  height: 200,
                  className: "w-full h-auto"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.5 },
              className: "w-full",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  onClick: handleFinish,
                  className: "w-full py-6 text-lg bg-[#1e1b4b] hover:bg-[#1e1b4b]/90 rounded-xl shadow-lg\r\n                            shadow-blue-200 transition-all duration-300\r\n                            hover:shadow-blue-300 hover:-translate-y-1",
                  children: "Finish"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.7 },
              className: "mt-8 flex flex-col items-center",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-1 rounded-full bg-blue-300" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-1 rounded-full bg-blue-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-1 rounded-full bg-blue-500" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-1 rounded-full bg-[#1e1b4b]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-1 rounded-full bg-blue-500" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-1 rounded-full bg-blue-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-1 rounded-full bg-blue-300" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-gray-500", children: [
                  "Transaction ID:",
                  Math.floor(Math.random() * 1e6).toString().padStart(6, "0")
                ] })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 text-center text-sm text-gray-500", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-gray-400",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })
              ]
            }
          ),
          "Secure payments by VNPAY"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: like, alt: "Payment Provider", width: 60, height: 24, className: "mx-2" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center justify-center gap-1", children: [
        "Powered by ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-medium", children: "VACCINACARE TEAM" }),
        " |",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => navigate("/policy", { state: {} }),
            className: "underline hover:text-[#1e1b4b] transition-colors",
            children: "Policy"
          }
        )
      ] })
    ] })
  ] }) });
}

export { PaymentSuccessPage as default };
