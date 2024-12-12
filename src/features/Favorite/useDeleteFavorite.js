import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFavoriteApi } from "../../services/apidata";
// import toast from "react-hot-toast";

// import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";

export function useDeleteFavorite() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteFavorite } = useMutation({
    // mutationFn: (id) => deleteCabin(id),
    mutationFn: deleteFavoriteApi,
    onSuccess: () => {
      // toast.success("cabin successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["favorite"],
      });
    },
    // onError: (err) => toast.error(err.message),
  });
  return { isDeleting, deleteFavorite };
}
