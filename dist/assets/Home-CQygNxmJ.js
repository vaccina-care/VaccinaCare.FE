import { c as createLucideIcon, j as jsxRuntimeExports, B as Button, L as Link, r as reactExports, u as useNavigate, a as Linkedin, F as Facebook, I as Instagram } from './index-BxW4NEkE.js';
import { F as FadeInSection } from './FadeInSection-BAZLVujC.js';
import { A as ArrowRight } from './arrow-right-BuuHlQvH.js';
import { g as getVaccineSection } from './vaccine-GWachqK5.js';
import { u as useEmblaCarousel } from './embla-carousel-react.esm-CeFYjVej.js';
import { C as Card, a as CardContent } from './card-B_2urvVV.js';
import { C as ChevronLeft, a as ChevronRight } from './chevron-right-xZVHym6g.js';

/**
 * @license lucide-react v0.470.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Quote = createLucideIcon("Quote", [
  [
    "path",
    {
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0"
    }
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd"
    }
  ]
]);

const heroImage = "https://plus.unsplash.com/premium_photo-1681843129112-f7d11a2f17e3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const HeroSection = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[70vh] overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
        style: { backgroundImage: `url(${heroImage})` }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black bg-opacity-50" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-64 h-64 rounded-full bg-blue-100/30 -translate-x-1/2 -translate-y-1/2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-100/30 translate-x-1/3 translate-y-1/3" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-16 relative h-full flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-300 font-medium", children: "CARING FOR CHILDREN LIFE" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl md:text-3xl lg:text-4xl font-medium text-white font-yeseva leading-tight", children: [
          "Caring for Children Today,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Building a Healthier Tomorrow."
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { delay: 0.3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "bg-blue-600 hover:bg-blue-700", size: "lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/vaccine-list", children: "Our Services" }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { delay: 0.4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:block relative w-full h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-blue-100/30 rounded-lg transform rotate-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-blue-200/30 rounded-lg transform -rotate-3" })
      ] }) })
    ] }) })
  ] });
};

const logoImage = "https://minio.ae-tao-fullstack-api.site/api/v1/buckets/vaccinacare-bucket/objects/download?preview=true&prefix=home%2Fwelcome.jpg&version_id=null";
const WelcomeSection = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center space-y-6 mb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-500 font-medium", children: "WELCOME TO VACCINACARE" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-[#1e1b4b] font-yeseva", children: "A Great Place to Receive Child Care" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "link",
          className: "text-blue-500 hover:text-blue-700",
          children: [
            "Learn More ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto h-[300px] md:h-[200px] overflow-hidden rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoImage, alt: "Medical Team", className: "w-full h-full object-fit" }) })
  ] }) });
};

const VaccineSection = () => {
  const [vaccines, setVaccines] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    const fetchVaccines = async () => {
      try {
        const response = await getVaccineSection({ pageSize: 6 });
        if (response.isSuccess) {
          setVaccines(response.data.vaccines);
        }
      } catch (error) {
        console.error("Failed to fetch vaccines:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchVaccines();
  }, []);
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-[#EEF2FF]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center items-center h-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" }) }) }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-[#EEF2FF]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold text-[#1e1b4b] font-yeseva", children: "LIST OF VACCINES" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", className: "bg-blue-100 hover:bg-blue-200", onClick: () => navigate("/vaccine-list"), children: [
        "Show more ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: vaccines.map((vaccine, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: vaccine.picUrl || "/placeholder.svg?height=192&width=256",
          alt: vaccine.vaccineName,
          className: "w-full h-48 object-contain mb-4"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-center text-[#1e1b4b] font-medium", children: vaccine.vaccineName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm text-gray-600", children: vaccine.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-blue-600 font-medium", children: new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND"
        }).format(vaccine.price) })
      ] })
    ] }, index)) })
  ] }) });
};

const parent1 = "https://minio.ae-tao-fullstack-api.site/api/v1/buckets/vaccinacare-bucket/objects/download?preview=true&prefix=home%2Ffamily1.jpg&version_id=null";
const parent2 = "https://minio.ae-tao-fullstack-api.site/api/v1/buckets/vaccinacare-bucket/objects/download?preview=true&prefix=home%2Ffamily2.jpg&version_id=null";
const parent3 = "https://minio.ae-tao-fullstack-api.site/api/v1/buckets/vaccinacare-bucket/objects/download?preview=true&prefix=home%2Ffamily3.jpg&version_id=null";
const parent4 = "https://minio.ae-tao-fullstack-api.site/api/v1/buckets/vaccinacare-bucket/objects/download?preview=true&prefix=home%2Ffamily4.jpg&version_id=null";
const parent5 = "https://minio.ae-tao-fullstack-api.site/api/v1/buckets/vaccinacare-bucket/objects/download?preview=true&prefix=home%2Ffamily5.jpg&version_id=null";
const parent6 = "https://minio.ae-tao-fullstack-api.site/api/v1/buckets/vaccinacare-bucket/objects/download?preview=true&prefix=home%2Ffamily6.jpg&version_id=null";
const parents = [
  {
    name: "The Johnson Family",
    description: "VaccinaCare made scheduling my child's vaccines so easy!",
    image: parent1
  },
  {
    name: "The Martinez Family",
    description: "I never miss an important vaccine reminder anymore.",
    image: parent2
  },
  {
    name: "The Lee Family",
    description: "The flexible appointment options fit my busy schedule.",
    image: parent3
  },
  {
    name: "The Patel Family",
    description: "A smooth and stress-free vaccination experience for my baby.",
    image: parent4
  },
  {
    name: "The Smith Family",
    description: "Their support team answered all my vaccine concerns.",
    image: parent5
  },
  {
    name: "The Nguyen Family",
    description: "Highly recommended for parents who care about immunization!",
    image: parent6
  }
];
const ParentSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true
  });
  const scrollPrev = reactExports.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = reactExports.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-gradient-to-b from-gray-50 to-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4 mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium", children: "TRUSTED PARENTS" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-[#1e1b4b] font-yeseva", children: "Parent Experiences" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 max-w-2xl mx-auto", children: "Hear from families who have trusted VaccinaCare with their children's immunization journey" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative px-4 md:px-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "outline",
          size: "icon",
          className: "absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-all duration-200 border-none rounded-full w-12 h-12",
          onClick: scrollPrev,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-6 w-6" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "outline",
          size: "icon",
          className: "absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-all duration-200 border-none rounded-full w-12 h-12",
          onClick: scrollNext,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-6 w-6" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", ref: emblaRef, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex -mx-4", children: parents.map((parent, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden group transition-all duration-300 hover:shadow-lg h-[500px] flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: parent.image || "/placeholder.svg",
              alt: parent.name,
              className: "w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "relative p-6 bg-white flex flex-col flex-grow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "absolute top-0 right-0 h-24 w-24 text-blue-50 -mt-8 -mr-8 rotate-12" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-grow", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-lg mb-2 group-hover:text-blue-600 transition-colors duration-200", children: parent.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 text-sm leading-relaxed line-clamp-3", children: [
                '"',
                parent.description,
                '"'
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto pt-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-start gap-3 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "ghost",
                    size: "icon",
                    className: "h-8 w-8 rounded-full hover:bg-blue-50 hover:text-blue-600",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-4 w-4" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "ghost",
                    size: "icon",
                    className: "h-8 w-8 rounded-full hover:bg-blue-50 hover:text-blue-600",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "h-4 w-4" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "ghost",
                    size: "icon",
                    className: "h-8 w-8 rounded-full hover:bg-blue-50 hover:text-blue-600",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-4 w-4" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "w-full bg-[#1e1b4b] hover:bg-[#1e1b4b]/90 text-white transition-all duration-200 group-hover:shadow-md", children: "View Story" })
            ] })
          ] })
        ] })
      ] }) }, index)) }) })
    ] })
  ] }) });
};

const Home = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { delay: 0, children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { delay: 0.4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(WelcomeSection, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { delay: 0.6, children: /* @__PURE__ */ jsxRuntimeExports.jsx(VaccineSection, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { delay: 0.8, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ParentSection, {}) })
  ] });
};

export { Home as default };
