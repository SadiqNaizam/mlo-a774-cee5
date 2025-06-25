import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Layout Components
import MinimalHeader from '@/components/layout/MinimalHeader';
import MinimalFooter from '@/components/layout/MinimalFooter';

// ShadCN UI Components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const LandingPage = () => {
  console.log('LandingPage loaded');

  return (
    <div 
      className="flex flex-col min-h-screen bg-cover bg-center" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1532372576221-4501a95b327a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
    >
      <MinimalHeader />

      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Card className="w-full max-w-lg text-center bg-white/80 backdrop-blur-sm shadow-2xl border-pink-100">
            <CardHeader>
              <CardTitle className="text-4xl font-serif text-slate-800">
                To the One Who Holds My Heart
              </CardTitle>
              <CardDescription className="text-lg text-slate-600 pt-2">
                I made a little something to remind us of the journey we've shared.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="mb-6 text-slate-700">Are you ready to see?</p>
              <Button asChild size="lg" className="bg-pink-500 hover:bg-pink-600 text-white animate-pulse">
                <Link to="/memory-lane">
                  Begin Our Story
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </main>

      <MinimalFooter />
    </div>
  );
};

export default LandingPage;