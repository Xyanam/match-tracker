import { useMatches } from "@/hooks/useMatches";
import MatchItem from "./MatchItem";

const MatchList = () => {
  const { data } = useMatches();

  return (
    <div className="mt-5 flex flex-col gap-3">
      {data?.map((match) => (
        <MatchItem match={match} key={match.title} />
      ))}
    </div>
  );
};

export default MatchList;
