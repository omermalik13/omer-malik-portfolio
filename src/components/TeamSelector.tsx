
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Check, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

// In a real application, this would come from an API
const teams = [
  { value: "1610612738", label: "Boston Celtics" },
  { value: "1610612751", label: "Brooklyn Nets" },
  { value: "1610612752", label: "New York Knicks" },
  { value: "1610612755", label: "Philadelphia 76ers" },
  { value: "1610612761", label: "Toronto Raptors" },
  { value: "1610612741", label: "Chicago Bulls" },
  { value: "1610612739", label: "Cleveland Cavaliers" },
  { value: "1610612765", label: "Detroit Pistons" },
  { value: "1610612754", label: "Indiana Pacers" },
  { value: "1610612749", label: "Milwaukee Bucks" },
  { value: "1610612737", label: "Atlanta Hawks" },
  { value: "1610612766", label: "Charlotte Hornets" },
  { value: "1610612748", label: "Miami Heat" },
  { value: "1610612753", label: "Orlando Magic" },
  { value: "1610612764", label: "Washington Wizards" },
  { value: "1610612743", label: "Denver Nuggets" },
  { value: "1610612750", label: "Minnesota Timberwolves" },
  { value: "1610612760", label: "Oklahoma City Thunder" },
  { value: "1610612757", label: "Portland Trail Blazers" },
  { value: "1610612762", label: "Utah Jazz" },
  { value: "1610612744", label: "Golden State Warriors" },
  { value: "1610612746", label: "LA Clippers" },
  { value: "1610612747", label: "Los Angeles Lakers" },
  { value: "1610612756", label: "Phoenix Suns" },
  { value: "1610612758", label: "Sacramento Kings" },
  { value: "1610612742", label: "Dallas Mavericks" },
  { value: "1610612745", label: "Houston Rockets" },
  { value: "1610612763", label: "Memphis Grizzlies" },
  { value: "1610612740", label: "New Orleans Pelicans" },
  { value: "1610612759", label: "San Antonio Spurs" },
]

const TeamSelector = () => {
  const [open, setOpen] = useState(false)
  const [selectedTeam, setSelectedTeam] = useState<string>("")
  const navigate = useNavigate()

  const handleSelectTeam = (teamId: string) => {
    setSelectedTeam(teamId)
    setOpen(false)
    navigate(`/team/${teamId}`)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="lg" className="justify-between">
          {selectedTeam ? teams.find((team) => team.value === selectedTeam)?.label : "Select a Team"}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search teams..." />
          <CommandEmpty>No team found.</CommandEmpty>
          <CommandGroup className="max-h-[300px] overflow-y-auto">
            {teams.map((team) => (
              <CommandItem
                key={team.value}
                value={team.value}
                onSelect={() => handleSelectTeam(team.value)}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    selectedTeam === team.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {team.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default TeamSelector
