import { useMatches } from "@/hooks/useMatches";
import MatchItem from "./MatchItem";
import { Loader } from "./ui";
import EmptyList from "./EmptyList";

const MatchList = () => {
  const { data, isLoading } = useMatches();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center mt-10">
        <Loader />
      </div>
    );
  }

  if (!data?.length) return <EmptyList />;

  return (
    <div className="mt-5 flex flex-col gap-3">
      {data?.map((match) => (
        <MatchItem match={match} key={match.title} />
      ))}
    </div>
  );
};

export default MatchList;
