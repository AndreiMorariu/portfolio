import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "../utils/cn";

import Cv from "./Cv";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    icon: React.ReactNode;
    title: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div>
      <h2 className="text-4xl my-12 font-bold text-center text-white relative">
        Main Technologies
      </h2>
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-10",
          className
        )}
      >
        {items.map((item, idx) => (
          <a
            key={idx}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-emerald-300/[0.8] block  rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <div>{item.icon}</div>
              <div>{item.title}</div>
            </Card>
          </a>
        ))}
      </div>
      <Cv />
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full py-4 overflow-hidden bg-zinc-900 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 text-white",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4 flex flex-col items-center gap-4 text-xl font-bold">
          {children}
        </div>
      </div>
    </div>
  );
};
