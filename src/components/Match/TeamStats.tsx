import { Team } from "@/types/match";

type Props = {
  team: Team;
};

const TeamStats = ({ team }: Props) => {
  return (
    <div className="flex flex-1/2 bg-muted py-4 px-14 rounded-sm">
      <div className="flex justify-between items-center w-full">
        <p className="text-[#FAFAFA66] text-sm flex justify-center items-center gap-1">
          Points: <span className="text-white text-base">+{team.points}</span>
        </p>
        <p className="text-[#FAFAFA66] text-sm flex justify-center items-center gap-1">
          Место: <span className="text-white text-base">{team.place}</span>
        </p>
        <p className="text-[#FAFAFA66] text-sm flex justify-center items-center gap-1">
          Всего убийств:{" "}
          <span className="text-white text-base">{team.total_kills}</span>
        </p>
      </div>
    </div>
  );
};

export default TeamStats;
