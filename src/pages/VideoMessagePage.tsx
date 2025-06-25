import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Custom Layout Components
import MinimalHeader from '@/components/layout/MinimalHeader';
import MinimalFooter from '@/components/layout/MinimalFooter';

// shadcn/ui Components
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';

// Icons
import { Heart } from 'lucide-react';

const VideoMessagePage = () => {
  console.log('VideoMessagePage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-rose-50 to-pink-100 font-serif">
      <MinimalHeader />

      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-3xl"
        >
          <Card className="shadow-2xl rounded-xl border-pink-100 overflow-hidden">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl text-slate-800">A Message For You</CardTitle>
              <CardDescription className="text-lg text-slate-500 pt-2">
                Please watch this with all your heart.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AspectRatio ratio={16 / 9} className="bg-slate-900 rounded-lg overflow-hidden">
                {/* 
                  This is a placeholder video. 
                  Replace 'LXb3EKWsInQ' with the actual YouTube video ID of the unlisted proposal video.
                */}
                <iframe
                  src="https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=0&rel=0"
                  title="A special video message"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </AspectRatio>
            </CardContent>
            <CardFooter className="flex justify-center pt-6">
              <Button asChild size="lg" className="bg-pink-500 hover:bg-pink-600 text-white text-lg animate-pulse">
                {/* This link navigates to the final question page as defined in App.tsx */}
                <Link to="/the-question">
                  There's one more thing...
                  <Heart className="ml-2 h-5 w-5 fill-current" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </main>

      <MinimalFooter />
    </div>
  );
};

export default VideoMessagePage;