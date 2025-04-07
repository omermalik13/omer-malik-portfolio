
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "./components/ui/toaster"
import MainLayout from "./components/layouts/MainLayout"
import HomePage from "./pages/HomePage"
import TeamAnalysisPage from "./pages/TeamAnalysisPage"
import ScoutingReportPage from "./pages/ScoutingReportPage"
import NotFoundPage from "./pages/NotFoundPage"
import "./App.css"

// Create a React Query client
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/team/:teamId" element={<TeamAnalysisPage />} />
            <Route path="/report/:teamId" element={<ScoutingReportPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App
