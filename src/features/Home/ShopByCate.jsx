import ShopByCateItems from "./ShopByCateItems";
// import { cateData } from "../../data/CateDate";
import { useCategory } from "./useCategory";

function ShopByCate() {
  const { category } = useCategory();
  return (
    <div className="mx-10">
      <h1 className="bigText mx-auto mb-7 w-fit text-center">
        Shop by Category
      </h1>

      <ul className="auto-fit grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        <ShopByCateItems data={category} />
      </ul>
    </div>
  );
}

export default ShopByCate;
