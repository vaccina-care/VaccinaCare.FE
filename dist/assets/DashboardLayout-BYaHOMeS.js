import { c as createLucideIcon, u as useNavigate, t as useLocation, j as jsxRuntimeExports, z as cn, U as User, q as Calendar, Y as Bell } from './index-BxW4NEkE.js';
import { C as Card } from './card-B_2urvVV.js';
import { U as Users } from './users-DfEX5jUe.js';

/**
 * @license lucide-react v0.470.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const History = createLucideIcon("History", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
]);

const DashboardLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "flex min-h-[600px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-64 border-r border-gray-200 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => navigate("/user-dashboard"),
          className: cn(
            "flex w-full items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-gray-100",
            isActive("/user-dashboard") ? "text-blue-600 bg-blue-50" : "text-gray-600"
          ),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Personal Information" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => navigate("/child-dashboard"),
          className: cn(
            "flex w-full items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-gray-100",
            isActive("/child-dashboard") ? "text-blue-600 bg-blue-50" : "text-gray-600"
          ),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Children Information" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => navigate("/appointments-dashboard"),
          className: cn(
            "flex w-full items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-gray-100",
            isActive("/appointments-dashboard") ? "text-blue-600 bg-blue-50" : "text-gray-600"
          ),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Appointments" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => navigate("/vaccine-record"),
          className: cn(
            "flex w-full items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-gray-100",
            isActive("/vaccine-record") ? "text-blue-600 bg-blue-50" : "text-gray-600"
          ),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(History, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Vaccine Record" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => navigate("/notifications"),
          className: cn(
            "flex w-full items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-gray-100",
            isActive("/notifications") ? "text-blue-600 bg-blue-50" : "text-gray-600"
          ),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Notifications" })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 p-6", children })
  ] }) });
};

export { DashboardLayout as D };
