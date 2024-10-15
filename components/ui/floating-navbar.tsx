'use client';
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { HoverBorderGradient } from "./hover-border-gradient"; // Import HoverBorderGradient

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true); // Ensure navbar is visible on mount
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0); // Show on scroll up, hide on scroll down
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      {visible && (  // Ensure navbar is only rendered when visible
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="fixed top-10 inset-x-0 z-[5000] flex items-center justify-center mx-auto"
        >
          <HoverBorderGradient
            containerClassName={cn("max-w-fit")}
            className={cn("px-10 py-5 border rounded-full shadow")}
            duration={1.5} // Duration of the hover effect (can be adjusted)
            clockwise={true} // Set the gradient rotation
          >
            <div className={cn("flex items-center justify-center space-x-4", className)}>
              {navItems.map((navItem: any, idx: number) => (
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  className={cn(
                    "relative dark:text-neutral-50 flex items-center space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                  )}
                >
                  <span className="block sm:hidden">{navItem.icon}</span>
                  <span className="text-sm !cursor-pointer">{navItem.name}</span>
                </Link>
              ))}
            </div>
          </HoverBorderGradient>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
