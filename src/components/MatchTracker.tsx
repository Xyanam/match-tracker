import { useMatches } from "@/hooks/useMatches";
import MatchList from "./MatchList";
import Button from "./ui/Button";

const MatchTracker = () => {
  const { refetch } = useMatches();

  return (
    <div className="px-11 py-12">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold italic">Match Tracker</h1>
        <div className="flex gap-4">
          <Button trailingIcon="refresh" onClick={() => refetch()}>
            Обновить
          </Button>
        </div>
      </div>
      <MatchList />
    </div>
  );
};

export default MatchTracker;
