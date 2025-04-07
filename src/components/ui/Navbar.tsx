
import { Link } from "react-router-dom"
import { FileText, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center text-lg font-semibold">
            <FileText className="mr-2 h-6 w-6 text-primary" />
            <span>NBA ScoutSense</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link to="/team/1610612738" className="text-sm font-medium transition-colors hover:text-primary">
            Team Analysis
          </Link>
          <Link to="/report/1610612738" className="text-sm font-medium transition-colors hover:text-primary">
            Scouting Reports
          </Link>
          <Button asChild size="sm">
            <Link to="/generate">Generate Report</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-6">
              <Link to="/" className="text-lg font-medium hover:text-primary">
                Home
              </Link>
              <Link to="/team/1610612738" className="text-lg font-medium hover:text-primary">
                Team Analysis
              </Link>
              <Link to="/report/1610612738" className="text-lg font-medium hover:text-primary">
                Scouting Reports
              </Link>
              <Button className="w-full" asChild>
                <Link to="/generate">Generate Report</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default Navbar
