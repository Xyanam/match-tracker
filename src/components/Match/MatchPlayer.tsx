import { Player } from "@/types/match";

import PlayerAvatar from "@/assets/images/avatar.png";

type Props = {
  player: Player;
};

const MatchPlayer = ({ player }: Props) => {
  return (
    <div className="bg-muted flex justify-between px-3 py-4 w-full rounded-sm">
      <div className="flex items-center gap-2">
        <img src={PlayerAvatar} alt="Avatar" />
        <p className="text-base font-semibold">{player.username}</p>
      </div>
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
