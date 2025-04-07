
import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "../ui/button"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded nba-gradient flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-xl font-bold tracking-tight">
              NBA ScoutSense
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
                Teams
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-background border border-border hidden group-hover:block">
                <div className="py-1">
                  <Link
                    to="/team/1610612738" // Celtics ID
                    className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                  >
                    Boston Celtics
                  </Link>
                  <Link
                    to="/team/1610612747" // Lakers ID
                    className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                  >
                    Los Angeles Lakers
                  </Link>
                  <Link
                    to="/team/1610612744" // Warriors ID
                    className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                  >
                    Golden State Warriors
                  </Link>
                  {/* More teams would be added here */}
                </div>
              </div>
            </div>
            <Link
              to="/reports"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Reports
            </Link>
          </div>

          {/* CTA */}
          <Button asChild>
            <Link to="/generate">Generate Report</Link>
          </Button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container mx-auto px-4 py-2 space-y-1">
            <Link
              to="/"
              className="block py-2 text-base font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <div className="py-2">
              <div className="font-medium mb-1">Teams</div>
              <div className="pl-4 space-y-1">
                <Link
                  to="/team/1610612738"
                  className="block py-1 text-sm hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Boston Celtics
                </Link>
                <Link
                  to="/team/1610612747"
                  className="block py-1 text-sm hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Los Angeles Lakers
                </Link>
                <Link
                  to="/team/1610612744"
                  className="block py-1 text-sm hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Golden State Warriors
                </Link>
              </div>
            </div>
            <Link
              to="/reports"
              className="block py-2 text-base font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Reports
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
