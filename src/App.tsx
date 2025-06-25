import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import LandingPage from "./pages/LandingPage";
import MemoryLanePage from "./pages/MemoryLanePage";
import QuizPage from "./pages/QuizPage";
import TheQuestionPage from "./pages/TheQuestionPage";
import VideoMessagePage from "./pages/VideoMessagePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();


const App = () => (
<QueryClientProvider client={queryClient}>
    <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
        <Routes>


          <Route path="/" element={<LandingPage />} />
          <Route path="/memory-lane" element={<MemoryLanePage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/the-question" element={<TheQuestionPage />} />
          <Route path="/video-message" element={<VideoMessagePage />} />
          {/* catch-all */}
          <Route path="*" element={<NotFound />} />


        </Routes>
    </BrowserRouter>
    </TooltipProvider>
</QueryClientProvider>
);

export default App;
