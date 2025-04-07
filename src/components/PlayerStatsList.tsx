
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Player {
  id: string;
  name: string;
  position: string;
  jersey: string;
  pointsPerGame: number;
  reboundsPerGame: number;
  assistsPerGame: number;
  stealsPerGame: number;
  blocksPerGame: number;
  fieldGoalPercentage: number;
  threePointPercentage: number;
  freeThrowPercentage: number;
}

interface PlayerStatsListProps {
  players: Player[];
}

const PlayerStatsList = ({ players }: PlayerStatsListProps) => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Player</TableHead>
            <TableHead className="text-right">PPG</TableHead>
            <TableHead className="text-right">RPG</TableHead>
            <TableHead className="text-right">APG</TableHead>
            <TableHead className="text-right">FG%</TableHead>
            <TableHead className="text-right">3PT%</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {players.map((player) => (
            <TableRow key={player.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={`https://cdn.nba.com/headshots/nba/latest/260x190/${player.id}.png`}
                      alt={player.name}
                    />
                    <AvatarFallback>
                      {player.name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{player.name}</p>
                    <p className="text-xs text-muted-foreground">{player.position} • #{player.jersey}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-right font-medium">{player.pointsPerGame.toFixed(1)}</TableCell>
              <TableCell className="text-right">{player.reboundsPerGame.toFixed(1)}</TableCell>
              <TableCell className="text-right">{player.assistsPerGame.toFixed(1)}</TableCell>
              <TableCell className="text-right">{player.fieldGoalPercentage.toFixed(1)}%</TableCell>
              <TableCell className="text-right">{player.threePointPercentage.toFixed(1)}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default PlayerStatsList
