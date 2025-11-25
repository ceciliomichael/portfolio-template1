"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { Skill } from "@/types/portfolio"

interface SkillBadgeProps {
  skill: Skill
  index: number
}

export function SkillBadge({ skill, index }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
      className="h-full"
    >
      <Card className="h-full hover:shadow-md transition-shadow duration-300">
        <CardContent className="p-4">
          <div className="flex flex-col items-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-primary font-semibold text-lg">
                {skill.name.charAt(0)}
              </span>
            </div>
            
            <div className="text-center">
              <h3 className="font-medium text-foreground text-sm">
                {skill.name}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                {skill.category}
              </p>
            </div>
            
            <div className="w-full">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-muted-foreground">Level</span>
                <span className="text-xs font-medium text-foreground">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className={cn(
                    "h-2 rounded-full",
                    skill.level >= 80 ? "bg-primary" :
                    skill.level >= 60 ? "bg-blue-500" :
                    skill.level >= 40 ? "bg-yellow-500" :
                    "bg-gray-400"
                  )}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}