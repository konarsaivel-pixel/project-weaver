import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cybersecurity from "./pages/services/Cybersecurity";
import DataScience from "./pages/services/DataScience";
import Enterprise from "./pages/services/Enterprise";
import LiferayDXP from "./pages/services/LiferayDXP";
import Outsource from "./pages/services/Outsource";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/cybersecurity" element={<Cybersecurity />} />
          <Route path="/services/data-science" element={<DataScience />} />
          <Route path="/services/enterprise" element={<Enterprise />} />
          <Route path="/services/liferay" element={<LiferayDXP />} />
          <Route path="/services/outsource" element={<Outsource />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
