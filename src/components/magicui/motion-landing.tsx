"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "motion/react";

interface MotionLandingProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "fade";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  viewportOnce?: boolean;
}

export function MotionLanding({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance = 28,
  className = "",
  viewportOnce = true,
  ...props
}: MotionLandingProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: distance, x: 0 };
      case "down":
        return { opacity: 0, y: -distance, x: 0 };
      case "left":
        return { opacity: 0, x: distance, y: 0 };
      case "right":
        return { opacity: 0, x: -distance, y: 0 };
      case "fade":
      default:
        return { opacity: 0, x: 0, y: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: viewportOnce, margin: "-40px" }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface MotionCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  index?: number;
  direction?: "up" | "left" | "right";
  className?: string;
}

export function MotionCard({
  children,
  index = 0,
  direction = "up",
  className = "",
  ...props
}: MotionCardProps) {
  const initial =
    direction === "left"
      ? { opacity: 0, x: 24, y: 0 }
      : direction === "right"
        ? { opacity: 0, x: -24, y: 0 }
        : { opacity: 0, y: 24, x: 0 };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      whileHover={{ y: -4 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
