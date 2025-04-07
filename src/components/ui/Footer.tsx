
import { Link } from "react-router-dom"
import { Github } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="h-6 w-6 rounded nba-gradient flex items-center justify-center">
              <span className="text-white font-bold text-xs">N</span>
            </div>
            <span className="text-sm font-semibold">
              NBA ScoutSense © {currentYear}
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/teams" className="hover:text-foreground transition-colors">
              Teams
            </Link>
            <Link to="/reports" className="hover:text-foreground transition-colors">
              Reports
            </Link>
            <Link to="/about" className="hover:text-foreground transition-colors">
              About
            </Link>
          </div>

          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a
              href="https://github.com/your-username/nba-scout-sense"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground text-muted-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-xs text-center text-muted-foreground">
          <p>
            NBA ScoutSense is not affiliated with the NBA or any NBA teams. All NBA logos and team information used are the property of the NBA and its teams.
          </p>
          <p className="mt-1">
            Powered by open-source technology and Hugging Face AI models.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
