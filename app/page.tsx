"use client"

import { useEffect, useState } from "react"
import { Search, Moon, Sun, MapPin, Calendar, GraduationCap, Briefcase, User, LucideUser, LucideCodeXml, LucidePhone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

type SearchResult = {
  id: string
  type: "about" | "education" | "experience" | "projects" | "skills" | "contact",
  title: string,
  subtitle?: string,
  description: string
  urlLink?: string,
  urlText?: string,
  meta?: {
    date?: string
    location?: string
    company?: string
  }
  achievements?: string[]
  tags?: string[]
  socialLinks?: {
    name: string
    url: string
    tag: string
  }[]

}


const mockData: SearchResult[] = [
  {
    id: "1",
    type: "about",
    title: "About Sumit Singh - Senior Software Engineer",
    description: "Results-driven Senior Software Engineer with 3+ years of hands-on exp in designing, developing, and optimizing modern web applications. Strong expertise across frontend development, real-time systems, and performance-focused UI engineering, with a proven ability to convert complex business requirements into scalable, user-friendly solutions. Exp in working closely with product managers, UI/UX designers, and cross-functional teams to deliver production-ready applications. Skilled in building responsive dashboards, real-time video communication features, and high-performance web platforms with a focus on code quality, scalability, and user exp.",
    achievements: [
      "3+ years of professional software engineering exp",
      "Strong expertise in React.js, JavaScript, and modern frontend frameworks",
      "Hands-on exp with real-time applications and video communication systems",
      "Proven ability to optimize performance, fix complex bugs, and enhance product stability",
      "Exp collaborating with stakeholders to deliver scalable, production-ready solutions",
    ],
    tags: [
      "#Senior Software Engineer",
      "#Full Stack",
      "#ReactJS",
      "#Real Time Applications",
      "#Performance Optimization",
      "#API Design",
      "#Web Development",
    ],
  },
  {
    id: "2",
    type: "education",
    title: "Bachelor of Computer Applications (BCA)",
    subtitle: "Swami Vivekanand Subharti University",
    description:
      "Completed a comprehensive undergraduate degree in Computer Applications from Swami Vivekanand Subharti University, focusing on core computer science fundamentals, programming, and application development. Gained hands-on exposure to software development concepts, database management, and web technologies through academic coursework and practical assignments.",
    meta: {
      date: "May 2024",
      location: "Subhartipuram, NH-58, Delhi–Haridwar Bypass Road, Meerut – 250005",
    },
    achievements: [
      "Built strong foundations in programming, data structures, and software engineering principles",
      "Worked on academic project's involving web development and database-driven applications",
      "Developed practical understanding of computer applications, system design, and problem-solving",
      "Gained exposure to modern development tools and technologies through coursework",
    ],
    tags: ["#BCA", "#BachelorOfComputerApplications", "#ComputerScience", "#SwamiVivekanandSubhartiUniversity"],
  },
  {
    id: "3",
    type: "education",
    title: "Senior Secondary Education (12th Grade)",
    subtitle: "Haryana Board of School Education (HBSE)",
    description:
      "Completed senior secondary education under the Haryana Board of School Education with a focus on analytical thinking, problem-solving, and foundational academic disciplines. Developed discipline, time management, and academic consistency through structured learning and evaluations.",
    meta: {
      date: "Apr 2020",
      location: "Govt. Sr. Sec. School, Saran, Faridabad, Haryana – 121004",
    },
    achievements: [
      "Developed strong fundamentals in mathematics and logical reasoning",
      "Built academic discipline and consistency through board-level examinations",
      "Strengthened communication and problem-solving skills",
    ],
    tags: ["#12thGrade", "#HBSE", "#SeniorSecondary", "#HaryanaBoard"],
  },
  {
    id: "4",
    type: "experience",
    title: "Senior Software Engineer at SaleAssist.ai",
    description:
      "Engineered and enhanced products and internal dashboards using React.js, HTML, JavaScript, CSS, SCSS, Material-UI, Handlebars, and Webpack, improving overall UI responsiveness and user interaction. Built and optimized a real-time video calling system using Agora Web SDK, significantly improving call stability, latency, and video quality for one-to-one, one-to-many, and live streaming use cases.",
    meta: {
      date: "Apr 2022 - Aug 2025",
      location: "India",
      company: "SaleAssist.ai",
    },
    achievements: [
      "Improved video calling exp by approximately 60–70% through Agora Web SDK optimizations",
      "Achieved faster and more stable video connections across one-to-one, one-to-many, and live sessions",
      "Resolved 50+ complex production bugs, reducing recurring issues and improving system reliability",
      "Enhanced overall frontend performance and UI responsiveness by 25–30%",
      "Supported a large-scale platform handling 3K+ clients, 6K+ agents, and 160K+ meetings"
    ],
    tags: [
      "#React",
      "#JavaScript",
      "#CSS",
      "#SCSS",
      "#Material-UI",
      "#Webpack",
      "#AgoraSDK",
      "#RealTimeApplications"
    ]
  },
  {
    id: "5",
    type: "experience",
    title: "Senior Web Developer at AbacusDesk IT Solution Pvt. Ltd.",
    description:
      "Designed and developed responsive, high-performance websites using HTML, CSS, JavaScript, jQuery, Tailwind CSS, Materialize, PHP, and custom WordPress development. Delivered client-focused solutions while ensuring performance, scalability, and cross-browser compatibility.",
    meta: {
      date: "Sep 2020 - Nov 2022",
      location: "India",
      company: "AbacusDesk IT Solution Pvt. Ltd."
    },
    achievements: [
      "Improved overall website load speed by 35–45% through performance optimization techniques",
      "Managed end-to-end Website AMC, including updates, security monitoring, backups, and bug fixes",
      "Reduced downtime incidents by 40% and improved website stability by 50%",
      "Handled hosting, deployments, and server configurations on cPanel and Hostinger",
      "Optimized websites for SEO best practices, improving performance scores by 25–35%"
    ],
    tags: [
      "#HTML",
      "#CSS",
      "#JavaScript",
      "#jQuery",
      "#TailwindCSS",
      "#PHP",
      "#WordPress",
      "#cPanel",
      "#SEO"
    ]
  },
  {
    id: "6",
    type: "contact",
    title: "Contact Information",
    urlText: "✉️ sumit18440@gmail.com",
    urlLink: "mailto:sumit18440@gmail.com",
    description:
      "📞 Phone: +91 989-155-4993 | Location: Faridabad, Haryana, India | I’d love to hear from you! Get in touch with me for opportunities, collaborations, or inquiries.",
    meta: {
      location: "Faridabad, Haryana, India"
    },
    tags: [
      "#Contact",
      "#Email",
      "#Phone",
      "#Location"
    ]
  },
  {
    id: "7",
    type: "contact",
    title: "LinkedIn Profile",
    urlText: "ℹ️ linkedin.com/in/sumitsingh0003",
    urlLink: "https://www.linkedin.com/in/sumitsingh0003",
    description: "Connect with me on LinkedIn to view professional background, project and achievements.",
    meta: {
      location: "Faridabad, Haryana, India"
    },
    tags: ["#LinkedIn", "Profile", "#Networking"]
  },
  {
    id: "8",
    type: "skills",
    title: "Programming Languages",
    description:
      "Proficient in JavaScript, Python, HTML, CSS, SCSS, and PHP with strong exp in building responsive, scalable, and performance-optimized web applications.",
    tags: [
      "JavaScript",
      "Python",
      "HTML",
      "CSS",
      "SCSS",
      "PHP",
      "Programming"
    ]
  },
  {
    id: "9",
    type: "skills",
    title: "Web Technologies & Frameworks",
    description:
      "Exp in modern web development using React.js, Node.js, Express.js, Next.js, Material-UI, Bootstrap, Redux, Redux Toolkit, jQuery, and REST API integrations.",
    tags: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Material-UI",
      "Bootstrap",
      "Redux",
      "Redux Toolkit",
      "jQuery",
      "REST APIs"
    ]
  },
  {
    id: "10",
    title: "Tools & Technologies",
    type: "skills",
    description:
      "Hands-on exp with Git, GitHub, cPanel, Hostinger, Android Studio, and Firebase for development, deployment, version control, and application management.",
    tags: [
      "Git",
      "GitHub",
      "cPanel",
      "Hostinger",
      "Android Studio",
      "Firebase",
      "Tools"
    ]
  },
  {
    id: "11",
    type: "skills",
    title: "Databases",
    description:
      "Skilled in working with both relational and NoSQL databases including MongoDB, PostgreSQL, and MySQL to design and manage efficient data-driven applications.",
    tags: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Databases",
      "SQL"
    ]
  },
  {
    id: "12",
    type: "skills",
    title: "CMS & Page Builders",
    description:
      "Extensive exp with WordPress development and page builders such as Elementor, WPBakery, Divi, and Visual Composer for creating custom, client-focused websites.",
    tags: [
      "WordPress",
      "Elementor",
      "WPBakery",
      "Divi",
      "Visual Composer",
      "CMS"
    ]
  },
  {
    id: "13",
    type: "projects",
    title: "Manages Project Tasks App",
    urlText: "🔗 pro-manages.netlify.app",
    urlLink: "https://pro-manages.netlify.app/",
    description:
      "A full-stack project task management web application designed to help users organize, track, and manage tasks efficiently. The application supports secure authentication, task workflows, priorities, due-date alerts, analytics, and user account management with a clean and intuitive UI.",
    meta: {
      date: "May 2024",
      location: "India"
    },
    achievements: [
      "Implemented secure user authentication with JWT, single-device sessions, and automatic logout after 24 hours",
      "Built a complete task management system with priorities, due dates, status updates, and workflow columns (Backlog, To-Do, In-Progress, Done)",
      "Added checklist and sub-task support for better task breakdown and tracking",
      "Developed due-date alerts and visual highlights based on task priority and deadlines",
      "Created an analytics dashboard showing insights for completed, pending, and in-progress tasks",
      "Implemented full frontend and backend validation for forms and token handling",
      "Designed and developed the project as a solo application, handling frontend, backend, UI/UX, and database"
    ],
    tags: [
      "#TaskManagement",
      "#FullStackProject",
      "#JWTAuthentication",
      "#WebApplication",
      "#ProjectManagement",
      "#SoloProject"
    ]
  },
  {
    id: "14",
    type: "projects",
    title: "Invoice Maker",
    urlText: "🔗 invoice-maker.app",
    urlLink: "https://make-invoice.netlify.app",
    description:
      "A full-stack invoice management web application that allows users to create, manage, and export professional invoices. The app supports secure authentication, dynamic invoice creation, automatic calculations, multiple templates, and PDF export functionality.",
    meta: {
      date: "Jun 2024",
      location: "Remote"
    },
    achievements: [
      "Implemented secure user authentication with JWT verification and single-device session control",
      "Built a dynamic invoice builder supporting items, quantities, rates, taxes, discounts, and service charges",
      "Enabled automatic calculations for subtotal, GST, tax, discounts, and balance due",
      "Developed CRUD functionality for invoices including create, edit, update, delete, and preview",
      "Integrated PDF export to convert full HTML invoices into downloadable PDF files",
      "Added multiple invoice templates and client management features",
      "Designed and developed the project as a solo application covering frontend, backend, UI/UX, PDF engine, and database"
    ],
    tags: [
      "#InvoiceMaker",
      "#FullStackProject",
      "#JWTAuthentication",
      "#PDFGeneration",
      "#WebApplication",
      "#SoloProject"
    ]
  },
  {
    id: "15",
    type: "projects",
    title: "API CRUD Generator",
    urlText: "🔗 api-crud-generator.app",
    urlLink: "https://apigenerator.netlify.app",
    description:
      "A dynamic API generation platform that allows users to instantly create and test ready-to-use CRUD APIs. The system automatically generates endpoints and database structures based on user-defined prefixes and database names.",
    meta: {
      date: "Jul 2024",
      location: "Remote"
    },
    achievements: [
      "Implemented login-based access using predefined credentials for secure usage without registration",
      "Built a dynamic API generator that creates five ready-to-use CRUD APIs using prefix and database name inputs",
      "Enabled full CRUD operations including create, read all, read by ID, update, and delete endpoints",
      "Designed dynamic MySQL database creation with separate storage per prefix and database name",
      "Allowed unlimited API usage with no rate limits, optimized for student practice and learning",
      "Developed a responsive frontend dashboard using React.js and Bootstrap for testing APIs directly from the UI",
      "Built the project end-to-end as a solo developer handling frontend, backend, API architecture, and database design"
    ],
    tags: [
      "#APIGenerator",
      "#CRUD",
      "#BackendDevelopment",
      "#MySQL",
      "#ReactJS",
      "#SoloProject"
    ]
  },
  {
    id: "16",
    type: "about",
    title: "Resume Download",
    urlText: "📄 Download Resume",
    urlLink: "/Sumit_Singh-Resume.pdf",
    description:
      "A dedicated resume download section that allows recruiters and hiring managers to quickly access and download my latest professional resume. The resume highlights my experience, skills, projects, and achievements in a clean and structured format.",
    meta: {
      date: "Updated 2026",
      location: "India"
    },
    achievements: [
      "Designed a clean and professional resume layout optimized for ATS and recruiter screening",
      "Highlighted 3+ years of experience in frontend, full-stack, and real-time application development",
      "Included detailed experience, projects, technical skills, and education sections",
      "Ensured easy one-click access for downloading the resume directly from the portfolio",
      "Kept the resume regularly updated to reflect latest roles, projects, and skill enhancements"
    ],
    tags: [
      "#Resume",
      "#DownloadResume",
      "#ATSFriendly",
      "#CareerProfile",
      "#Portfolio"
    ]
  },
  {
  id: "17",
  type: "contact",
  title: "GitHub Profile",
  urlText: "💻 github.com/sumitsingh0003",
  urlLink: "https://github.com/sumitsingh0003",
  description:
    "Explore my GitHub repositories to view real-world projects, source code, experiments, and hands-on implementations across frontend, backend, and full-stack development.",
  meta: {
    location: "Faridabad, Haryana, India"
  },
  tags: [
    "#GitHub",
    "#OpenSource",
    "#Repositories",
    "#Code",
    "#DeveloperProfile"
  ]
},
{
  id: "18",
  type: "contact",
  title: "Social Media Profiles",
  description:
    "Connect with me across social media platforms to stay updated with my professional journey, projects, learning, and creative work.",
  // achievements: [
  //   "Follow me on social platforms for updates, projects, and insights",
  //   "Explore my work, design inspiration, and tech discussions",
  //   "Stay connected beyond professional networks"
  // ],
  socialLinks: [
    {
      name: "Facebook",
      url: "https://www.facebook.com/sumitsingh0003",
      tag: "#Facebook"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/sumitsingh0003",
      tag: "#Instagram"
    },
    {
      name: "Twitter (X)",
      url: "http://twitter.com/Sumitsingh0003",
      tag: "#Twitter"
    },
    {
      name: "Pinterest",
      url: "https://in.pinterest.com/sumitsingh0003/",
      tag: "#Pinterest"
    }
  ],
  meta: {
    location: "Faridabad, Haryana, India"
  },
  tags: [
    "#SocialMedia",
    "#OnlinePresence",
    "#Networking",
    "#PersonalBrand"
  ]
}

]

const quickSearchLinks = ["about", "projects", "experience", "skills", "education", "contact"]
const validSearchTerms = [
  "about",
  "projects",
  "experience",
  "skills",
  "education",
  "contact",
]

const tagButtons = [
  "3+ Years Experience",
  "Full Stack Developer",
  "React Expert",
  "Problem Solver",
  "Strong UI/UX Orientation",
  "REST & GraphQL API's",
]

export default function PortfolioSearch() {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [suggestions, setSuggestions] = useState<SearchResult[]>([])
  const [searchTime, setSearchTime] = useState<number | null>(null)

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

  const runSearch = (query: string) => {
    if (!query.trim()) return

    setIsSearching(true)
    setSearchQuery(query)

    setTimeout(() => {
      const results = mockData.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.type.toLowerCase().includes(query.toLowerCase()) ||
          item?.description.toLowerCase().includes(query.toLowerCase()),
      )

      setSearchResults(results)
      setSearchTime(Number((Math.random() * 0.5 + 0.1).toFixed(2))) // 👈 HERE
      setIsSearching(false)
    }, 300)
  }

  const handleInputChange = (value: string) => {
    setInputValue(value)

    if (!value.trim()) {
      setSearchResults([])
      setSearchQuery("")
      setSuggestions([])
      setInputValue("")
      setSearchTime(null)
      return
    }

    const filtered = mockData.filter(
      (item) =>
        item.title.toLowerCase().includes(value.toLowerCase()) ||
        item.type.toLowerCase().includes(value.toLowerCase()),
    )

    setSuggestions(filtered.slice(0, 5)) // top 5
  }

  const handleQuickSearch = (query: string) => {
    setInputValue(query)
    runSearch(query)
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "about":
        return <User className="w-4 h-4" />
      case "projects":
        return <LucideCodeXml className="w-4 h-4" />
      case "experience":
        return <Briefcase className="w-4 h-4" />
      case "skills":
        return <LucideUser className="w-4 h-4" />
      case "education":
        return <GraduationCap className="w-4 h-4" />
      case "contact":
        return <LucidePhone className="w-4 h-4" />
      default:
        return null
    }
  }

  // 🔹 Simple Levenshtein Distance (Auto-correct helper)
  const getClosestMatch = (query: string, options: string[]) => {
    const distance = (a: string, b: string) => {
      const dp = Array.from({ length: a.length + 1 }, () =>
        Array(b.length + 1).fill(0),
      )

      for (let i = 0; i <= a.length; i++) dp[i][0] = i
      for (let j = 0; j <= b.length; j++) dp[0][j] = j

      for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
          dp[i][j] = Math.min(
            dp[i - 1][j] + 1,
            dp[i][j - 1] + 1,
            dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1),
          )
        }
      }

      return dp[a.length][b.length]
    }

    let bestMatch = ""
    let minDistance = Infinity

    options.forEach((opt) => {
      const d = distance(query.toLowerCase(), opt.toLowerCase())
      if (d < minDistance) {
        minDistance = d
        bestMatch = opt
      }
    })

    return minDistance <= 4 ? bestMatch : null // tolerance
  }

  const NoResults = ({ query }: { query: string }) => {
    const suggestion = getClosestMatch(query, validSearchTerms)
    return (
      <div className="relative z-10 min-h-screen">
        {/* Search Results Header */}
        <div
          className={`sticky top-0 z-40 backdrop-blur-lg transition-all duration-300 ${theme === "dark" ? "bg-[#0f1729]/80" : "bg-white/80"} border-b ${theme === "dark" ? "border-slate-800" : "border-slate-200"}`}
        >
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center gap-4 max-sm:flex-col max-sm:items-start">
              {/* Logo */}
              <h1
                className={`text-3xl font-bold tracking-tight cursor-pointer transition-transform hover:scale-105 ${theme === "dark" ? "text-white" : "text-slate-900"}`}
                onClick={() => {
                  setSearchResults([])
                  setSearchQuery("")
                  setSuggestions([])
                  setInputValue("")
                  setSearchTime(null)
                }}
              >
                <span className="text-[#4285f4]">S</span>
                <span className="text-[#ea4335]">u</span>
                <span className="text-[#fbbc04]">m</span>
                <span className="text-[#34a853]">i</span>
                <span className="text-[#4285f4]">t</span> {" "}
                <span className="text-[#4285f4]">S</span>
                <span className="text-[#ea4335]">i</span>
                <span className="text-[#fbbc04]">n</span>
                <span className="text-[#34a853]">g</span>
                <span className="text-[#4285f4]">h</span>
              </h1>

              {/* Search Bar */}
              <div className="flex-1 max-w-2xl">
                <div
                  className={`relative flex items-center gap-3 px-4 py-2 rounded-full transition-all duration-300 ${theme === "dark" ? "bg-slate-800 hover:bg-slate-750" : "bg-white hover:bg-slate-50"} border ${theme === "dark" ? "border-slate-700" : "border-slate-300"} shadow-sm`}
                >
                  <Search className={`w-4 h-4 ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`} />
                  <Input
                    type="text"
                    value={inputValue}
                    placeholder="Search Sumit's profile..."
                    onChange={(e) => handleInputChange(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        runSearch(inputValue)
                      }
                    }}
                    style={{ boxShadow: 'none' }}
                    className={`flex-1 bg-transparent border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 ${theme === "dark" ? "text-white placeholder:text-slate-500" : "text-slate-900 placeholder:text-slate-400"}`}
                  />
                </div>
              </div>

              {/* Back Button */}
              <Button
                variant="ghost"
                onClick={() => {
                  setSearchResults([])
                  setSearchQuery("")
                  setInputValue("")
                  setSearchTime(null)
                  setSuggestions([])
                }}
                className={`transition-all duration-300 hover:scale-105 ${theme === "dark" ? "text-slate-300 hover:text-white hover:bg-slate-800" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"} max-sm:w-full`}
              >
                Back to Home
              </Button>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className={`rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 ${theme === "dark" ? "hover:bg-slate-800 text-white" : "hover:bg-slate-100 text-slate-900"}`}
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="max-w-4xl mx-auto px-4 py-8 max-sm:px-3 max-sm:py-5">
          {searchTime !== null && (
            <p className={`text-sm mb-8 animate-fade-in ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
              About {searchResults.length} results ({searchTime} seconds)
            </p>
          )}
          <div className="flex flex-col items-center justify-center py-24 max-sm:py-16 text-center animate-fade-in">
            {/* Icon */}
            <div className="mb-6">
              <Search className="w-16 h-16 text-slate-400" />
            </div>

            {/* Main Text */}
            <h2 className="text-lg md:text-xl font-medium text-slate-800 dark:text-slate-200 mb-2">
              Your search – <span className="font-semibold">{query}</span> – did not match any portfolio items.
            </h2>

            {suggestion && (
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Did you mean{" "}
                <button
                  onClick={() => {
                    setInputValue(suggestion)
                    runSearch(suggestion)
                  }}
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  {suggestion}
                </button>
                ?
              </p>
            )}

            {/* Suggestions Box */}
            <div className="mt-6 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-6 max-w-lg w-full">
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                Suggestions:
              </p>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 list-disc list-inside">
                <li>Make sure all words are spelled correctly</li>
                <li>Try different keywords</li>
                <li>Try more general keywords</li>
                <li>
                  Try:{" "}
                  {quickSearchLinks.map((link, index) => (
                    <button
                      key={link}
                      onClick={() => handleQuickSearch(link)}
                      className={`text-sm transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-fade-in ${theme === "dark" ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"}`}
                      style={{ animationDelay: `${1.4 + index * 0.05}s`, marginRight: '10px' }}
                    >
                      {link}
                    </button>
                  ))}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

useEffect(() => {
  if (searchResults.length) {
    setSearchTime(Number((Math.random() * 0.5 + 0.1).toFixed(2)))
  }
}, [searchResults])

  return (
    <div className={`min-h-screen transition-all duration-500 ${theme === "dark" ? "dark bg-[#0f1729]" : "bg-white"}`}>
      <div className="relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20 animate-float ${theme === "dark" ? "bg-blue-500" : "bg-blue-300"}`}
            style={{ animationDelay: "0s", animationDuration: "8s" }}
          />
          <div
            className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-20 animate-float ${theme === "dark" ? "bg-purple-500" : "bg-purple-300"}`}
            style={{ animationDelay: "2s", animationDuration: "10s" }}
          />
          <div
            className={`absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-3xl opacity-10 animate-float ${theme === "dark" ? "bg-green-500" : "bg-green-300"}`}
            style={{ animationDelay: "4s", animationDuration: "12s" }}
          />
        </div>

        {/* Theme Toggle Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className={`fixed top-6 right-6 z-50 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 ${theme === "dark" ? "bg-slate-800/50 hover:bg-slate-700/50 text-white" : "bg-slate-100 hover:bg-slate-200 text-slate-900"}`}
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5 animate-spin-slow" />
          ) : (
            <Moon className="h-5 w-5 animate-pulse" />
          )}
        </Button>

        {/* Main Content */}
        {/* ================= HOME ================= */}
        {!searchQuery && (
          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
            {/* Logo */}
            <div className="mb-8 animate-fade-in-up">
              <h1
                className={`text-7xl md:text-8xl max-sm:text-5xl max-sm:leading-tight font-bold tracking-tight ${theme === "dark" ? "text-white" : "text-slate-900"}`}
              >
                <span className="inline-block animate-bounce-subtle text-[#4285f4] transition-transform duration-300 ease-out hover:scale-125 cursor-pointer" style={{ animationDelay: "0s" }}>
                  S
                </span>
                <span className="inline-block animate-bounce-subtle text-[#ea4335] transition-transform duration-300 ease-out hover:scale-125 cursor-pointer" style={{ animationDelay: "0.1s" }}>
                  u
                </span>
                <span className="inline-block animate-bounce-subtle text-[#fbbc04] transition-transform duration-300 ease-out hover:scale-125 cursor-pointer" style={{ animationDelay: "0.2s" }}>
                  m
                </span>
                <span className="inline-block animate-bounce-subtle text-[#34a853] transition-transform duration-300 ease-out hover:scale-125 cursor-pointer" style={{ animationDelay: "0.3s" }}>
                  i
                </span>
                <span className="inline-block animate-bounce-subtle text-[#4285f4] transition-transform duration-300 ease-out hover:scale-125 cursor-pointer" style={{ animationDelay: "0.4s" }}>
                  t
                </span>
                {" "}
                <span className="inline-block animate-bounce-subtle text-[#4285f4] transition-transform duration-300 ease-out hover:scale-125 cursor-pointer" style={{ animationDelay: "0s" }}>
                  S
                </span>
                <span className="inline-block animate-bounce-subtle text-[#ea4335] transition-transform duration-300 ease-out hover:scale-125 cursor-pointer" style={{ animationDelay: "0.1s" }}>
                  i
                </span>
                <span className="inline-block animate-bounce-subtle text-[#fbbc04] transition-transform duration-300 ease-out hover:scale-125 cursor-pointer" style={{ animationDelay: "0.2s" }}>
                  n
                </span>
                <span className="inline-block animate-bounce-subtle text-[#34a853] transition-transform duration-300 ease-out hover:scale-125 cursor-pointer" style={{ animationDelay: "0.3s" }}>
                  g
                </span>
                <span className="inline-block animate-bounce-subtle text-[#4285f4] transition-transform duration-300 ease-out hover:scale-125 cursor-pointer" style={{ animationDelay: "0.4s" }}>
                  h
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="text-center mb-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h2
                className={`text-xl md:text-2xl font-medium mb-2 ${theme === "dark" ? "text-slate-200" : "text-slate-700"}`}
              >
                Senior Software Engineer & Full Stack Developer
              </h2>
              <p className={`text-sm md:text-base ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
                Building real-time, AI-powered solutions
              </p>
            </div>

            {/* Search Bar */}
            <div className="w-full max-w-2xl mb-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div
                className={`relative group rounded-full ${theme === "dark" ? "shadow-2xl shadow-blue-500/10" : "shadow-xl shadow-slate-300/50"}`}
              >
                <div
                  className={`absolute inset-0 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 ${theme === "dark" ? "bg-gradient-to-r from-blue-500 to-purple-500" : "bg-gradient-to-r from-blue-300 to-purple-300"}`}
                />
                <div
                  className={`relative flex items-center gap-3 px-6 py-4 max-sm:px-4 max-sm:py-3 rounded-full transition-all duration-300 ${theme === "dark" ? "bg-slate-800/90 hover:bg-slate-800" : "bg-white hover:bg-slate-50"} border ${theme === "dark" ? "border-slate-700" : "border-slate-200"}`}
                >
                  <Search className={`w-5 h-5 ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`} onClick={() => runSearch(inputValue)} />
                  <Input
                    value={inputValue}
                    placeholder="Search Sumit's profile..."
                    onChange={(e) => handleInputChange(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        runSearch(inputValue)
                      }
                    }}
                    style={{ boxShadow: 'none' }}
                    type="text"
                    className={`flex-1 bg-transparent border-none box-shadow-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 ${theme === "dark" ? "text-white placeholder:text-slate-500" : "text-slate-900 placeholder:text-slate-400"}`}
                  />
                </div>
                {suggestions.length > 0 && (
                  <div
                    className={`absolute top-full mt-2 w-full rounded-xl overflow-hidden z-90 ${theme === "dark" ? "bg-slate-800 border border-slate-700" : "bg-white border border-slate-200"
                      }`}
                  >
                    {suggestions.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => {
                          setInputValue(item.title)
                          runSearch(item.type)
                        }}
                        className={`px-4 py-3 cursor-pointer transition ${theme === "dark"
                          ? "hover:bg-slate-700 text-slate-200"
                          : "hover:bg-slate-100 text-slate-800"
                          }`}
                      >
                        <span className="text-sm font-medium">{item.title}</span>
                        <span className="ml-2 text-xs opacity-60">({item.type})</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Tag Buttons */}
            <div
              className="flex flex-wrap justify-center gap-3 mb-8 max-w-3xl animate-fade-in-up"
              style={{ animationDelay: "0.6s", zIndex: -1 }}
            >
              {tagButtons.map((tag, index) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className={`px-4 py-2 text-sm max-sm:px-3 max-sm:py-1.5 max-sm:text-xs cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-fade-in ${theme === "dark" ? "bg-slate-800/50 hover:bg-slate-700 text-slate-300 border-slate-700" : "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200"} border`}
                  style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Quick Searches */}
            <div
              className={`text-center animate-fade-in-up ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
              style={{ animationDelay: "1.3s", zIndex: -1 }}
            >
              <p className="mb-4 text-sm">Quick searches:</p>
              <div className="flex flex-wrap justify-center gap-4 max-sm:grid max-sm:grid-cols-2 max-sm:gap-3">
                {quickSearchLinks.map((link, index) => (
                  <button
                    key={link}
                    onClick={() => handleQuickSearch(link)}
                    className={`text-sm transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-fade-in ${theme === "dark" ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"}`}
                    style={{ animationDelay: `${1.4 + index * 0.05}s` }}
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ================= RESULTS FOUND ================= */}
        {searchQuery && searchResults.length > 0 && (
          <div className="relative z-10 min-h-screen">
            {/* Search Results Header */}
            <div
              className={`sticky top-0 z-40 backdrop-blur-lg transition-all duration-300 ${theme === "dark" ? "bg-[#0f1729]/80" : "bg-white/80"} border-b ${theme === "dark" ? "border-slate-800" : "border-slate-200"}`}
            >
              <div className="max-w-6xl mx-auto px-4 py-4">
                <div className="flex items-center gap-4 max-sm:flex-col max-sm:items-start">
                  {/* Logo */}
                  <h1
                    className={`text-3xl font-bold tracking-tight cursor-pointer transition-transform hover:scale-105 ${theme === "dark" ? "text-white" : "text-slate-900"}`}
                    onClick={() => {
                      setSearchResults([])
                      setSearchQuery("")
                      setSuggestions([])
                      setInputValue("")
                      setSearchTime(null)
                    }}
                  >
                    <span className="text-[#4285f4]">S</span>
                    <span className="text-[#ea4335]">u</span>
                    <span className="text-[#fbbc04]">m</span>
                    <span className="text-[#34a853]">i</span>
                    <span className="text-[#4285f4]">t</span> {" "}
                    <span className="text-[#4285f4]">S</span>
                    <span className="text-[#ea4335]">i</span>
                    <span className="text-[#fbbc04]">n</span>
                    <span className="text-[#34a853]">g</span>
                    <span className="text-[#4285f4]">h</span>
                  </h1>

                  {/* Search Bar */}
                  <div className="flex-1 max-w-2xl">
                    <div
                      className={`relative flex items-center gap-3 px-4 py-2 rounded-full transition-all duration-300 ${theme === "dark" ? "bg-slate-800 hover:bg-slate-750" : "bg-white hover:bg-slate-50"} border ${theme === "dark" ? "border-slate-700" : "border-slate-300"} shadow-sm`}
                    >
                      <Search className={`w-4 h-4 ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`} />
                      <Input
                        type="text"
                        value={inputValue}
                        placeholder="Search Sumit's profile..."
                        onChange={(e) => handleInputChange(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            runSearch(inputValue)
                          }
                        }}
                        style={{ boxShadow: 'none' }}
                        className={`flex-1 bg-transparent border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 ${theme === "dark" ? "text-white placeholder:text-slate-500" : "text-slate-900 placeholder:text-slate-400"}`}
                      />
                    </div>
                  </div>

                  {/* Back Button */}
                  <Button
                    variant="ghost"
                    onClick={() => {
                      setSearchResults([])
                      setSearchQuery("")
                      setInputValue("")
                      setSearchTime(null)
                      setSuggestions([])
                    }}
                    className={`transition-all duration-300 hover:scale-105 ${theme === "dark" ? "text-slate-300 hover:text-white hover:bg-slate-800" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"} max-sm:w-full`}
                  >
                    Back to Home
                  </Button>

                  {/* Theme Toggle */}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleTheme}
                    className={`rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 ${theme === "dark" ? "hover:bg-slate-800 text-white" : "hover:bg-slate-100 text-slate-900"}`}
                  >
                    {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </Button>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="max-w-4xl mx-auto px-4 py-8 max-sm:px-3 max-sm:py-5">
              {searchTime !== null && (
                <p className={`text-sm mb-8 animate-fade-in ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                  About {searchResults.length} results ({searchTime} seconds)
                </p>
              )}

              <div className="space-y-8">
                {searchResults.map((result, index) => (
                  <div
                    key={result.id}
                    className={`group animate-slide-in-up transition-all duration-300 hover:translate-x-2 max-sm:hover:translate-x-0 ${theme === "dark" ? "hover:bg-slate-800/30" : "hover:bg-slate-50"} p-6 rounded-lg`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Type Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className={`p-1.5 rounded ${theme === "dark" ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-700"}`}
                      >
                        {getIcon(result.type)}
                      </div>
                      <span className={`text-sm capitalize ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                        {result.type}
                      </span>
                      {result.meta?.date && (
                        <>
                          <span className={`text-sm ${theme === "dark" ? "text-slate-600" : "text-slate-300"}`}>•</span>
                          <div className="flex items-center gap-1.5">
                            <Calendar
                              className={`w-3.5 h-3.5 ${theme === "dark" ? "text-slate-500" : "text-slate-400"}`}
                            />
                            <span className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                              {result.meta.date}
                            </span>
                          </div>
                        </>
                      )}
                      {result.meta?.location && (
                        <>
                          <span className={`text-sm ${theme === "dark" ? "text-slate-600" : "text-slate-300"}`}>•</span>
                          <div className="flex items-center gap-1.5">
                            <MapPin
                              className={`w-3.5 h-3.5 ${theme === "dark" ? "text-slate-500" : "text-slate-400"}`}
                            />
                            <span className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                              {result.meta.location}
                            </span>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-xl md:text-2xl font-medium mb-3 transition-colors duration-300 ${theme === "dark" ? "text-blue-400 group-hover:text-blue-300" : "text-blue-600 group-hover:text-blue-700"} cursor-pointer`}
                    >
                      {result.title}
                    </h3>

                    {/* Url Text */}
                    {result?.urlText && (
                      <a href={result?.urlLink} target="_blank"
                        className={`text-sm leading-relaxed mb-4 ${theme === "dark" ? "text-green-300" : "text-green-700"}`}
                      >
                        {result?.urlText}
                      </a>
                    )}

                    {/* Description */}
                    <p
                      className={`text-sm leading-relaxed mb-4 ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}
                    >
                      {result.description}
                    </p>

                    {/* Meta Info */}
                    {result.meta?.company && (
                      <div className="mb-4">
                        <p className={`text-sm font-medium ${theme === "dark" ? "text-slate-200" : "text-slate-800"}`}>
                          <span className={theme === "dark" ? "text-slate-400" : "text-slate-600"}>Company:</span>{" "}
                          {result.meta.company}
                        </p>
                      </div>
                    )}

                    {result.subtitle && (
                      <div className="mb-4">
                        <p className={`text-sm font-medium ${theme === "dark" ? "text-slate-200" : "text-slate-800"}`}>
                          <span className={theme === "dark" ? "text-slate-400" : "text-slate-600"}>University:</span>{" "}
                          {result.subtitle}
                        </p>
                      </div>
                    )}

                    {/* Achievements */}
                    {result.achievements && result.achievements.length > 0 && (
                      <div className="mb-4">
                        <p
                          className={`text-sm font-medium mb-2 ${theme === "dark" ? "text-slate-200" : "text-slate-800"}`}
                        >
                          Key Achievements:
                        </p>
                        <ul className="space-y-2">
                          {result.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className={`flex items-start gap-2 text-sm ${theme === "dark" ? "text-slate-300" : "text-slate-700"} animate-fade-in`}
                              style={{ animationDelay: `${index * 0.1 + idx * 0.05}s` }}
                            >
                              <span className="text-green-500 mt-0.5">✓</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Social Media Links */}
                    {result.socialLinks && result.socialLinks.length > 0 && (
                      <div className="mt-4">
                        

                        <div className="flex flex-wrap gap-3 items-center mb-5">
                          <p
                          className={`text-sm font-medium mb-0 ${
                            theme === "dark" ? "text-slate-200" : "text-slate-800"
                          }`}
                        >
                          Social Profiles:
                        </p>
                          {result.socialLinks.map((social, idx) => (
                            <a
                              key={idx}
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`px-4 py-1 max-sm:px-3 max-sm:text-xs rounded-full text-sm transition-all duration-300 hover:scale-105 ${
                                theme === "dark"
                                  ? "bg-slate-800 text-blue-400 hover:bg-slate-700"
                                  : "bg-slate-100 text-blue-600 hover:bg-slate-200"
                              }`}
                              style={{border:'1px solid #ddd'}}
                            >
                              {social.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tags */}
                    {result.tags && result.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {result.tags.map((tag, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className={`text-xs transition-all duration-300 hover:scale-105 animate-fade-in ${theme === "dark" ? "text-blue-400 border-blue-400/30 hover:bg-blue-400/10" : "text-blue-600 border-blue-600/30 hover:bg-blue-600/10"}`}
                            style={{ animationDelay: `${index * 0.1 + idx * 0.03}s` }}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ================= NO RESULTS ================= */}
        {searchQuery && searchResults.length === 0 && !isSearching && (
          <NoResults query={searchQuery} />
        )}
      </div>
    </div>
  )
}
