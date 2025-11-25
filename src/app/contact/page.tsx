"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { ContactForm as ContactFormComponent, ContactInfo } from "@/components/contact-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MessageSquare, Clock, MapPin } from "lucide-react"
import type { ContactForm as ContactFormType } from "@/types/portfolio"

const handleContactSubmit = async (data: ContactFormType) => {
  // Simulate form submission
  console.log("Form submitted:", data)
  await new Promise(resolve => setTimeout(resolve, 1000))
  alert("Thank you for your message! I'll get back to you soon.")
}

const contactStats = [
  { icon: MessageSquare, label: "Response Time", value: "Within 24 hours" },
  { icon: Clock, label: "Available", value: "Mon - Fri, 9am - 6pm PST" },
  { icon: MapPin, label: "Location", value: "San Francisco, CA" },
]

export default function Contact() {
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
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Have a project in mind or want to collaborate? I'd love to hear from you. 
              Send me a message and I'll get back to you as soon as possible.
            </motion.p>
          </div>

          {/* Contact Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12"
          >
            <Card>
              <CardContent className="p-6">
                <div className="grid sm:grid-cols-3 gap-6 text-center">
                  {contactStats.map((stat, index) => {
                    const Icon = stat.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                        className="flex flex-col items-center space-y-2"
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold text-foreground">{stat.label}</h3>
                        <p className="text-sm text-muted-foreground">{stat.value}</p>
                      </motion.div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form and Info */}
          <div className="grid lg:grid-cols-3 gap-8">
            <ContactFormComponent onSubmit={handleContactSubmit} />
            <ContactInfo />
          </div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Let's Work Together</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-6">
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    I'm passionate about creating exceptional digital experiences and solving complex problems. 
                    Whether you have a specific project in mind or just want to discuss ideas, I'm here to help.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">What I Can Help With</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Full-stack web development</li>
                        <li>• UI/UX design and prototyping</li>
                        <li>• API development and integration</li>
                        <li>• Performance optimization</li>
                        <li>• Technical consulting</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Project Types</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• E-commerce platforms</li>
                        <li>• SaaS applications</li>
                        <li>• Portfolio websites</li>
                        <li>• Mobile-responsive apps</li>
                        <li>• Custom web solutions</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button size="lg">
                      <Mail className="mr-2 h-4 w-4" />
                      Start a Conversation
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}