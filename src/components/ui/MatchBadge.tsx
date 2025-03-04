import { MatchStatus } from "@/types/match";

enum MatchStatusEnum {
  Scheduled = "Scheduled",
  Ongoing = "Ongoing",
  Finished = "Finished",
}

interface MatchBadgeProps {
  status: MatchStatus;
}

const MatchBadge = ({ status }: MatchBadgeProps) => {
  let badgeText = "";
  let badgeColor = "";

  switch (status) {
    case MatchStatusEnum.Finished:
      badgeText = "Finished";
      badgeColor = "bg-destructive";
      break;
    case MatchStatusEnum.Ongoing:
      badgeText = "Live";
      badgeColor = "bg-success";
      break;
    case MatchStatusEnum.Scheduled:
      badgeText = "Match Preparing";
      badgeColor = "bg-warning";
      break;
    default:
      badgeText = "Unknown";
      badgeColor = "bg-gray-500";
  }

  return (
    <span
      className={`${badgeColor} text-white py-1 px-3 rounded-sm min-w-24 flex justify-center items-center`}
    >
      {badgeText}
    </span>
  );
};

export default MatchBadge;
