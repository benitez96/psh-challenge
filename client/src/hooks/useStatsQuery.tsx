import { useQuery } from "@tanstack/react-query";
import { api } from "../api/api";
import { Stat } from "../types";


const getStats = async() => {
  const { data } = await api.get<Stat[]>("/stats/");
  return data;
}

export const useStatsQuery = () => useQuery(
    ['stats'],
    getStats,
    {
      refetchInterval: 1000 * 10 // 10 seconds
    }
  )