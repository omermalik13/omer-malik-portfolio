
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { FileText, ArrowRight, BarChart2, Users, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { useToast } from "@/hooks/use-toast"
import TeamStatsTable from "@/components/TeamStatsTable"
import GameResultsList from "@/components/GameResultsList"
import PlayerStatsList from "@/components/PlayerStatsList"

// Mock data - in a real app, this would come from an API
const mockTeamData = {
  "1610612738": {
    id: "1610612738",
    name: "Boston Celtics",
    abbreviation: "BOS",
    city: "Boston",
    conference: "East",
    division: "Atlantic",
    logo: "https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg"
  },
  "1610612747": {
    id: "1610612747",
    name: "Los Angeles Lakers",
    abbreviation: "LAL",
    city: "Los Angeles",
    conference: "West",
    division: "Pacific",
    logo: "https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg"
  },
  "1610612744": {
    id: "1610612744",
    name: "Golden State Warriors",
    abbreviation: "GSW",
    city: "Golden State",
    conference: "West",
    division: "Pacific",
    logo: "https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg"
  }
}

const mockGames = [
  {
    id: "0022300001",
    date: "2024-04-01",
    homeTeam: "Boston Celtics",
    homeTeamId: "1610612738",
    homeTeamScore: 116,
    awayTeam: "Toronto Raptors",
    awayTeamId: "1610612761",
    awayTeamScore: 102,
    result: "W"
  },
  {
    id: "0022300002",
    date: "2024-04-03",
    homeTeam: "Boston Celtics",
    homeTeamId: "1610612738", 
    homeTeamScore: 124,
    awayTeam: "Brooklyn Nets",
    awayTeamId: "1610612751",
    awayTeamScore: 112,
    result: "W"
  },
  {
    id: "0022300003",
    date: "2024-04-05",
    homeTeam: "Philadelphia 76ers",
    homeTeamId: "1610612755",
    homeTeamScore: 110,
    awayTeam: "Boston Celtics",
    awayTeamId: "1610612738",
    awayTeamScore: 98,
    result: "L"
  },
  {
    id: "0022300004",
    date: "2024-04-06",
    homeTeam: "Boston Celtics", 
    homeTeamId: "1610612738",
    homeTeamScore: 118,
    awayTeam: "New York Knicks",
    awayTeamId: "1610612752",
    awayTeamScore: 108,
    result: "W"
  },
  {
    id: "0022300005",
    date: "2024-04-07",
    homeTeam: "Milwaukee Bucks",
    homeTeamId: "1610612749",
    homeTeamScore: 120,
    awayTeam: "Boston Celtics",
    awayTeamId: "1610612738", 
    awayTeamScore: 115,
    result: "L"
  }
];

const mockTeamStats = {
  last5Games: {
    pointsPerGame: 114.2,
    reboundsPerGame: 45.8,
    assistsPerGame: 25.2,
    stealsPerGame: 8.6,
    blocksPerGame: 5.4,
    turnoversPerGame: 13.8,
    fieldGoalPercentage: 47.2,
    threePointPercentage: 37.9,
    freeThrowPercentage: 82.5
  }
};

const mockPlayerStats = [
  {
    id: "1627759",
    name: "Jayson Tatum",
    position: "F",
    jersey: "0",
    pointsPerGame: 27.6,
    reboundsPerGame: 8.2,
    assistsPerGame: 4.8,
    stealsPerGame: 1.4,
    blocksPerGame: 0.8,
    fieldGoalPercentage: 48.7,
    threePointPercentage: 38.2,
    freeThrowPercentage: 85.3
  },
  {
    id: "1628369",
    name: "Jaylen Brown",
    position: "F",
    jersey: "7",
    pointsPerGame: 25.3,
    reboundsPerGame: 6.4,
    assistsPerGame: 3.6,
    stealsPerGame: 1.2,
    blocksPerGame: 0.5,
    fieldGoalPercentage: 49.2,
    threePointPercentage: 36.9,
    freeThrowPercentage: 83.1
  },
  {
    id: "203935",
    name: "Kristaps Porzingis",
    position: "C",
    jersey: "8",
    pointsPerGame: 20.1,
    reboundsPerGame: 7.8,
    assistsPerGame: 1.9,
    stealsPerGame: 0.7,
    blocksPerGame: 2.2,
    fieldGoalPercentage: 52.1,
    threePointPercentage: 35.9,
    freeThrowPercentage: 86.5
  },
  {
    id: "202684",
    name: "Derrick White",
    position: "G",
    jersey: "9",
    pointsPerGame: 15.2,
    reboundsPerGame: 3.6,
    assistsPerGame: 5.3,
    stealsPerGame: 1.0,
    blocksPerGame: 0.9,
    fieldGoalPercentage: 46.8,
    threePointPercentage: 40.2,
    freeThrowPercentage: 89.1
  },
  {
    id: "1629684",
    name: "Payton Pritchard",
    position: "G",
    jersey: "11",
    pointsPerGame: 9.8,
    reboundsPerGame: 2.2,
    assistsPerGame: 3.5,
    stealsPerGame: 0.6,
    blocksPerGame: 0.1,
    fieldGoalPercentage: 45.2,
    threePointPercentage: 41.8,
    freeThrowPercentage: 89.6
  }
];

const TeamAnalysisPage = () => {
  const { teamId } = useParams<{ teamId: string }>()
  const [loading, setLoading] = useState(true)
  const [team, setTeam] = useState<any>(null)
  const [games, setGames] = useState<any[]>([])
  const [teamStats, setTeamStats] = useState<any>(null)
  const [playerStats, setPlayerStats] = useState<any[]>([])
  const { toast } = useToast()

  useEffect(() => {
    // In a real app, fetch data from API
    const loadTeamData = async () => {
      try {
        setLoading(true)
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        if (teamId && mockTeamData[teamId as keyof typeof mockTeamData]) {
          setTeam(mockTeamData[teamId as keyof typeof mockTeamData])
          setGames(mockGames)
          setTeamStats(mockTeamStats)
          setPlayerStats(mockPlayerStats)
        } else {
          toast({
            title: "Team not found",
            description: "The requested team could not be found.",
            variant: "destructive"
          })
        }
      } catch (error) {
        toast({
          title: "Error loading team data",
          description: "There was an error loading the team data. Please try again.",
          variant: "destructive"
        })
        console.error("Error loading team data:", error)
      } finally {
        setLoading(false)
      }
    }

    loadTeamData()
  }, [teamId, toast])

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Skeleton className="h-16 w-16 rounded-md" />
          <div className="space-y-2">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-4 w-32" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-32 rounded-md" />
          ))}
        </div>
        
        <Skeleton className="h-[400px] rounded-md" />
      </div>
    )
  }

  if (!team) {
    return <div>Team not found</div>
  }

  return (
    <div className="space-y-8">
      {/* Team Header */}
      <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
        <img 
          src={team.logo} 
          alt={`${team.name} logo`}
          className="h-24 w-24 object-contain"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://cdn.nba.com/logos/leagues/logo-nba.svg"
          }}
        />
        
        <div className="text-center sm:text-left">
          <h1 className="text-3xl font-bold">{team.name}</h1>
          <p className="text-muted-foreground">
            {team.city} • {team.conference}ern Conference • {team.division} Division
          </p>
          
          <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start">
            <Button asChild>
              <a href={`/report/${teamId}`}>
                Generate Report <FileText className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline">
              Full Season Stats <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard 
          title="Last 5 Games" 
          value={`${games.filter(g => g.result === 'W').length}-${games.filter(g => g.result === 'L').length}`}
          description={`${games.filter(g => g.result === 'W').length > games.filter(g => g.result === 'L').length ? 'Winning' : 'Losing'} streak`} 
          icon={<Calendar className="h-4 w-4" />} 
        />
        <StatCard 
          title="Points Per Game" 
          value={teamStats.last5Games.pointsPerGame.toFixed(1)} 
          description="Last 5 games average" 
          icon={<BarChart2 className="h-4 w-4" />} 
        />
        <StatCard 
          title="Field Goal %" 
          value={`${teamStats.last5Games.fieldGoalPercentage.toFixed(1)}%`} 
          description={`${teamStats.last5Games.threePointPercentage.toFixed(1)}% from three`} 
          icon={<BarChart2 className="h-4 w-4" />} 
        />
        <StatCard 
          title="Top Scorer" 
          value={playerStats[0]?.name.split(" ")[1] || "N/A"} 
          description={`${playerStats[0]?.pointsPerGame.toFixed(1) || "0"} PPG`} 
          icon={<Users className="h-4 w-4" />} 
        />
      </div>

      {/* Tabs for Different Data Views */}
      <Tabs defaultValue="games" className="w-full">
        <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto">
          <TabsTrigger value="games">Recent Games</TabsTrigger>
          <TabsTrigger value="team-stats">Team Stats</TabsTrigger>
          <TabsTrigger value="players">Players</TabsTrigger>
        </TabsList>
        
        <TabsContent value="games" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Last 5 Games</CardTitle>
            </CardHeader>
            <CardContent>
              <GameResultsList games={games} teamId={teamId || ""} />
            </CardContent>
            <CardFooter className="border-t pt-4">
              <Button variant="outline" className="w-full">
                View Full Schedule
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="team-stats" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Team Statistics - Last 5 Games</CardTitle>
            </CardHeader>
            <CardContent>
              <TeamStatsTable stats={teamStats.last5Games} />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="players" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Player Statistics - Last 5 Games</CardTitle>
            </CardHeader>
            <CardContent>
              <PlayerStatsList players={playerStats} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Generate Report CTA */}
      <div className="bg-muted rounded-lg p-6 text-center">
        <h3 className="text-xl font-semibold mb-2">Ready to generate a complete scouting report?</h3>
        <p className="text-muted-foreground mb-4">
          Get AI-powered insights on team tendencies, player performance, and strategic recommendations.
        </p>
        <Button size="lg" asChild>
          <a href={`/report/${teamId}`}>
            Generate Scouting Report <FileText className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </div>
  )
}

const StatCard = ({ title, value, description, icon }: { title: string, value: string, description: string, icon: React.ReactNode }) => {
  return (
    <Card className="stat-card">
      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-2">
          <span className="text-sm font-medium text-muted-foreground">{title}</span>
          <span className="bg-primary/10 rounded-full p-1">{icon}</span>
        </div>
        <div className="space-y-1">
          <p className="text-2xl font-bold">{value}</p>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default TeamAnalysisPage
