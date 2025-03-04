import { useMatches } from "@/hooks/useMatches";

import MatchList from "./MatchList";

import { Alert, Button } from "./ui";

const MatchTracker = () => {
  const { refetch, isLoading, error } = useMatches();

  return (
    <div className="px-11 py-12">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold italic">Match Tracker</h1>
        <div className="flex gap-4">
          {error && <Alert text={error.message} type="error" />}
          <Button
            trailingIcon="refresh"
            onClick={() => refetch()}
            disabled={isLoading}
            animationClass="rotate-360"
            animationDuration="duration-1000"
          >
            Обновить
          </Button>
        </div>
      </div>
      <MatchList />
    </div>
  );
};

export default MatchTracker;
