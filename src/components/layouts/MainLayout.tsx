
import { Outlet } from "react-router-dom"
import Navbar from "../ui/Navbar"
import Footer from "../ui/Footer"

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#0f172a] text-white">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
