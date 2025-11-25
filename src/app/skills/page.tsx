"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { SkillBadge } from "@/components/skill-badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Database, Palette, Globe, Download } from "lucide-react"
import type { Skill } from "@/types/portfolio"

const skills: Skill[] = [
  // Frontend Skills
  { id: "1", name: "React", level: 90, category: "Frontend" },
  { id: "2", name: "Next.js", level: 85, category: "Frontend" },
  { id: "3", name: "TypeScript", level: 80, category: "Frontend" },
  { id: "4", name: "Tailwind CSS", level: 88, category: "Frontend" },
  { id: "5", name: "Vue.js", level: 75, category: "Frontend" },
  { id: "6", name: "JavaScript", level: 95, category: "Frontend" },
  
  // Backend Skills
  { id: "7", name: "Node.js", level: 85, category: "Backend" },
  { id: "8", name: "Express", level: 80, category: "Backend" },
  { id: "9", name: "PostgreSQL", level: 75, category: "Backend" },
  { id: "10", name: "MongoDB", level: 70, category: "Backend" },
  { id: "11", name: "Python", level: 65, category: "Backend" },
  
  // Design Skills
  { id: "12", name: "Figma", level: 70, category: "Design" },
  { id: "13", name: "UI/UX Design", level: 75, category: "Design" },
  { id: "14", name: "Responsive Design", level: 90, category: "Design" },
  
  // Tools & DevOps
  { id: "15", name: "Git", level: 85, category: "Tools" },
  { id: "16", name: "Docker", level: 60, category: "Tools" },
  { id: "17", name: "AWS", level: 65, category: "Tools" },
  { id: "18", name: "Vercel", level: 80, category: "Tools" },
]

const skillCategories = [
  { name: "Frontend", icon: Code, color: "text-blue-600" },
  { name: "Backend", icon: Database, color: "text-green-600" },
  { name: "Design", icon: Palette, color: "text-purple-600" },
  { name: "Tools", icon: Globe, color: "text-orange-600" },
]

export default function Skills() {
  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category)
  }

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
              My Skills
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              A comprehensive overview of my technical skills and expertise across different domains of web development.
            </motion.p>
          </div>

          {/* Skills Overview Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Technical Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {skillCategories.map((category, index) => {
                    const Icon = category.icon
                    const categorySkills = getSkillsByCategory(category.name)
                    const averageLevel = Math.round(
                      categorySkills.reduce((acc, skill) => acc + skill.level, 0) / categorySkills.length
                    )
                    
                    return (
                      <motion.div
                        key={category.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                        className="text-center"
                      >
                        <div className={`w-16 h-16 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center ${category.color}`}>
                          <Icon className="h-8 w-8" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-1">{category.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{categorySkills.length} Technologies</p>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${averageLevel}%` }}
                            transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                            className="h-2 rounded-full bg-primary"
                          />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{averageLevel}% Proficiency</p>
                      </motion.div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Detailed Skills by Category */}
          {skillCategories.map((category, categoryIndex) => {
            const categorySkills = getSkillsByCategory(category.name)
            const Icon = category.icon
            
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + categoryIndex * 0.1 }}
                className="mb-12"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-10 h-10 mr-3 bg-primary/10 rounded-full flex items-center justify-center ${category.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{category.name} Development</h2>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categorySkills.map((skill, skillIndex) => (
                    <SkillBadge 
                      key={skill.id} 
                      skill={skill} 
                      index={skillIndex}
                    />
                  ))}
                </div>
              </motion.div>
            )
          })}

          {/* Learning & Growth */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-16"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Continuous Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    I'm constantly expanding my skill set and staying up-to-date with the latest technologies 
                    and best practices in web development. Currently exploring advanced React patterns, 
                    cloud architecture, and machine learning applications.
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {["Advanced TypeScript", "GraphQL", "Kubernetes", "Machine Learning", "WebAssembly"].map((topic, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="text-center mt-16"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Have a project in mind?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always excited to work on challenging projects that allow me to utilize and expand my skills.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg">
                View My Projects
              </Button>
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}