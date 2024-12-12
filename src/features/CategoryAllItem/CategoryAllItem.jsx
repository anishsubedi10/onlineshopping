import { useParams } from "react-router-dom";
import CategoryAll from "../../category/CategoryAll";
import { useCategoryItem } from "../../category/useCategoryItem";

function CategoryAllItem() {
  const { category } = useParams();

  const { isLoading, data, error } = useCategoryItem(category.toLowerCase());

  return <CategoryAll isLoading={isLoading} data={data} category={category} />;
}

export default CategoryAllItem;
