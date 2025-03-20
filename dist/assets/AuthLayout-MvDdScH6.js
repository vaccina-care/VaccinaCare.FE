import { j as jsxRuntimeExports, n as motion } from './index-BxW4NEkE.js';

const AuthLayout = ({ children, illustration, isReversed = false }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.3 },
      className: `min-h-screen w-full flex ${isReversed ? "flex-row-reverse" : "flex-row"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { x: isReversed ? 50 : -50, opacity: 0 },
            animate: { x: 0, opacity: 1 },
            transition: { duration: 0.5 },
            className: "flex-1 flex items-center justify-center p-8",
            children
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { x: isReversed ? -50 : 50, opacity: 0 },
            animate: { x: 0, opacity: 1 },
            transition: { duration: 0.5 },
            className: "hidden lg:block flex-1 bg-[#EEF2FF] relative overflow-hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: illustration,
                alt: "Medical illustration",
                className: "absolute inset-0 w-full h-full object-cover object-center"
              }
            )
          }
        )
      ]
    }
  );
};

export { AuthLayout as A };
