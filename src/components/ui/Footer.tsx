
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} NBA ScoutSense. All rights reserved.
        </p>
        <nav className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link to="/nba" className="hover:text-foreground">
            Home
          </Link>
          <Link to="/nba/team/1610612738" className="hover:text-foreground">
            Teams
          </Link>
          <Link to="/nba/report/1610612738" className="hover:text-foreground">
            Reports
          </Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
