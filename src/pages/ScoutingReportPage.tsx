
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { FileText, Download, ArrowLeft, BarChart2, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card" 
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { useToast } from "@/hooks/use-toast"
import ScoutingReport from "@/components/ScoutingReport"

// Mock team data - in a real app, this would come from an API
const mockTeamData = {
  "1610612738": {
    id: "1610612738",
    name: "Boston Celtics",
    abbreviation: "BOS",
    city: "Boston",
    conference: "East",
    division: "Atlantic",
    logo: "https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg"
  }
}

// Mock scouting report - in a real app, this would be generated from the API/LLM
const mockScoutingReport = {
  title: "Boston Celtics Scouting Report",
  date: "2024-04-07",
  generatedById: "mistralai/Mistral-7B-Instruct-v0.2",
  sections: [
    {
      title: "Team Tendencies",
      content: `
## Offensive Patterns
* High-volume three-point shooting team (37.9% on 38.4 attempts per game)
* Strong ball movement (25.2 assists per game)
* Elite in transition scoring (14.6 fast break points per game)
* Relies heavily on creating mismatches and exploiting them
* Tendency to go through scoring droughts when three-pointers aren't falling

## Defensive Patterns
* Versatile defenders who switch frequently on screens
* Strong perimeter defense limiting opponent three-point attempts
* Excellent at forcing turnovers (8.6 steals per game)
* Occasional vulnerability in interior defense
* Strength in defensive rebounding limiting second-chance opportunities
      `
    },
    {
      title: "Key Players",
      content: `
## Jayson Tatum (F, #0)
* Leading scorer averaging 27.6 PPG
* Three-level scorer with strong isolation game
* Favors step-back jumpers and drives to his right
* Can be forced into difficult shots with physicality
* Capable playmaker when double-teamed (4.8 APG)

## Jaylen Brown (F, #7)
* Dynamic slasher and finisher (25.3 PPG)
* Improved ball-handler and mid-range shooter
* Explosive in transition
* Can be turnover-prone when pressured
* Streaky three-point shooter (36.9%)

## Kristaps Porzingis (C, #8)
* Stretch big who creates spacing (20.1 PPG)
* Elite rim protector (2.2 BPG)
* Pick-and-pop threat from beyond the arc
* Can be exploited in pick-and-roll defense
* Injury history has limited minutes in some games
      `
    },
    {
      title: "Strengths and Weaknesses",
      content: `
## Strengths
* Elite three-point shooting team
* Multiple playmakers and scorers
* Versatile defenders at multiple positions
* Strong in transition offense
* Excellent free throw shooting team (82.5%)
* Championship experience and poise in close games

## Weaknesses
* Occasional over-reliance on jump shots
* Bench depth can be inconsistent
* Vulnerable to physical play in the paint
* Can be turnover-prone against aggressive defenses
* Tendency to have stretches of stagnant offense
      `
    },
    {
      title: "Defensive Strategies",
      content: `
## Recommended Approach
* Force mid-range jumpers rather than threes or rim attempts
* Physical defense on Tatum to disrupt his rhythm
* Trap Brown in the corners to force turnovers
* Make Porzingis defend in space on pick-and-rolls
* Limit transition opportunities by emphasizing floor balance
* Push the pace on offense to test their defensive transition
* Target weaker defenders in pick-and-roll actions
* Control defensive glass to prevent second-chance points
      `
    },
    {
      title: "Offensive Strategies",
      content: `
## Recommended Approach
* Attack the paint consistently to draw fouls and create open shots
* Use pick-and-roll to target Porzingis in space
* Push pace after Celtics missed threes to attack before defense sets
* Utilize off-ball screens to free shooters from their switching defense
* Attack closeouts as Celtics defenders tend to be aggressive
* Create mismatches through screening actions
* Use motion offense to combat their switching defensive scheme
* Emphasize offensive rebounding - they can be vulnerable on the glass
      `
    }
  ]
};

const ScoutingReportPage = () => {
  const { teamId } = useParams<{ teamId: string }>()
  const [loading, setLoading] = useState(true)
  const [generating, setGenerating] = useState(false)
  const [team, setTeam] = useState<any>(null)
  const [report, setReport] = useState<any>(null)
  const { toast } = useToast()

  useEffect(() => {
    // In a real app, fetch team data from API
    const loadTeamData = async () => {
      try {
        setLoading(true)
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800))
        
        if (teamId && mockTeamData[teamId as keyof typeof mockTeamData]) {
          setTeam(mockTeamData[teamId as keyof typeof mockTeamData])
          // Check if we have a cached report
          setReport(null) // Initially no report until generated
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

  const handleGenerateReport = async () => {
    try {
      setGenerating(true)
      
      // Simulate API call to generate report
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      // Set mock report data
      setReport(mockScoutingReport)
      
      toast({
        title: "Report Generated",
        description: "Your scouting report has been successfully generated.",
      })
    } catch (error) {
      toast({
        title: "Error generating report",
        description: "There was an error generating the scouting report. Please try again.",
        variant: "destructive"
      })
      console.error("Error generating report:", error)
    } finally {
      setGenerating(false)
    }
  }

  const handleDownloadReport = () => {
    // In a real app, this would generate a PDF
    toast({
      title: "Download Started",
      description: "Your PDF is being prepared for download.",
    })
    
    // Simulate download delay
    setTimeout(() => {
      toast({
        title: "Download Complete",
        description: "Your scouting report PDF has been downloaded.",
      })
    }, 2000)
  }

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
        
        <Skeleton className="h-[600px] rounded-md" />
      </div>
    )
  }

  if (!team) {
    return <div>Team not found</div>
  }

  return (
    <div className="space-y-6">
      {/* Header with Team Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to={`/team/${teamId}`} className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Team
          </Link>
        </div>
        
        {report && (
          <Button 
            variant="outline"
            onClick={handleDownloadReport}
          >
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        )}
      </div>
      
      {/* Team Header */}
      <div className="flex items-center gap-4">
        <img 
          src={team.logo} 
          alt={`${team.name} logo`}
          className="h-16 w-16 object-contain"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://cdn.nba.com/logos/leagues/logo-nba.svg"
          }}
        />
        <div>
          <h1 className="text-3xl font-bold">{team.name}</h1>
          <p className="text-muted-foreground">
            Scouting Report • {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
      
      {/* Report Generation Section */}
      {!report && !generating && (
        <Card>
          <CardHeader>
            <CardTitle>Generate Scouting Report</CardTitle>
            <CardDescription>
              Create a comprehensive AI-powered scouting report for the {team.name} based on their last 5 games.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Alert>
                <BarChart2 className="h-4 w-4" />
                <AlertTitle>Based on Recent Performance</AlertTitle>
                <AlertDescription>
                  This report will analyze the last 5 games to identify strengths, weaknesses, and strategic recommendations.
                </AlertDescription>
              </Alert>
              
              <Button
                size="lg"
                className="w-full"
                onClick={handleGenerateReport}
              >
                <FileText className="mr-2 h-4 w-4" />
                Generate Scouting Report
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
      
      {/* Loading State */}
      {generating && (
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center justify-center space-y-4 py-8">
              <div className="animate-spin">
                <Loader2 className="h-8 w-8" />
              </div>
              <div className="text-center">
                <p className="text-xl font-semibold">Generating Report</p>
                <p className="text-muted-foreground mt-2">
                  Analyzing recent games, player performances, and identifying patterns...
                </p>
              </div>
              <div className="w-full max-w-xs mt-4">
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary animate-pulse" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
      
      {/* Generated Report */}
      {report && (
        <div className="report-container">
          <ScoutingReport report={report} />
        </div>
      )}
    </div>
  )
}

export default ScoutingReportPage
