"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "../../lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface GlassNavbarProps {
  items: NavItem[]
  className?: string
  defaultActive?: string
  position?: "top" | "bottom"
}

export function GlassNavbar({ 
  items, 
  className, 
  defaultActive = "Home",
  position = "top"
}: GlassNavbarProps) {
  const [activeTab, setActiveTab] = useState<string>(defaultActive)
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    handleResize()
    handleScroll()
    
    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll)
    
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const positionClasses = position === "top" 
    ? "top-5 left-0 right-0" 
    : "bottom-5 left-0 right-0"

  return (
    <div className={cn("fixed z-[9999]", positionClasses, className)}>
      <div className="flex justify-center">
        <motion.div 
          className={cn(
            "flex items-center gap-3 backdrop-blur-lg py-2 px-2 rounded-full shadow-lg relative",
            "border transition-all duration-300",
            isScrolled 
              ? "bg-gray-900/80 border-gray-700/50" 
              : "bg-gray-900/30 border-gray-700/20"
          )}
          initial={{ y: position === "top" ? -20 : 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          {items.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.name
            const isHovered = hoveredTab === item.name

            return (
              <Link
                key={item.name}
                href={item.url}
                onClick={(e) => {
                  e.preventDefault()
                  setActiveTab(item.name)
                }}
                onMouseEnter={() => setHoveredTab(item.name)}
                onMouseLeave={() => setHoveredTab(null)}
                className={cn(
                  "relative cursor-pointer text-sm font-medium px-6 py-3 rounded-full transition-all duration-300",
                  "text-gray-300 hover:text-white",
                  isActive && "text-white"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full -z-10 overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute inset-0 bg-blue-500/10 rounded-full" />
                    <div className="absolute inset-[-4px] bg-blue-500/5 rounded-full blur-md" />
                  </motion.div>
                )}

                <motion.span
                  className="hidden md:inline relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                </motion.span>
                <motion.span 
                  className="md:hidden relative z-10"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} strokeWidth={2} />
                </motion.span>
          
                <AnimatePresence>
                  {isHovered && !isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="absolute inset-0 bg-white/5 rounded-full -z-10"
                    />
                  )}
                </AnimatePresence>
              </Link>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}