
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import GlucoseDetailView from "./pages/GlucoseDetailView";
import NotificationView from "./pages/NotificationView";
import Navigation from "./components/Navigation";
import NotFound from "./pages/NotFound";
import StravaPulse from "./pages/StravaPulse";

// Create a client
const queryClient = new QueryClient();

const App = () => (
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/app" element={<Dashboard />} />
          <Route path="/app/glucose-detail" element={<GlucoseDetailView />} />
          <Route path="/app/notifications" element={<NotificationView />} />
          <Route path="/strava-pulse" element={<StravaPulse />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {window.location.pathname.startsWith('/app') && <Navigation />}
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);

export default App;
