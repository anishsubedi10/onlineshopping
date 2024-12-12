import { useQuery } from "@tanstack/react-query";
import { getCategoryItem } from "../services/apidata";

export function useCategoryItem(category) {
  const { isLoading, data, error } = useQuery({
    queryKey: [`${category}`],
    queryFn: () => getCategoryItem(category),
  });
  return { isLoading, error, data };
}
