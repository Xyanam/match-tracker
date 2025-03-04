import { Player } from "@/types/match";

type Props = {
  player: Player;
};

const MatchPlayer = ({ player }: Props) => {
  return (
    <div className="bg-muted flex justify-between px-6 py-4 max-w-72 w-full rounded-sm">
      <p className="text-base font-semibold">{player.username}</p>
      <p className="text-[#FAFAFA66] text-sm flex justify-center items-center gap-1">
        Убийств:{" "}
        <span className="text-white text-base font-semibold">
          {player.kills}
        </span>
      </p>
    </div>
  );
};

export default MatchPlayer;
