import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createFavoriteItem } from "../../services/apidata";
// import toast from "react-hot-toast";

export function useCreateFavorite() {
  const queryClient = useQueryClient();

  const { mutate: createFavorite, isLoading: isCreating } = useMutation({
    mutationFn: createFavoriteItem,
    onSuccess: () => {
      // toast.success("Favorite Successfully created");
      queryClient.invalidateQueries({ queryKey: ["favorite"] });
    },
    // onError: (err) => toast.error(err.message),
  });
  return { isCreating, createFavorite };
}
