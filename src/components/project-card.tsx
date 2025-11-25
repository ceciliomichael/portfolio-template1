"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import type { Project } from "@/types/portfolio"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="pb-4">
          <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center">
            <span className="text-muted-foreground text-sm">Project Image</span>
          </div>
          <CardTitle className="text-xl">{project.title}</CardTitle>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col">
          <p className="text-muted-foreground mb-4 flex-1">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex gap-2">
            {project.liveUrl && (
              <Button size="sm" className="flex-1">
                <ExternalLink className="mr-2 h-3 w-3" />
                Live Demo
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="outline" size="sm" className="flex-1">
                <Github className="mr-2 h-3 w-3" />
                Code
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}