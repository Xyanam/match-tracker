import TeamPlayers from "@/components/Match/TeamPlayers";
import TeamStats from "@/components/Match/TeamStats";

import { Icon, MatchBadge } from "../ui";

import { Match } from "@/types/match";
import { useState } from "react";

interface Props {
  match: Match;
}

const MatchItem = ({ match }: Props) => {
  const { homeTeam, awayTeam } = match;

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div
      className="bg-card rounded-sm px-10 py-4 cursor-pointer relative"
      onClick={toggleOpen}
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-3.5 items-center">
          <Icon name="crown" />
          <h1 className="text-base font-semibold">{homeTeam.name}</h1>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <span className="text-xl font-semibold">
            {match.homeScore} : {match.awayScore}
          </span>
          <MatchBadge status={match.status} />
        </div>
        <div className="flex gap-3.5 items-center">
          <h1 className="text-base font-semibold">{awayTeam.name}</h1>
          <Icon name="crown" />
        </div>
      </div>

      <div
        className={`transition-all duration-500 ease-linear ${
          isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="mt-11">
          <TeamPlayers homeTeam={homeTeam} awayTeam={awayTeam} />
          <div className="flex justify-between gap-8 mt-2">
            <TeamStats team={homeTeam} />
            <TeamStats team={awayTeam} />
          </div>
        </div>
      </div>

      <Icon
        name="chevron"
        className={`absolute top-9 right-2 transition-transform ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </div>
  );
};

export default MatchItem;
