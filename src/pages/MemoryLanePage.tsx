import React from 'react';
import { Link } from 'react-router-dom';

// Custom Components
import MinimalHeader from '@/components/layout/MinimalHeader';
import MinimalFooter from '@/components/layout/MinimalFooter';
import TimelineEventCard from '@/components/TimelineEventCard';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

// Icons
import { Heart } from 'lucide-react';

// Placeholder data for the memories timeline, creating a narrative flow.
const memories: { imageUrl: string; date: string; description: string; alignment: 'left' | 'right' }[] = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?q=80&w=800&auto=format&fit=crop',
    date: 'April 2021',
    description: "Our very first picture together. Remember how nervous we were? Look at us now!",
    alignment: 'left',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760c0341?q=80&w=800&auto=format&fit=crop',
    date: 'October 2021',
    description: "That spontaneous trip to Paris. I'll never forget that evening.",
    alignment: 'right',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop',
    date: 'Summer 2022',
    description: 'Camping with friends. I\'m pretty sure we burned all the marshmallows.',
    alignment: 'left',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1611143669185-585143ea6328?q=80&w=800&auto=format&fit=crop',
    date: 'December 2023',
    description: 'Building that ridiculously complicated furniture in our first apartment together.',
    alignment: 'right',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1559567522-c993119a9a24?q=80&w=800&auto=format&fit=crop',
    date: 'February 2024',
    description: 'Adopting our little furball. The best, messiest decision we ever made.',
    alignment: 'left',
  },
];

const MemoryLanePage = () => {
  console.log('MemoryLanePage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-pink-50/50 font-serif">
      <MinimalHeader />

      <ScrollArea className="flex-1 w-full">
        <main className="w-full flex flex-col items-center py-12 px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 tracking-tight">Our Story So Far...</h2>
            <p className="mt-3 text-lg text-slate-600">A look back at the moments that made us, well, us.</p>
          </div>

          <div className="w-full max-w-2xl">
            {/* This div creates the vertical timeline effect */}
            <div className="relative pl-6 space-y-16 border-l-2 border-dashed border-pink-300">
              {memories.map((memory, index) => (
                <div key={index} className="relative pl-8">
                  {/* The heart icon that sits on the timeline */}
                  <div className="absolute -left-[1.3rem] top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-pink-50/50 rounded-full">
                    <Heart className="h-5 w-5 text-pink-400 fill-current" />
                  </div>
                  <TimelineEventCard
                    imageUrl={memory.imageUrl}
                    date={memory.date}
                    description={memory.description}
                    alignment={memory.alignment}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button asChild size="lg" className="bg-pink-500 hover:bg-pink-600 text-lg shadow-lg shadow-pink-500/30 transform hover:scale-105 transition-transform duration-300">
              <Link to="/quiz">
                Continue
              </Link>
            </Button>
          </div>
        </main>
      </ScrollArea>

      <MinimalFooter />
    </div>
  );
};

export default MemoryLanePage;