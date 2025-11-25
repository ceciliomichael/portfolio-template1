"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Calendar, Download, User, Code, Heart } from "lucide-react"

const personalInfo = [
  { icon: User, label: "Name", value: "John Doe" },
  { icon: MapPin, label: "Location", value: "San Francisco, CA" },
  { icon: Mail, label: "Email", value: "john.doe@example.com" },
  { icon: Calendar, label: "Experience", value: "5+ Years" },
]

const interests = [
  "Web Development",
  "UI/UX Design", 
  "Open Source",
  "Cloud Computing",
  "Machine Learning",
  "Photography"
]

export default function About() {
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
              About Me
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Get to know more about my background, skills, and what drives me as a developer.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Personal Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-1"
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-center">Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {personalInfo.map((info, index) => {
                    const Icon = info.icon
                    return (
                      <div key={index} className="flex items-center space-x-3">
                        <Icon className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <p className="font-medium">{info.value}</p>
                        </div>
                      </div>
                    )
                  })}
                  
                  <div className="pt-4 space-y-2">
                    <Button className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download CV
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Mail className="mr-2 h-4 w-4" />
                      Get in Touch
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:col-span-2 space-y-8"
            >
              <Card>
                <CardHeader>
                  <CardTitle>My Story</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    I'm a passionate full-stack developer with over 5 years of experience building 
                    web applications. My journey in tech started with a curiosity about how things 
                    work on the internet, which quickly evolved into a career focused on creating 
                    exceptional digital experiences.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    I specialize in modern JavaScript frameworks, responsive design, and creating 
                    scalable backend systems. I believe in writing clean, maintainable code and 
                    staying up-to-date with the latest industry trends and best practices.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    When I'm not coding, you can find me exploring new technologies, contributing 
                    to open-source projects, or enjoying outdoor activities. I'm always eager to 
                    take on new challenges and collaborate on exciting projects.
                  </p>
                </CardContent>
              </Card>

              {/* Interests */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="mr-2 h-5 w-5 text-primary" />
                    Interests & Hobbies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Skills Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="mr-2 h-5 w-5 text-primary" />
                    Core Competencies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Frontend Development</h4>
                      <p className="text-sm text-muted-foreground">
                        React, Next.js, TypeScript, Tailwind CSS, Responsive Design
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Backend Development</h4>
                      <p className="text-sm text-muted-foreground">
                        Node.js, Express, PostgreSQL, MongoDB, REST APIs
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Tools & Technologies</h4>
                      <p className="text-sm text-muted-foreground">
                        Git, Docker, AWS, Vercel, Figma, Agile/Scrum
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Soft Skills</h4>
                      <p className="text-sm text-muted-foreground">
                        Problem Solving, Team Collaboration, Communication, Leadership
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}