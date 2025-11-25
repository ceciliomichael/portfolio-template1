export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  category: string
}

export interface Skill {
  id: string
  name: string
  level: number
  category: string
  icon?: string
}

export interface Experience {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate?: string
  description: string[]
  current: boolean
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface NavigationItem {
  name: string
  href: string
  current: boolean
}