import CategoryAll from "../../category/CategoryAll";
import { useFavorite } from "./useFavorite";

function Favorite() {
  const { isLoading, data } = useFavorite();

  return (
    <CategoryAll
      data={data?.map((d) => d.allitems)}
      isLoading={isLoading}
      category={"Favorite"}
    />
  );
}

export default Favorite;
