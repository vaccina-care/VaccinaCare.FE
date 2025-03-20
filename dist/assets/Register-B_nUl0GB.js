import { u as useNavigate, p as useToast, r as reactExports, j as jsxRuntimeExports, n as motion, o as Input, L as Link, B as Button, A as Auth } from './index-BxW4NEkE.js';
import { C as Card, b as CardHeader, a as CardContent } from './card-B_2urvVV.js';
import { A as AuthLayout } from './AuthLayout-MvDdScH6.js';

const logoImage = "https://minio.ae-tao-fullstack-api.site/api/v1/buckets/vaccinacare-bucket/objects/download?preview=true&prefix=logo.png&version_id=null";
const registerIllustration = "https://minio.ae-tao-fullstack-api.site/api/v1/buckets/vaccinacare-bucket/objects/download?preview=true&prefix=auth%2Fregister.png&version_id=null";
const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const emailInputRef = reactExports.useRef(null);
  const [email, setEmail] = reactExports.useState(() => sessionStorage.getItem("registerEmail") || "");
  const [password, setPassword] = reactExports.useState("");
  const [confirmPassword, setConfirmPassword] = reactExports.useState("");
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    sessionStorage.setItem("registerEmail", value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (password !== confirmPassword) {
      setError("Passwords do not match. Please ensure your passwords match.");
      toast({
        title: "Passwords do not match",
        description: "Please ensure your passwords match.",
        variant: "error"
      });
      return;
    }
    setIsLoading(true);
    try {
      const response = await Auth.register({ email, password });
      if (response.isSuccess) {
        toast({
          title: "Registration Successful",
          description: "Welcome to VaccinaCare!",
          variant: "success"
        });
        sessionStorage.removeItem("registerEmail");
        navigate("/login");
      } else {
        setError(response.message || "Registration failed. Please try again.");
        toast({
          title: "Registration Failed",
          description: response.message || "Registration failed. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error2) {
      const errorMessage = error2 instanceof Error ? error2.message : "An unexpected error occurred.";
      setError(errorMessage);
      toast({
        title: "Registration Failed",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  reactExports.useEffect(() => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AuthLayout, { illustration: registerIllustration, isReversed: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "w-full max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "space-y-3 items-center text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { scale: 0.5 },
          animate: { scale: 1 },
          transition: { duration: 0.5 },
          className: "w-24 h-24",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoImage, alt: "VacinnaCare Logo", className: "w-full h-full object-contain" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-bold tracking-tight font-yeseva", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tracking-[0.1em]", children: "VACINNA" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-500 tracking-[0.1em]", children: "CARE" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "The safety of your child today brings joy to parents tomorrow." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm mb-4", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "email",
            placeholder: "Email",
            className: "h-12",
            value: email,
            onChange: handleEmailChange,
            required: true,
            ref: emailInputRef,
            disabled: isLoading
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "password",
            placeholder: "Password",
            className: "h-12",
            value: password,
            onChange: (e) => setPassword(e.target.value),
            required: true,
            disabled: isLoading
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "password",
            placeholder: "Confirm password",
            className: "h-12",
            value: confirmPassword,
            onChange: (e) => setConfirmPassword(e.target.value),
            required: true,
            disabled: isLoading
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
          "Already have an account? ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "text-blue-500 hover:text-blue-700 font-medium", children: "Login" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full h-12 text-base bg-[#1e1b4b] hover:bg-[#1e1b4b]/90", disabled: isLoading, children: isLoading ? "Registering..." : "Register" })
      ] })
    ] })
  ] }) });
};

export { Register as default };
