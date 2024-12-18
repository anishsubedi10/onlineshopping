import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCartApi } from "../../services/apidata";
import toast from "react-hot-toast";

export function useDeleteCart() {
  const queryClient = useQueryClient();

  const { isLoading: isDeletingItem, mutate: deleteCart } = useMutation({
    mutationFn: deleteCartApi,
    onSuccess: () => {
      toast.success("One item has been successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
    // onError: (err) => toast.error(err.message),
  });
  return { isDeletingItem, deleteCart };
}
