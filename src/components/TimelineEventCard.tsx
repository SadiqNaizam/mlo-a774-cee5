import React from 'react';
import { cn } from "@/lib/utils";

interface TimelineEventCardProps {
  /** The URL for the memory's image. */
  imageUrl: string;
  /** The date of the memory. */
  date: string;
  /** A short, personal description of the memory. */
  description: string;
  /**
   * Applies a slight rotation to the card for a more dynamic, scrapbook-like layout.
   * Alternating this in a list is recommended.
   */
  alignment?: 'left' | 'right';
}

/**
 * A custom component for the MemoryLanePage to display a single memory.
 * It's styled to look like a scrapbook entry with an image, date, and description.
 */
const TimelineEventCard: React.FC<TimelineEventCardProps> = ({
  imageUrl,
  date,
  description,
  alignment = 'left',
}) => {
  console.log('TimelineEventCard loaded for date:', date);

  const rotationClass = alignment === 'left' ? '-rotate-2' : 'rotate-2';

  return (
    <div
      className={cn(
        "bg-stone-100 p-4 rounded-lg shadow-lg w-full max-w-sm mx-auto transition-all duration-300 hover:shadow-2xl hover:scale-105",
        rotationClass
      )}
    >
      {/* This inner div creates the effect of a photo pasted onto a card */}
      <div className="bg-white p-2 pb-4 rounded-sm shadow-md">
        <img
          src={imageUrl}
          alt={description}
          className="w-full h-auto object-cover rounded-sm aspect-square"
        />
      </div>
      <div className="mt-4 px-2 text-center">
        <p className="font-serif text-lg text-gray-800 italic">
          "{description}"
        </p>
        <p className="text-sm text-gray-500 mt-2 font-sans tracking-wider uppercase">
          {date}
        </p>
      </div>
    </div>
  );
};

export default TimelineEventCard;