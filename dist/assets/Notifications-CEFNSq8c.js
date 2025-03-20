import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, O as Badge, z as cn, q as Calendar, K as MapPin, Y as Bell } from './index-BxW4NEkE.js';
import { D as DashboardLayout } from './DashboardLayout-BYaHOMeS.js';
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from './card-B_2urvVV.js';
import { S as ScrollArea } from './scroll-area-3qPU35El.js';
import { S as Syringe } from './syringe-BY_crmr6.js';
import { I as Info } from './info-DnawUoCu.js';
import './users-DfEX5jUe.js';
import './index-BZ7ugsel.js';
import './index-xYyTdMn9.js';
import './index-BfAAoDv6.js';

/**
 * @license lucide-react v0.470.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const CircleCheck = createLucideIcon("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);

/**
 * @license lucide-react v0.470.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const UserRound = createLucideIcon("UserRound", [
  ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
]);

const sampleNotifications = [
  {
    id: "1",
    type: "appointment",
    title: "Xác nhận lịch hẹn tiêm chủng",
    content: {
      childName: "Suppa skibidi",
      appointmentDate: "20/1/2025",
      doctor: "Nguyễn Văn Ô",
      vaccine: "Vaccine MMR",
      location: "Phòng khám số 3, Tầng 2"
    },
    timestamp: "2024-01-15T10:30:00Z",
    isRead: false
  },
  {
    id: "2",
    type: "update",
    title: "Cập nhật thông tin trẻ",
    content: {
      childName: "Suppa skibidi",
      message: "Thông tin sức khỏe của trẻ đã được cập nhật thành công."
    },
    timestamp: "2024-01-14T15:20:00Z",
    isRead: true
  },
  {
    id: "3",
    type: "suggestion",
    title: "Đề xuất gói vaccine",
    content: {
      childName: "Suppa skibidi",
      message: "Dựa trên độ tuổi và lịch sử tiêm chủng, chúng tôi đề xuất gói vaccine 6 trong 1 cho trẻ."
    },
    timestamp: "2024-01-13T09:15:00Z",
    isRead: true
  },
  {
    id: "4",
    type: "system",
    title: "Chào mừng đến với VaccinaCare",
    content: {
      message: "Cảm ơn bạn đã đăng ký tài khoản. Hãy bắt đầu bằng việc thêm thông tin cho trẻ."
    },
    timestamp: "2024-01-12T08:00:00Z",
    isRead: true
  }
];
const NotificationIcon = ({ type }) => {
  switch (type) {
    case "appointment":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-5 w-5 text-blue-500" });
    case "update":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-green-500" });
    case "suggestion":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Syringe, { className: "h-5 w-5 text-purple-500" });
    case "system":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-5 w-5 text-gray-500" });
    default:
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-5 w-5 text-gray-500" });
  }
};
const NotificationCard = ({ notification }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Card,
    {
      className: cn("mb-4 transition-colors hover:bg-gray-50", !notification.isRead && "border-l-4 border-l-blue-500"),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NotificationIcon, { type: notification.type }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium text-sm", children: notification.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: notification.isRead ? "secondary" : "default", className: "text-xs", children: notification.isRead ? "Đã đọc" : "Chưa đọc" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            notification.content.childName && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(UserRound, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Tên trẻ: ",
                notification.content.childName
              ] })
            ] }),
            notification.content.appointmentDate && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Ngày giờ tiêm: ",
                notification.content.appointmentDate
              ] })
            ] }),
            notification.content.doctor && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(UserRound, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Bác sĩ phụ trách: ",
                notification.content.doctor
              ] })
            ] }),
            notification.content.vaccine && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Syringe, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Vaccine: ",
                notification.content.vaccine
              ] })
            ] }),
            notification.content.location && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Địa điểm: ",
                notification.content.location
              ] })
            ] }),
            notification.content.message && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: notification.content.message }),
            notification.type === "appointment" && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500 mt-2 italic", children: [
              "Vui lòng đến sớm 15 phút trước giờ hẹn để hoàn tất các thủ tục.",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Nếu có thay đổi, bạn có thể cập nhật hoặc hủy lịch hẹn trước thời gian giờ hẹn."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 mt-2", children: formatDate(notification.timestamp) })
        ] })
      ] }) })
    }
  );
};
function NotificationsSection() {
  const [notifications] = reactExports.useState(sampleNotifications);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-[#1e1b4b]", children: "Thông báo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500", children: "Xem tất cả thông báo và cập nhật của bạn" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "rounded-full", children: [
        notifications.filter((n) => !n.isRead).length,
        " chưa đọc"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg font-medium", children: "Danh sách thông báo" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "h-[600px] pr-4", children: notifications.map((notification) => /* @__PURE__ */ jsxRuntimeExports.jsx(NotificationCard, { notification }, notification.id)) }) })
    ] })
  ] });
}

const Notifications = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(NotificationsSection, {}) });
};

export { Notifications as default };
