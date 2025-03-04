import { MatchesResponse } from "@/types/match";
import config from "@/config/config";

const baseUrl = config.API_BASE_URL;

export const fetchMatches = async (): Promise<MatchesResponse> => {
  const res = await fetch(`${baseUrl}/fronttemp`);

  if (!res.ok) throw new Error("Ошибка загрузки данных");

  return res.json();
};
