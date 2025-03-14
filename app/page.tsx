"use client";

import { Hero } from "../components/ui/hero";
import { ProjectCard } from "../components/ui/project-card";
import { ContactForm } from "../components/ui/contact-form";
import { Code, Layers, Palette } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <Hero 
        subtitle="Hello, I'm"
        title="John Doe"
        description="A passionate full-stack developer specializing in creating beautiful and functional web applications with modern technologies."
        ctaText="View Projects"
        ctaHref="#projects"
        secondaryCtaText="Contact Me"
        secondaryCtaHref="#contact"
      />

      {/* Projects Section */}
      <section id="projects" className="w-full py-20 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Featured Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="E-Commerce Platform"
              description="A full-featured e-commerce platform built with Next.js, Stripe, and a headless CMS for content management."
              date="2023"
              tags={["Next.js", "TypeScript", "Stripe", "Tailwind CSS"]}
              icon={<Code className="h-5 w-5" />}
              demoLink="https://example.com"
              githubLink="https://github.com/johndoe/ecommerce"
            />
            <ProjectCard
              title="Portfolio Website"
              description="A modern portfolio website showcasing my projects and skills, built with React and Framer Motion for smooth animations."
              date="2023"
              tags={["React", "Framer Motion", "Tailwind CSS"]}
              icon={<Palette className="h-5 w-5" />}
              demoLink="https://example.com"
              githubLink="https://github.com/johndoe/portfolio"
            />
            <ProjectCard
              title="Task Management App"
              description="A collaborative task management application with real-time updates, user authentication, and team features."
              date="2022"
              tags={["React", "Firebase", "TypeScript", "Redux"]}
              icon={<Layers className="h-5 w-5" />}
              demoLink="https://example.com"
              githubLink="https://github.com/johndoe/taskmanager"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Get In Touch
          </h2>
          <div className="mx-auto max-w-md">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}