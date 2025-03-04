import MatchBadge from "./ui/MatchBadge";

import { Match } from "@/types/match";

interface Props {
  match: Match;
}

const MatchItem = ({ match }: Props) => {
  const { homeTeam, awayTeam } = match;

  return (
    <div className="bg-muted rounded-sm px-10 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-base font-semibold">{homeTeam.name}</h1>
        <div className="flex flex-col gap-2 items-center">
          <span className="text-xl font-semibold">
            {match.homeScore} : {match.awayScore}
          </span>
          <MatchBadge status={match.status} />
        </div>
        <h1 className="text-base font-semibold">{awayTeam.name}</h1>
      </div>
    </div>
  );
};

export default MatchItem;
