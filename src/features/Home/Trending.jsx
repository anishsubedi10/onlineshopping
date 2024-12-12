// import ShopByCateItems from "./ShopByCateItems";
import CategoryItems from "../../category/CategoryItems";
import { useCategoryItem } from "../../category/useCategoryItem";
// import { trendingData } from "../../data/CateDate";

function Trending() {
  const { isLoading, data, error } = useCategoryItem("pants"); //change this tis is not real

  return (
    <div className="p-6">
      <h1 className="bigText mx-auto mb-7 mt-2 w-fit">Trending</h1>

      <CategoryItems data={data} />
    </div>
  );
}

export default Trending;
