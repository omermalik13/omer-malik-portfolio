
import { format } from "date-fns/format"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Game {
  id: string;
  date: string;
  homeTeam: string;
  homeTeamId: string;
  homeTeamScore: number;
  awayTeam: string;
  awayTeamId: string;
  awayTeamScore: number;
  result: string;
}

interface GameResultsListProps {
  games: Game[];
  teamId: string;
}

const GameResultsList = ({ games, teamId }: GameResultsListProps) => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Matchup</TableHead>
            <TableHead>Score</TableHead>
            <TableHead className="text-right">Result</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {games.map((game) => {
            const isHomeTeam = game.homeTeamId === teamId
            const opponent = isHomeTeam ? game.awayTeam : game.homeTeam
            const locationPrefix = isHomeTeam ? "vs" : "@"
            
            return (
              <TableRow key={game.id}>
                <TableCell className="font-medium">
                  {format(new Date(game.date), "MMM d, yyyy")}
                </TableCell>
                <TableCell>{locationPrefix} {opponent}</TableCell>
                <TableCell>
                  {isHomeTeam 
                    ? `${game.homeTeamScore}-${game.awayTeamScore}`
                    : `${game.awayTeamScore}-${game.homeTeamScore}`
                  }
                </TableCell>
                <TableCell className="text-right">
                  <Badge variant={game.result === "W" ? "default" : "outline"}>
                    {game.result}
                  </Badge>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}

export default GameResultsList
