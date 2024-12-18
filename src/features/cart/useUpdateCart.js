import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCartItem } from "../../services/apidata";

import toast from "react-hot-toast";

export function useUpdateCart() {
  const queryClient = useQueryClient();
  const { mutate: updateCart, isLoading: isUpdating } = useMutation({
    mutationFn: updateCartItem,
    onSuccess: () => {
      toast.success("Item is Successfully updated");
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
  return { updateCart, isUpdating };
}
