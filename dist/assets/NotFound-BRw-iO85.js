import { j as jsxRuntimeExports, n as motion, B as Button, L as Link } from './index-BxW4NEkE.js';

const notFoundImage = "https://minio.ae-tao-fullstack-api.site/api/v1/buckets/vaccinacare-bucket/objects/download?preview=true&prefix=notFound.jpg&version_id=null";
const NotFound = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.5 },
        className: "space-y-6",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl text-muted-foreground", children: "404" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold text-[#1e1b4b] font-yeseva", children: "Page not found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground", children: "Sorry, we couldn't find the page you're looking for. Please check the URL or navigate back home." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                asChild: true,
                className: "bg-blue-600 hover:bg-blue-700",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: "Go back home" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Contact support" }) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.5, delay: 0.2 },
        className: "flex justify-center",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: notFoundImage,
            alt: "404 Illustration",
            className: "w-full h-full object-cover"
          }
        )
      }
    )
  ] }) }) });
};

export { NotFound as default };
