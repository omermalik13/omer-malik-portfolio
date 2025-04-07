
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface TeamStatsProps {
  stats: {
    pointsPerGame: number;
    reboundsPerGame: number;
    assistsPerGame: number;
    stealsPerGame: number;
    blocksPerGame: number;
    turnoversPerGame: number;
    fieldGoalPercentage: number;
    threePointPercentage: number;
    freeThrowPercentage: number;
  };
}

const TeamStatsTable = ({ stats }: TeamStatsProps) => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Stat Category</TableHead>
            <TableHead className="text-right">Average</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Points Per Game</TableCell>
            <TableCell className="text-right font-medium">{stats.pointsPerGame.toFixed(1)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Rebounds Per Game</TableCell>
            <TableCell className="text-right font-medium">{stats.reboundsPerGame.toFixed(1)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Assists Per Game</TableCell>
            <TableCell className="text-right font-medium">{stats.assistsPerGame.toFixed(1)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Steals Per Game</TableCell>
            <TableCell className="text-right font-medium">{stats.stealsPerGame.toFixed(1)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Blocks Per Game</TableCell>
            <TableCell className="text-right font-medium">{stats.blocksPerGame.toFixed(1)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Turnovers Per Game</TableCell>
            <TableCell className="text-right font-medium">{stats.turnoversPerGame.toFixed(1)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Field Goal Percentage</TableCell>
            <TableCell className="text-right font-medium">{stats.fieldGoalPercentage.toFixed(1)}%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Three-Point Percentage</TableCell>
            <TableCell className="text-right font-medium">{stats.threePointPercentage.toFixed(1)}%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Free Throw Percentage</TableCell>
            <TableCell className="text-right font-medium">{stats.freeThrowPercentage.toFixed(1)}%</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export default TeamStatsTable
