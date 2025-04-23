
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Introduction from "./pages/Introduction";
import ChronologicalOverview from "./pages/ChronologicalOverview";
import AncientPeriod from "./pages/AncientPeriod";
import KievanRus from "./pages/KievanRus";
import MoscowKingdom from "./pages/MoscowKingdom";
import RussianEmpire from "./pages/RussianEmpire";
import TwentiethCentury from "./pages/TwentiethCentury";
import ModernRussia from "./pages/ModernRussia";
import WarCauses from "./pages/WarCauses";
import WarInfluence from "./pages/WarInfluence";
import Conclusion from "./pages/Conclusion";
import Bibliography from "./pages/Bibliography";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/overview" element={<ChronologicalOverview />} />
          <Route path="/ancient-period" element={<AncientPeriod />} />
          <Route path="/kievan-rus" element={<KievanRus />} />
          <Route path="/moscow-kingdom" element={<MoscowKingdom />} />
          <Route path="/russian-empire" element={<RussianEmpire />} />
          <Route path="/twentieth-century" element={<TwentiethCentury />} />
          <Route path="/modern-russia" element={<ModernRussia />} />
          <Route path="/war-causes" element={<WarCauses />} />
          <Route path="/war-influence" element={<WarInfluence />} />
          <Route path="/conclusion" element={<Conclusion />} />
          <Route path="/bibliography" element={<Bibliography />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
