import { c as createLucideIcon, r as reactExports, p as useToast, j as jsxRuntimeExports, O as Badge, B as Button, Q as AnimatePresence, n as motion, U as User, o as Input, q as Calendar } from './index-BxW4NEkE.js';
import { D as DashboardLayout } from './DashboardLayout-BYaHOMeS.js';
import { C as Card, b as CardHeader, a as CardContent, c as CardTitle } from './card-B_2urvVV.js';
import { L as Label } from './label-CC7x5zSE.js';
import { T as Textarea } from './textarea-Bx7BMk8e.js';
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from './select-DSKKSaz0.js';
import { S as Switch } from './switch-CW43_mRV.js';
import { D as DatePicker } from './DatePicker-BN7URmnc.js';
import { g as getChildren, c as createChild, d as deleteChild, u as updateChild } from './children-CDjq7Dbq.js';
import { A as AlertDialog, a as AlertDialogTrigger, b as AlertDialogContent, c as AlertDialogHeader, d as AlertDialogTitle, e as AlertDialogDescription, f as AlertDialogFooter, g as AlertDialogCancel, h as AlertDialogAction } from './alert-dialog-B8XqlljX.js';
import { A as AddChildDialog, D as Droplet, a as Activity } from './AddChildDialog-D3vyHVkm.js';
import { S as Skeleton } from './skeleton-Dc4Ew3Pt.js';
import { C as ChevronUp, a as ChevronDown } from './chevron-up-wBRuSHft.js';
import { P as Pencil } from './pencil-BnPazAKP.js';
import { T as Trash2 } from './trash-2-DnCXpPLX.js';
import { F as FileText } from './file-text-C0z9tgvb.js';
import { T as TriangleAlert } from './triangle-alert-DCnevubJ.js';
import { P as Pill } from './pill-C9rOjwW7.js';
import './users-DfEX5jUe.js';
import './index-BZ7ugsel.js';
import './dialog-3s5tW-4P.js';
import './index-BIORAGEQ.js';
import './index-DcBPRh-Z.js';
import './calendar-D-7oRoOI.js';
import './format-CqEybc0i.js';
import './chevron-right-xZVHym6g.js';
import './scroll-area-3qPU35El.js';
import './index-xYyTdMn9.js';
import './index-BfAAoDv6.js';
import './plus-Dsbyyh0v.js';

/**
 * @license lucide-react v0.470.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Baby = createLucideIcon("Baby", [
  ["path", { d: "M9 12h.01", key: "157uk2" }],
  ["path", { d: "M15 12h.01", key: "1k8ypt" }],
  ["path", { d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5", key: "1u7htd" }],
  [
    "path",
    {
      d: "M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",
      key: "5yv0yz"
    }
  ]
]);

const useChildren = () => {
  const [children, setChildren] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const { toast } = useToast();
  const fetchChildren = reactExports.useCallback(async () => {
    try {
      setLoading(true);
      console.log("Fetching children...");
      const data = await getChildren();
      console.log("Fetched children:", data);
      setChildren(data);
    } catch (error) {
      console.error("Error fetching children:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to fetch children data",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);
  reactExports.useEffect(() => {
    fetchChildren();
  }, [fetchChildren]);
  const addChild = reactExports.useCallback(
    async (childData) => {
      try {
        const newChild = await createChild(childData);
        setChildren((prevChildren) => [...prevChildren, newChild]);
        toast({
          title: "Success",
          description: "New child added successfully"
        });
        return newChild;
      } catch (error) {
        console.error("Error adding child:", error);
        toast({
          title: "Error",
          description: error instanceof Error ? error.message : "Failed to add new child",
          variant: "destructive"
        });
        throw error;
      }
    },
    [toast]
  );
  return {
    children,
    loading,
    fetchChildren,
    addChild
  };
};

const ChildCard = ({
  child,
  isEditing,
  onEdit,
  onSave,
  onDelete
}) => {
  const [editedChild, setEditedChild] = reactExports.useState(child);
  const [dateOfBirth, setDateOfBirth] = reactExports.useState(new Date(child.dateOfBirth));
  const [isExpanded, setIsExpanded] = reactExports.useState(false);
  const handleInputChange = (field, value) => {
    setEditedChild((prev) => ({ ...prev, [field]: value }));
  };
  const handleDateChange = (newDate) => {
    setDateOfBirth(newDate);
    if (newDate) {
      handleInputChange("dateOfBirth", newDate.toISOString());
    }
  };
  const handleSave = () => {
    onSave({ ...editedChild, dateOfBirth: dateOfBirth ? dateOfBirth.toISOString() : child.dateOfBirth });
  };
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = /* @__PURE__ */ new Date();
    let age2 = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || monthDiff === 0 && today.getDate() < birthDate.getDate()) {
      age2--;
    }
    return age2;
  };
  const age = calculateAge(child.dateOfBirth);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: `border ${isExpanded ? "border-blue-200 shadow-md" : "hover:border-blue-100"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      CardHeader,
      {
        className: `flex flex-row items-center justify-between space-y-0 pb-2 cursor-pointer
                ${isExpanded ? "bg-gradient-to-r from-blue-50 to-white" : "hover:bg-gray-50"}`,
        onClick: toggleExpand,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-100 p-2 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Baby, { className: "h-5 w-5 text-blue-600" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg text-black-700", children: editedChild.fullName }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "bg-blue-50 text-blue-700 border-blue-200", children: [
                  age,
                  " years old"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "bg-gray-50 text-gray-700 border-gray-200", children: editedChild.gender ? "Male" : "Female" }),
                editedChild.bloodType && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "bg-red-50 text-red-700 border-red-200", children: [
                  "Blood: ",
                  editedChild.bloodType
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "ghost",
              size: "icon",
              onClick: (e) => {
                e.stopPropagation();
                toggleExpand();
              },
              children: isExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-5 w-5" })
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isExpanded && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1 },
        exit: { height: 0, opacity: 0 },
        transition: { duration: 0.3 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex space-x-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: onEdit, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-4 w-4 mr-2" }),
              isEditing ? "Cancel" : "Edit"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialog, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", className: "bg-red-100 hover:bg-red-200 text-red-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4 mr-2" }),
                "Delete"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: "Are you sure you want to delete this child's profile?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { children: "This action cannot be undone. This will permanently delete the child's profile and remove all associated data." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { children: "Cancel" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    AlertDialogAction,
                    {
                      onClick: () => onDelete(child.id),
                      className: "bg-red-600 text-white hover:bg-red-700",
                      children: "Delete"
                    }
                  )
                ] })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50/50 rounded-lg p-4 border border-blue-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "fullName", className: "flex items-center space-x-2 text-blue-700", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Full Name" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "fullName",
                    value: editedChild.fullName,
                    onChange: (e) => handleInputChange("fullName", e.target.value),
                    disabled: !isEditing,
                    className: `bg-white ${isEditing ? "border-blue-300" : ""}`
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "dateOfBirth", className: "flex items-center space-x-2 text-blue-700", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Date of Birth" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DatePicker, { date: dateOfBirth, setDate: handleDateChange, disabled: !isEditing })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "gender", className: "flex items-center space-x-2 text-blue-700", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Gender" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Select,
                    {
                      disabled: !isEditing,
                      value: editedChild.gender ? "true" : "false",
                      onValueChange: (value) => handleInputChange("gender", value === "true"),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: isEditing ? "border-blue-300" : "", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select gender" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "true", children: "Male" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "false", children: "Female" })
                        ] })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "bloodType", className: "flex items-center space-x-2 text-blue-700", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Droplet, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Blood Type" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    disabled: !isEditing,
                    value: editedChild.bloodType,
                    onValueChange: (value) => handleInputChange("bloodType", value),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: isEditing ? "border-blue-300" : "", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select blood type" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "A", children: "A" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "B", children: "B" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "AB", children: "AB" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "O", children: "O" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Unknown", children: "Unknown" })
                      ] })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-50 rounded-lg p-4 border border-gray-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "medicalHistory", className: "flex items-center space-x-2 text-gray-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Medical History" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  id: "medicalHistory",
                  value: editedChild.medicalHistory,
                  onChange: (e) => handleInputChange("medicalHistory", e.target.value),
                  disabled: !isEditing,
                  className: `min-h-[100px] bg-white ${isEditing ? "border-blue-300" : ""}`
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 border-t pt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-gray-700", children: "Health Conditions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `p-4 rounded-lg ${editedChild.hasChronicIllnesses ? "bg-amber-50 border border-amber-200" : "bg-gray-50 border border-gray-200"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Label,
                        {
                          htmlFor: "chronicIllnesses",
                          className: `flex items-center space-x-2 ${editedChild.hasChronicIllnesses ? "text-amber-700" : "text-gray-700"}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-4 w-4" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Chronic Illnesses" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Switch,
                        {
                          id: "chronicIllnesses",
                          checked: editedChild.hasChronicIllnesses,
                          onCheckedChange: (checked) => handleInputChange("hasChronicIllnesses", checked),
                          disabled: !isEditing
                        }
                      )
                    ] }),
                    editedChild.hasChronicIllnesses && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Textarea,
                      {
                        id: "chronicIllnessesDescription",
                        value: editedChild.chronicIllnessesDescription,
                        onChange: (e) => handleInputChange("chronicIllnessesDescription", e.target.value),
                        placeholder: "Describe any chronic illnesses",
                        className: `mt-2 min-h-[100px] bg-white ${isEditing ? "border-amber-300" : ""}`,
                        disabled: !isEditing
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `p-4 rounded-lg ${editedChild.hasAllergies ? "bg-red-50 border border-red-200" : "bg-gray-50 border border-gray-200"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Label,
                        {
                          htmlFor: "allergies",
                          className: `flex items-center space-x-2 ${editedChild.hasAllergies ? "text-red-700" : "text-gray-700"}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Allergies" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Switch,
                        {
                          id: "allergies",
                          checked: editedChild.hasAllergies,
                          onCheckedChange: (checked) => handleInputChange("hasAllergies", checked),
                          disabled: !isEditing
                        }
                      )
                    ] }),
                    editedChild.hasAllergies && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Textarea,
                      {
                        id: "allergiesDescription",
                        value: editedChild.allergiesDescription,
                        onChange: (e) => handleInputChange("allergiesDescription", e.target.value),
                        placeholder: "Describe any allergies",
                        className: `mt-2 min-h-[100px] bg-white ${isEditing ? "border-red-300" : ""}`,
                        disabled: !isEditing
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `p-4 rounded-lg ${editedChild.hasRecentMedication ? "bg-purple-50 border border-purple-200" : "bg-gray-50 border border-gray-200"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Label,
                        {
                          htmlFor: "recentMedication",
                          className: `flex items-center space-x-2 ${editedChild.hasRecentMedication ? "text-purple-700" : "text-gray-700"}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { className: "h-4 w-4" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Recent Medication" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Switch,
                        {
                          id: "recentMedication",
                          checked: editedChild.hasRecentMedication,
                          onCheckedChange: (checked) => handleInputChange("hasRecentMedication", checked),
                          disabled: !isEditing
                        }
                      )
                    ] }),
                    editedChild.hasRecentMedication && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Textarea,
                      {
                        id: "recentMedicationDescription",
                        value: editedChild.recentMedicationDescription,
                        onChange: (e) => handleInputChange("recentMedicationDescription", e.target.value),
                        placeholder: "Describe any recent medication",
                        className: `mt-2 min-h-[100px] bg-white ${isEditing ? "border-purple-300" : ""}`,
                        disabled: !isEditing
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `p-4 rounded-lg ${editedChild.hasOtherSpecialCondition ? "bg-green-50 border border-green-200" : "bg-gray-50 border border-gray-200"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Label,
                        {
                          htmlFor: "otherConditions",
                          className: `flex items-center space-x-2 ${editedChild.hasOtherSpecialCondition ? "text-green-700" : "text-gray-700"}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-4 w-4" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Other Special Conditions" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Switch,
                        {
                          id: "otherConditions",
                          checked: editedChild.hasOtherSpecialCondition,
                          onCheckedChange: (checked) => handleInputChange("hasOtherSpecialCondition", checked),
                          disabled: !isEditing
                        }
                      )
                    ] }),
                    editedChild.hasOtherSpecialCondition && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Textarea,
                      {
                        id: "otherConditionsDescription",
                        value: editedChild.otherSpecialConditionDescription,
                        onChange: (e) => handleInputChange("otherSpecialConditionDescription", e.target.value),
                        placeholder: "Describe any other special conditions",
                        className: `mt-2 min-h-[100px] bg-white ${isEditing ? "border-green-300" : ""}`,
                        disabled: !isEditing
                      }
                    )
                  ]
                }
              )
            ] }),
            isEditing && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleSave, className: "bg-blue-600 hover:bg-blue-700", children: "Save changes" }) })
          ] })
        ] })
      }
    ) })
  ] });
};
function ChildrenProfile() {
  const { children, loading, fetchChildren } = useChildren();
  const [editingId, setEditingId] = reactExports.useState(null);
  const { toast } = useToast();
  const handleSaveChild = async (updatedChild) => {
    try {
      await updateChild(updatedChild.id, updatedChild);
      setEditingId(null);
      await fetchChildren();
      toast({
        title: "Success",
        description: "Child information updated successfully",
        variant: "success"
      });
    } catch (error) {
      console.error("Failed to save child:", error);
      toast({
        title: "Error",
        description: "Failed to save child information. Please try again.",
        variant: "destructive"
      });
    }
  };
  const handleAddChild = async (childData) => {
    try {
      await createChild(childData);
      await fetchChildren();
      toast({
        title: "Success",
        description: "New child added successfully",
        variant: "success"
      });
    } catch (error) {
      console.error("Failed to add new child:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to add new child",
        variant: "destructive"
      });
    }
  };
  const handleDeleteChild = async (childId) => {
    try {
      await deleteChild(childId);
      await fetchChildren();
      toast({
        title: "Success",
        description: "Child profile deleted successfully",
        variant: "success"
      });
    } catch (error) {
      console.error("Failed to delete child:", error);
      toast({
        title: "Error",
        description: "Failed to delete child profile. Please try again.",
        variant: "destructive"
      });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "Children Information" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AddChildDialog, { onSubmit: handleAddChild })
    ] }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "animate-pulse", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-6 w-48" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-72 mt-2" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-24 w-full" }) })
    ] }, i)) }) : children.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "text-center py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Baby, { className: "h-12 w-12 text-gray-300 mx-auto mb-3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium text-gray-900", children: "No children found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 mt-1", children: "Add a child profile to book vaccination appointments" })
    ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: children.map((child, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      ChildCard,
      {
        child,
        isEditing: editingId === child.id,
        onEdit: () => setEditingId(editingId === child.id ? null : child.id),
        onSave: handleSaveChild,
        onDelete: handleDeleteChild,
        childNumber: index + 1
      },
      child.id
    )) })
  ] });
}

const ChildDashboard = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChildrenProfile, {}) });
};

export { ChildDashboard as default };
