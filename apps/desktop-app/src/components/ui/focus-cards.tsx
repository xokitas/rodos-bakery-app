"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface Card {
  title: string;
  src: string;
}

interface FocusCardsProps {
  cards: Card[];
  onCardClick?: (title: string) => void;
}

export function FocusCards({ cards, onCardClick }: FocusCardsProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
      {cards.map((card, index) => (
        <div
          key={card.title}
          className="cursor-pointer"
          onClick={() => onCardClick?.(card.title)}
        >
          <motion.div
            className={cn(
              "rounded-xl overflow-hidden relative aspect-[4/3] w-full",
              hovered !== null && hovered !== index &&
                "blur-[2px] scale-[0.98] transition-all duration-300"
            )}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={card.src}
              alt={card.title}
              className="object-cover w-full h-full absolute inset-0"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
              <p className="text-white font-medium text-sm md:text-base">
                {card.title}
              </p>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}