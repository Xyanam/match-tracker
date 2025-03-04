import MatchPlayer from "./MatchPlayer";
import { Team } from "@/types/match";

type Props = {
  homeTeam: Team;
  awayTeam: Team;
};

const TeamPlayers = ({ homeTeam, awayTeam }: Props) => {
  return (
    <div className="flex justify-between items-center gap-8">
      <div className="flex flex-1/2 gap-3">
        {homeTeam.players.map((player) => (
          <MatchPlayer player={player} key={player.username} />
        ))}
      </div>
      <div className="flex flex-1/2 gap-3">
        {awayTeam.players.map((player) => (
          <MatchPlayer player={player} key={player.username} />
        ))}
      </div>
    </div>
  );
};

export default TeamPlayers;
