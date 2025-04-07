
import { Link } from "react-router-dom"
import { ArrowRight, BarChart, PieChart, Activity, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import TeamSelector from "@/components/TeamSelector"

const HomePage = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          AI-Powered Basketball
          <span className="block text-primary">Scouting Reports</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Transform game data into actionable scouting reports. Get instant team analysis, player insights, and strategic recommendations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button size="lg" asChild>
            <Link to="/generate">
              Generate Report <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <TeamSelector />
        </div>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Activity className="h-8 w-8 text-primary" />}
            title="Live NBA Stats"
            description="Access the latest statistics from the past 5 games for any NBA team. Updated daily with data directly from official sources."
          />
          <FeatureCard
            icon={<PieChart className="h-8 w-8 text-primary" />}
            title="Advanced Analysis"
            description="Our AI models identify patterns, tendencies, and key matchups to watch, helping coaches prepare effective game plans."
          />
          <FeatureCard
            icon={<FileText className="h-8 w-8 text-primary" />}
            title="Actionable Reports"
            description="Get professional scouting reports with offensive strategies, defensive recommendations, and player-specific insights."
          />
        </div>
      </section>

      {/* Team Selection Section */}
      <section className="bg-muted py-10 px-6 rounded-lg">
        <div className="text-center space-y-6 mb-8">
          <h2 className="text-3xl font-bold">Start Scouting a Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select a team to view recent game statistics or generate a comprehensive scouting report with AI-powered insights.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Sample teams - in a real app, these would be dynamically generated */}
          <TeamCard teamName="Celtics" teamId="1610612738" />
          <TeamCard teamName="Lakers" teamId="1610612747" />
          <TeamCard teamName="Warriors" teamId="1610612744" />
          <TeamCard teamName="Bucks" teamId="1610612749" />
          <TeamCard teamName="Suns" teamId="1610612756" />
          {/* More team cards would be added here */}
        </div>
        
        <div className="text-center mt-8">
          <Button variant="outline" asChild>
            <Link to="/teams">View All Teams</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <Card className="border shadow-sm">
      <CardContent className="pt-6 text-center">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

const TeamCard = ({ teamName, teamId }: { teamName: string, teamId: string }) => {
  const logoUrl = `https://cdn.nba.com/logos/nba/${teamId}/primary/L/logo.svg`
  
  return (
    <Link
      to={`/team/${teamId}`}
      className="bg-card border rounded-lg p-4 flex flex-col items-center stat-card"
    >
      <img 
        src={logoUrl} 
        alt={`${teamName} logo`} 
        className="team-logo mb-2"
        onError={(e) => {
          (e.target as HTMLImageElement).src = "https://cdn.nba.com/logos/leagues/logo-nba.svg"
        }}
      />
      <span className="text-sm font-medium">{teamName}</span>
    </Link>
  )
}

export default HomePage
