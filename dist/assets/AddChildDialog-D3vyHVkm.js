import { c as createLucideIcon, j as jsxRuntimeExports, o as Input, z as cn, r as reactExports, B as Button, U as User, q as Calendar } from './index-BxW4NEkE.js';
import { L as Label } from './label-CC7x5zSE.js';
import { T as Textarea } from './textarea-Bx7BMk8e.js';
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from './select-DSKKSaz0.js';
import { S as Switch } from './switch-CW43_mRV.js';
import { S as ScrollArea } from './scroll-area-3qPU35El.js';
import { D as Dialog, e as DialogTrigger, c as DialogContent, f as DialogHeader, g as DialogTitle } from './dialog-3s5tW-4P.js';
import { P as Plus } from './plus-Dsbyyh0v.js';
import { F as FileText } from './file-text-C0z9tgvb.js';
import { T as TriangleAlert } from './triangle-alert-DCnevubJ.js';
import { P as Pill } from './pill-C9rOjwW7.js';

/**
 * @license lucide-react v0.470.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Activity = createLucideIcon("Activity", [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
]);

/**
 * @license lucide-react v0.470.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Droplet = createLucideIcon("Droplet", [
  [
    "path",
    {
      d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",
      key: "c7niix"
    }
  ]
]);

function DateInput({ date, setDate, className, ...props }) {
  const handleChange = (e) => {
    const value = e.target.value;
    if (value) {
      setDate(new Date(value));
    } else {
      setDate(void 0);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Input,
    {
      type: "date",
      value: date ? date.toISOString().split("T")[0] : "",
      onChange: handleChange,
      className: cn("w-full", className),
      ...props
    }
  );
}

function AddChildDialog({ onSubmit }) {
  const [open, setOpen] = reactExports.useState(false);
  const [dateOfBirth, setDateOfBirth] = reactExports.useState(/* @__PURE__ */ new Date());
  const [formData, setFormData] = reactExports.useState({
    fullName: "",
    dateOfBirth: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
    // Format as YYYY-MM-DD
    gender: true,
    medicalHistory: "",
    bloodType: "Unknown",
    hasChronicIllnesses: false,
    chronicIllnessesDescription: "",
    hasAllergies: false,
    allergiesDescription: "",
    hasRecentMedication: false,
    recentMedicationDescription: "",
    hasOtherSpecialCondition: false,
    otherSpecialConditionDescription: ""
  });
  const resetForm = () => {
    setFormData({
      fullName: "",
      dateOfBirth: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      gender: true,
      medicalHistory: "",
      bloodType: "Unknown",
      hasChronicIllnesses: false,
      chronicIllnessesDescription: "",
      hasAllergies: false,
      allergiesDescription: "",
      hasRecentMedication: false,
      recentMedicationDescription: "",
      hasOtherSpecialCondition: false,
      otherSpecialConditionDescription: ""
    });
    setDateOfBirth(/* @__PURE__ */ new Date());
  };
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const handleDateChange = (newDate) => {
    setDateOfBirth(newDate);
    if (newDate) {
      handleInputChange("dateOfBirth", newDate.toISOString());
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const submissionData = {
        ...formData,
        dateOfBirth: dateOfBirth?.toISOString().split("T")[0] || (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
      };
      await onSubmit(submissionData);
      setOpen(false);
      resetForm();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
    if (!newOpen) {
      resetForm();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onOpenChange: handleOpenChange, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "bg-blue-600 hover:bg-blue-700", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4 mr-2" }),
      "Add Child"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      DialogContent,
      {
        className: "max-w-3xl max-h-[80vh] overflow-hidden",
        onPointerDownOutside: (e) => {
          const target = e.target;
          if (target.closest('[role="dialog"]') || target.closest('[role="listbox"]')) {
            e.preventDefault();
          }
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Add New Child" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "h-[calc(80vh-8rem)] px-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "fullName", className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Full Name" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "fullName",
                  value: formData.fullName,
                  onChange: (e) => handleInputChange("fullName", e.target.value),
                  required: true,
                  className: "bg-transparent"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "dateOfBirth", className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Date of Birth" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  DateInput,
                  {
                    id: "dateOfBirth",
                    date: dateOfBirth,
                    setDate: handleDateChange,
                    max: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
                    required: true
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "gender", className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Gender" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: formData.gender ? "true" : "false",
                    onValueChange: (value) => handleInputChange("gender", value === "true"),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { children: formData.gender ? "Male" : "Female" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { position: "popper", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "true", children: "Male" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "false", children: "Female" })
                      ] })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "bloodType", className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Droplet, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Blood Type" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: formData.bloodType,
                  onValueChange: (value) => {
                    handleInputChange("bloodType", value);
                    setFormData((prev) => ({ ...prev, bloodType: value }));
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { children: formData.bloodType }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { position: "popper", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "A", children: "A" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "B", children: "B" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "AB", children: "AB" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "O", children: "O" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Unknown", children: "Unknown" })
                    ] })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "medicalHistory", className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Medical History" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  id: "medicalHistory",
                  value: formData.medicalHistory,
                  onChange: (e) => handleInputChange("medicalHistory", e.target.value),
                  className: "min-h-[100px] bg-transparent"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 border-t pt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "chronicIllnesses", className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Chronic Illnesses" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Switch,
                  {
                    id: "chronicIllnesses",
                    checked: formData.hasChronicIllnesses,
                    onCheckedChange: (checked) => handleInputChange("hasChronicIllnesses", checked)
                  }
                )
              ] }),
              formData.hasChronicIllnesses && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  id: "chronicIllnessesDescription",
                  value: formData.chronicIllnessesDescription,
                  onChange: (e) => handleInputChange("chronicIllnessesDescription", e.target.value),
                  placeholder: "Describe any chronic illnesses",
                  className: "mt-2 min-h-[100px]",
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 border-t pt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "allergies", className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Allergies" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Switch,
                  {
                    id: "allergies",
                    checked: formData.hasAllergies,
                    onCheckedChange: (checked) => handleInputChange("hasAllergies", checked)
                  }
                )
              ] }),
              formData.hasAllergies && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  id: "allergiesDescription",
                  value: formData.allergiesDescription,
                  onChange: (e) => handleInputChange("allergiesDescription", e.target.value),
                  placeholder: "Describe any allergies",
                  className: "mt-2 min-h-[100px]",
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 border-t pt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "recentMedication", className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Recent Medication" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Switch,
                  {
                    id: "recentMedication",
                    checked: formData.hasRecentMedication,
                    onCheckedChange: (checked) => handleInputChange("hasRecentMedication", checked)
                  }
                )
              ] }),
              formData.hasRecentMedication && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  id: "recentMedicationDescription",
                  value: formData.recentMedicationDescription,
                  onChange: (e) => handleInputChange("recentMedicationDescription", e.target.value),
                  placeholder: "Describe any recent medication",
                  className: "mt-2 min-h-[100px]",
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 border-t pt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "otherConditions", className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Other Special Conditions" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Switch,
                  {
                    id: "otherConditions",
                    checked: formData.hasOtherSpecialCondition,
                    onCheckedChange: (checked) => handleInputChange("hasOtherSpecialCondition", checked)
                  }
                )
              ] }),
              formData.hasOtherSpecialCondition && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  id: "otherConditionsDescription",
                  value: formData.otherSpecialConditionDescription,
                  onChange: (e) => handleInputChange("otherSpecialConditionDescription", e.target.value),
                  placeholder: "Describe any other special conditions",
                  className: "mt-2 min-h-[100px]",
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end space-x-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", onClick: () => setOpen(false), children: "Cancel" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "bg-blue-600 hover:bg-blue-700", children: "Add Child" })
            ] })
          ] }) }) })
        ]
      }
    )
  ] });
}

export { AddChildDialog as A, Droplet as D, Activity as a };
