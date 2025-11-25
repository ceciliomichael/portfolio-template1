"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar, Briefcase } from "lucide-react"
import { formatDate } from "@/lib/utils"
import type { Experience } from "@/types/portfolio"

interface ExperienceTimelineProps {
  experience: Experience
  index: number
}

export function ExperienceTimeline({ experience, index }: ExperienceTimelineProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative"
    >
      <Card className="hover:shadow-md transition-shadow duration-300">
        <CardContent className="p-6">
          <div className="flex flex-col space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground">
                  {experience.title}
                </h3>
                <p className="text-lg text-primary font-medium">
                  {experience.company}
                </p>
              </div>
              {experience.current && (
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Current
                </span>
              )}
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>
                  {formatDate(experience.startDate)} - {experience.endDate ? formatDate(experience.endDate) : 'Present'}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{experience.location}</span>
              </div>
            </div>
            
            <div className="space-y-2">
              {experience.description.map((desc, descIndex) => (
                <p key={descIndex} className="text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Timeline dot */}
      <div className="absolute top-6 -left-3 w-6 h-6 bg-primary rounded-full border-4 border-background z-10" />
    </motion.div>
  )
}