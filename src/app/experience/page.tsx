"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, Calendar, MapPin, Download } from "lucide-react"
import type { Experience } from "@/types/portfolio"

const experiences: Experience[] = [
  {
    id: "1",
    title: "Senior Full-Stack Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    startDate: "2022-03-01",
    endDate: undefined,
    current: true,
    description: [
      "Lead development of enterprise-level web applications using Next.js and Node.js",
      "Architect and implement scalable microservices architecture for high-traffic platforms",
      "Mentor junior developers and conduct code reviews to ensure best practices",
      "Collaborate with cross-functional teams to define and implement new features",
      "Optimize application performance resulting in 40% faster load times"
    ]
  },
  {
    id: "2",
    title: "Full-Stack Developer",
    company: "Digital Solutions Ltd.",
    location: "Austin, TX",
    startDate: "2020-06-01",
    endDate: "2022-02-28",
    current: false,
    description: [
      "Developed and maintained multiple client projects using React and Express.js",
      "Implemented RESTful APIs and integrated third-party services",
      "Designed responsive user interfaces with modern CSS frameworks",
      "Participated in agile development processes and sprint planning",
      "Reduced bug reports by 30% through comprehensive testing and debugging"
    ]
  },
  {
    id: "3",
    title: "Frontend Developer",
    company: "Creative Agency Co.",
    location: "Seattle, WA",
    startDate: "2018-09-01",
    endDate: "2020-05-31",
    current: false,
    description: [
      "Built pixel-perfect, responsive websites for various clients",
      "Worked closely with designers to implement UI/UX designs",
      "Optimized websites for SEO and performance",
      "Developed custom WordPress themes and plugins",
      "Maintained and updated existing client websites"
    ]
  },
  {
    id: "4",
    title: "Junior Web Developer",
    company: "StartUp Ventures",
    location: "Portland, OR",
    startDate: "2017-01-15",
    endDate: "2018-08-31",
    current: false,
    description: [
      "Assisted in the development of web applications using HTML, CSS, and JavaScript",
      "Learned and implemented modern frontend frameworks",
      "Collaborated with senior developers on various projects",
      "Participated in code reviews and team meetings",
      "Gained experience in version control and agile methodologies"
    ]
  }
]

export default function Experience() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
            >
              My Experience
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              A journey through my professional career, showcasing growth, challenges, and achievements in web development.
            </motion.p>
          </div>

          {/* Experience Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Career Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">5+</div>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">20+</div>
                    <p className="text-sm text-muted-foreground">Projects Completed</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">4</div>
                    <p className="text-sm text-muted-foreground">Companies</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:transform md:-translate-x-0.5" />
            
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <div 
                  key={experience.id}
                  className={`relative ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto md:w-1/2'}`}
                >
                  <div className={`md:px-8 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <ExperienceTimeline 
                      experience={experience} 
                      index={index}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Briefcase className="mr-2 h-5 w-5 text-primary" />
                  Key Technologies Used
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Frontend</h4>
                    <p className="text-sm text-muted-foreground">
                      React, Next.js, Vue.js, TypeScript, Tailwind CSS
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Backend</h4>
                    <p className="text-sm text-muted-foreground">
                      Node.js, Express, Python, PostgreSQL, MongoDB
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Tools</h4>
                    <p className="text-sm text-muted-foreground">
                      Git, Docker, AWS, CI/CD, Testing Frameworks
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Methodologies</h4>
                    <p className="text-sm text-muted-foreground">
                      Agile, Scrum, TDD, Code Reviews, Mentoring
                    </p>
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
              Interested in working together?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting projects. Let's connect and explore how we can collaborate.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg">
                Get in Touch
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