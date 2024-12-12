import { useQuery } from "@tanstack/react-query";
import { getNewArrival } from "../services/apidata";

export function useNewArrival() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["newArrival"],
    queryFn: getNewArrival,
  });

  return { isLoading, error, data };
}
