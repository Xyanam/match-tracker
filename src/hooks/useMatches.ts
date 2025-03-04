import { useQuery } from "@tanstack/react-query";

import { fetchMatches } from "@/services/matchService";

import { Match, MatchesResponse } from "@/types/match";

export const useMatches = () => {
  return useQuery<MatchesResponse, Error, Match[]>({
    queryKey: ["matches"],
    queryFn: fetchMatches,
    select: (data) => data.data.matches,
    retry: 2,
  });
};
