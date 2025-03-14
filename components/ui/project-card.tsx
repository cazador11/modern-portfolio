"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  date?: string;
  tags?: string[];
  icon?: React.ReactNode;
  demoLink?: string;
  githubLink?: string;
  className?: string;
}

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  (
    {
      title,
      description,
      date,
      tags,
      icon,
      demoLink,
      githubLink,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={cn(
          "group relative overflow-hidden rounded-xl border bg-card p-6 text-card-foreground shadow-sm transition-all hover:shadow-md",
          className
        )}
        {...props}
      >
        {/* Glass morphism effect */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-background/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        
        <div className="flex flex-col space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              {icon && (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {icon}
                </div>
              )}
              <div>
                <h3 className="text-xl font-semibold">{title}</h3>
                {date && (
                  <p className="text-sm text-muted-foreground">{date}</p>
                )}
              </div>
            </div>
            <div className="flex space-x-2">
              {githubLink && (
                <Link
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground"
                >
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              )}
              {demoLink && (
                <Link
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="sr-only">Live Demo</span>
                </Link>
              )}
            </div>
          </div>
          
          <p className="text-muted-foreground">{description}</p>
          
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

export { ProjectCard };