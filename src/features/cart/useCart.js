import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../services/apidata";

export function useCart() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });
  // console.log("from cart");
  // console.log(data);

  return { isLoading, error, data };
}
