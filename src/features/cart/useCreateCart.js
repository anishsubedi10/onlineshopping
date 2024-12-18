import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCartItem } from "../../services/apidata";
import toast from "react-hot-toast";

export function useCreateCart() {
  const queryClient = useQueryClient();
  const { mutate: createCart, isLoading: isCreating } = useMutation({
    mutationFn: createCartItem,
    onSuccess: () => {
      toast.success("Item is Successfully added");
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
  return { createCart, isCreating };
}
