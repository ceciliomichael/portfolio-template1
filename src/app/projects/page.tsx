"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { Filter, Code, Palette, Database, Globe } from "lucide-react"
import type { Project } from "@/types/portfolio"

const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with Next.js, featuring real-time inventory management, secure payment processing, and responsive design.",
    image: "",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    category: "web"
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    category: "web"
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
    image: "",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "CSS3", "JavaScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    category: "web"
  },
  {
    id: "4",
    title: "Portfolio Website",
    description: "A stunning portfolio website with smooth animations, responsive design, and optimized performance.",
    image: "",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    category: "design"
  },
  {
    id: "5",
    title: "Blog Platform",
    description: "A full-featured blog platform with markdown support, SEO optimization, and content management system.",
    image: "",
    technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL", "Vercel"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    category: "web"
  },
  {
    id: "6",
    title: "API Documentation",
    description: "Comprehensive API documentation with interactive examples, authentication guides, and SDK integration.",
    image: "",
    technologies: ["React", "Swagger", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    category: "backend"
  }
]

const categories = [
  { name: "All", icon: Globe, value: "all" },
  { name: "Web Apps", icon: Code, value: "web" },
  { name: "Design", icon: Palette, value: "design" },
  { name: "Backend", icon: Database, value: "backend" },
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
            >
              My Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Explore my latest work and side projects. Each project represents a unique challenge and learning experience.
            </motion.p>
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.value)}
                  className="flex items-center gap-2"
                >
                  <Icon className="h-4 w-4" />
                  {category.name}
                </Button>
              )
            })}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Filter className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                No projects found
              </h3>
              <p className="text-muted-foreground">
                Try selecting a different category to see more projects.
              </p>
            </motion.div>
          )}

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-16"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Interested in collaborating?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <Button size="lg">
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}