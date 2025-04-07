
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "./components/ui/toaster"
import MainLayout from "./components/layouts/MainLayout"
import HomePage from "./pages/HomePage"
import TeamAnalysisPage from "./pages/TeamAnalysisPage"
import ScoutingReportPage from "./pages/ScoutingReportPage"
import NotFoundPage from "./pages/NotFoundPage"
import Index from "./pages/Index"
import "./App.css"

// Create a React Query client
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/nba" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/nba/team/:teamId" element={<TeamAnalysisPage />} />
            <Route path="/nba/report/:teamId" element={<ScoutingReportPage />} />
            <Route path="/nba/generate" element={<ScoutingReportPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App
