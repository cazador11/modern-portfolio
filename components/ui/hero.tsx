"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { Button } from "./button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  image?: string;
  className?: string;
}

const AnimatedGrid = () => {
  return (
    <div className="absolute inset-0 -z-10 opacity-20">
      <div className="relative h-full w-full">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute left-0 top-0 h-full w-full border-[0.5px] border-white/20"
            style={{
              transform: `translateX(${i * 10}%)`,
            }}
          />
        ))}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute left-0 top-0 h-full w-full border-[0.5px] border-white/20"
            style={{
              transform: `translateY(${i * 10}%)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

const Hero = React.forwardRef<HTMLDivElement, HeroProps>(
  (
    {
      title = "Creative Developer & Designer",
      subtitle = "Hello, I'm",
      description = "I build exceptional digital experiences that inspire and connect with people through design and code.",
      ctaText = "View Projects",
      ctaHref = "#projects",
      secondaryCtaText = "Contact Me",
      secondaryCtaHref = "#contact",
      image,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/80 px-4 py-24 md:px-6 lg:px-8",
          className
        )}
        {...props}
      >
        <AnimatedGrid />
        <div className="container relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-2 text-lg font-medium text-primary md:text-xl"
            >
              {subtitle}
            </motion.p>
          )}
          {title && (
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
            >
              {title}
            </motion.h1>
          )}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
            >
              {description}
            </motion.p>
          )}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {ctaText && ctaHref && (
              <Button asChild size="lg">
                <Link href={ctaHref}>
                  {ctaText}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
            {secondaryCtaText && secondaryCtaHref && (
              <Button asChild variant="outline" size="lg">
                <Link href={secondaryCtaHref}>{secondaryCtaText}</Link>
              </Button>
            )}
          </motion.div>
          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-12 w-full max-w-3xl"
            >
              <img
                src={image}
                alt="Hero"
                className="h-auto w-full rounded-lg object-cover shadow-xl"
              />
            </motion.div>
          )}
        </div>
      </section>
    );
  }
);

Hero.displayName = "Hero";

export { Hero };