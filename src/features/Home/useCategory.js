import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../../services/apidata";

export function useCategory() {
  const {
    isLoading,
    data: category,
    error,
  } = useQuery({
    queryKey: ["category"],
    queryFn: getCategory,
  });
  return { isLoading, error, category };
}
