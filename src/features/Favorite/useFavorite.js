import { useQuery } from "@tanstack/react-query";
import { getFavorite } from "../../services/apidata";

export function useFavorite() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["favorite"],
    queryFn: getFavorite,
  });
  // console.log("from useFavorite");
  // console.log(data);

  return { isLoading, error, data };
}
