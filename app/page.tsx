"use client"

import { useState } from "react"
import { Search, Moon, Sun, MapPin, Calendar, GraduationCap, Briefcase, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

type SearchResult = {
  id: string
  type: "about" | "education" | "experience"
  title: string
  subtitle?: string
  description: string
  meta?: {
    date?: string
    location?: string
    company?: string
  }
  achievements?: string[]
  tags?: string[]
}

const mockData: SearchResult[] = [
  {
    id: "1",
    type: "about",
    title: "About Sumit Singh - Senior Software Engineer",
    description:
      "Accomplished senior software engineer equipped with 5+ years of success architecting and scaling secure, real-time applications across front-end, back-end, and cloud environments. Experience partnering with product managers and UI/UX designers to translate product requirements into production-ready code, leveraging expertise in distributed systems, API design, CI/CD pipelines, and performance optimization to deliver low-latency, fault-tolerant platforms serving hundreds of thousands of users.",
    achievements: [
      "5+ years of software engineering experience",
      "Expertise in distributed systems and API design",
      "Experience with platforms serving hundreds of thousands of users",
      "Specialization in real-time, fault-tolerant applications",
    ],
    tags: [
      "#Senior Software Engineer",
      "#Full Stack",
      "#Real-time Applications",
      "#Distributed Systems",
      "#API Design",
      "#CI/CD",
    ],
  },
  {
    id: "2",
    type: "education",
    title: "Master of Computer Information Systems",
    subtitle: "Colorado State University",
    description:
      "Pursued an advanced degree in Computer Information Systems at Colorado State University, Fort Collins, focusing on business intelligence, IT project management, and application development. Developed strong analytical, technical, and project management skills through coursework and projects.",
    meta: {
      date: "May 2025",
      location: "Fort Collins, Colorado, United States",
    },
    achievements: [
      "CGPA: 3.73/4",
      "Completed graduate certifications in Business Intelligence, IT Project Management, and Business Application Development",
      "Led multiple hands-on projects integrating database management, analytics, and software development",
    ],
    tags: ["#Masters", "#MCIS", "#Colorado State University", "#Computer Information Systems"],
  },
  {
    id: "3",
    type: "education",
    title: "Bachelor of Engineering in Computer Science",
    subtitle: "Anna University",
    description:
      "Completed undergraduate studies in Computer Science & Engineering at Anna University, Chennai. Gained a strong foundation in programming, algorithms, and software engineering principles, preparing for a career in full-stack and cloud application development.",
    meta: {
      date: "Apr 2021",
      location: "Chennai, Tamil Nadu, India",
    },
    achievements: [
      "CGPA: 8.53/10",
      "Specialized in computer science and engineering fundamentals",
      "Completed major projects in software development and data structures",
    ],
    tags: ["#Bachelors", "#Computer Science", "#Engineering", "#Anna University"],
  },
  {
    id: "4",
    type: "experience",
    title: "Senior Software Engineer at SaleAssist.ai",
    subtitle: "SaleAssist.ai",
    description:
      "Engineered and enhanced products and dashboards using React, HTML, JavaScript, CSS, SCSS, Material-UI, Handlebars, and Webpack. Built and optimized a video calling system using Agora web SDK, resulting in a 90% improvement in video calling experience.",
    meta: {
      date: "Apr 2022 - Aug 2025",
      location: "Remote",
      company: "SaleAssist.ai",
    },
    achievements: [
      "90% improvement in video calling experience",
      "60% faster connections",
      "Resolved 50+ complex bugs",
      "Enhanced system performance and reliability",
      "Managed 3K+ clients, 6K+ agents, 160K+ meetings",
    ],
    tags: ["#React", "#JavaScript", "#CSS", "#SCSS", "#Material-UI", "#Agora SDK", "+2 more"],
  },
  {
    id: "5",
    type: "experience",
    title: "UI Developer at KidBit",
    subtitle: "KidBit",
    description:
      "Developed and maintained a responsive website using React and Material-UI, focusing on enhancing user experience and overall site performance metrics. Maintained 99.5% uptime and implemented automation solutions.",
    meta: {
      date: "Aug 2021 - Mar 2022",
      location: "Remote",
      company: "KidBit",
    },
    achievements: [
      "99.5% uptime maintenance",
      "Delivered full website under 3-day deadline",
      "Automated workflows saving 10+ hours per week",
      "Enhanced user experience and performance",
    ],
    tags: ["#React", "#Material-UI", "#UI Development", "#Python", "#Selenium", "#Web Scraping"],
  },
]

const quickSearchLinks = ["about", "projects", "experience", "skills", "education", "publications", "contact"]

const tagButtons = [
  "5+ Years Experience",
  "Full Stack Developer",
  "React Expert",
  "Problem Solver",
  "Strong UI/UX Orientation",
  "REST & GraphQL API's",
]

export default function PortfolioSearch() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.trim()) {
      setIsSearching(true)
      // Simulate search delay for animation
      setTimeout(() => {
        const results = mockData.filter(
          (item) =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase()) ||
            item.type.toLowerCase().includes(query.toLowerCase()),
        )
        setSearchResults(results)
        setIsSearching(false)
      }, 300)
    } else {
      setSearchResults([])
      setIsSearching(false)
    }
  }

  const handleQuickSearch = (query: string) => {
    handleSearch(query)
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "about":
        return <User className="w-4 h-4" />
      case "education":
        return <GraduationCap className="w-4 h-4" />
      case "experience":
        return <Briefcase className="w-4 h-4" />
      default:
        return null
    }
  }

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
        {searchResults.length === 0 ? (
          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
            {/* Logo */}
            <div className="mb-8 animate-fade-in-up">
              <h1
                className={`text-7xl md:text-8xl font-bold tracking-tight ${theme === "dark" ? "text-white" : "text-slate-900"}`}
              >
                <span className="inline-block animate-bounce-subtle text-[#4285f4]" style={{ animationDelay: "0s" }}>
                  S
                </span>
                <span className="inline-block animate-bounce-subtle text-[#ea4335]" style={{ animationDelay: "0.1s" }}>
                  u
                </span>
                <span className="inline-block animate-bounce-subtle text-[#fbbc04]" style={{ animationDelay: "0.2s" }}>
                  m
                </span>
                <span className="inline-block animate-bounce-subtle text-[#34a853]" style={{ animationDelay: "0.3s" }}>
                  i
                </span>
                <span className="inline-block animate-bounce-subtle text-[#4285f4]" style={{ animationDelay: "0.4s" }}>
                  t
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
                  className={`relative flex items-center gap-3 px-6 py-4 rounded-full transition-all duration-300 ${theme === "dark" ? "bg-slate-800/90 hover:bg-slate-800" : "bg-white hover:bg-slate-50"} border ${theme === "dark" ? "border-slate-700" : "border-slate-200"}`}
                >
                  <Search className={`w-5 h-5 ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`} />
                  <Input
                    type="text"
                    placeholder="Search Sumit's profile..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className={`flex-1 bg-transparent border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 ${theme === "dark" ? "text-white placeholder:text-slate-500" : "text-slate-900 placeholder:text-slate-400"}`}
                  />
                </div>
              </div>
            </div>

            {/* Tag Buttons */}
            <div
              className="flex flex-wrap justify-center gap-3 mb-8 max-w-3xl animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              {tagButtons.map((tag, index) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className={`px-4 py-2 text-sm cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-fade-in ${theme === "dark" ? "bg-slate-800/50 hover:bg-slate-700 text-slate-300 border-slate-700" : "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200"} border`}
                  style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Quick Searches */}
            <div
              className={`text-center animate-fade-in-up ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
              style={{ animationDelay: "1.3s" }}
            >
              <p className="mb-4 text-sm">Quick searches:</p>
              <div className="flex flex-wrap justify-center gap-4">
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
        ) : (
          <div className="relative z-10 min-h-screen">
            {/* Search Results Header */}
            <div
              className={`sticky top-0 z-40 backdrop-blur-lg transition-all duration-300 ${theme === "dark" ? "bg-[#0f1729]/80" : "bg-white/80"} border-b ${theme === "dark" ? "border-slate-800" : "border-slate-200"}`}
            >
              <div className="max-w-6xl mx-auto px-4 py-4">
                <div className="flex items-center gap-4">
                  {/* Logo */}
                  <h1
                    className={`text-3xl font-bold tracking-tight cursor-pointer transition-transform hover:scale-105 ${theme === "dark" ? "text-white" : "text-slate-900"}`}
                    onClick={() => setSearchResults([])}
                  >
                    <span className="text-[#4285f4]">S</span>
                    <span className="text-[#ea4335]">u</span>
                    <span className="text-[#fbbc04]">m</span>
                    <span className="text-[#34a853]">i</span>
                    <span className="text-[#4285f4]">t</span>
                  </h1>

                  {/* Search Bar */}
                  <div className="flex-1 max-w-2xl">
                    <div
                      className={`relative flex items-center gap-3 px-4 py-2 rounded-full transition-all duration-300 ${theme === "dark" ? "bg-slate-800 hover:bg-slate-750" : "bg-white hover:bg-slate-50"} border ${theme === "dark" ? "border-slate-700" : "border-slate-300"} shadow-sm`}
                    >
                      <Search className={`w-4 h-4 ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`} />
                      <Input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
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
                    }}
                    className={`transition-all duration-300 hover:scale-105 ${theme === "dark" ? "text-slate-300 hover:text-white hover:bg-slate-800" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`}
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
            <div className="max-w-4xl mx-auto px-4 py-8">
              <p className={`text-sm mb-8 animate-fade-in ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                About {searchResults.length} results (0.{Math.floor(Math.random() * 50 + 10)} seconds)
              </p>

              <div className="space-y-8">
                {searchResults.map((result, index) => (
                  <div
                    key={result.id}
                    className={`group animate-slide-in-up transition-all duration-300 hover:translate-x-2 ${theme === "dark" ? "hover:bg-slate-800/30" : "hover:bg-slate-50"} p-6 rounded-lg`}
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
      </div>
    </div>
  )
}
