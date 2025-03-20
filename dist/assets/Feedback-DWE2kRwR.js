import { r as reactExports, j as jsxRuntimeExports, B as Button } from './index-BxW4NEkE.js';
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from './card-B_2urvVV.js';
import { L as Label } from './label-CC7x5zSE.js';
import { T as Textarea } from './textarea-Bx7BMk8e.js';
import { S as Star } from './star-_WNAg_0B.js';

function FeedbackForm() {
  const [formData, setFormData] = reactExports.useState({
    comment: "",
    rating: 0
  });
  const [hoveredRating, setHoveredRating] = reactExports.useState(0);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const handleRatingChange = (rating) => {
    setFormData((prev) => ({
      ...prev,
      rating
    }));
  };
  const getRatingText = (rating) => {
    switch (rating) {
      case 1:
        return "Very Dissatisfied";
      case 2:
        return "Dissatisfied";
      case 3:
        return "Neutral";
      case 4:
        return "Satisfied";
      case 5:
        return "Very Satisfied";
      default:
        return "";
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Feedback submitted successfully!");
    setFormData({
      comment: "",
      rating: 0
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto py-8 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "w-full max-w-md mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-2xl font-bold", children: "Vaccine Feedback" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "comment", children: "Comment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            id: "comment",
            name: "comment",
            placeholder: "Enter your comment",
            value: formData.comment,
            onChange: handleChange,
            required: true,
            className: "min-h-[100px]"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "rating", children: "Rating" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => handleRatingChange(star),
              onMouseEnter: () => setHoveredRating(star),
              onMouseLeave: () => setHoveredRating(0),
              className: "focus:outline-none transition-transform duration-200 ease-in-out transform hover:scale-110",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Star,
                {
                  size: 40,
                  className: `${(hoveredRating || formData.rating) >= star ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} cursor-pointer`
                }
              )
            },
            star
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm px-3 font-medium", children: (hoveredRating || formData.rating) > 0 && getRatingText(hoveredRating || formData.rating) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full bg-black text-white hover:bg-gray-800", children: "Submit Feedback" })
    ] }) })
  ] }) });
}

export { FeedbackForm as default };
