import Spinner from "../ui/Spinner";
import CategoryItems from "./CategoryItems";
import CategoryLeft, { CategoryLeftforSmall } from "./CategoryLeft";
import CategoryUp from "./CategoryUp";

function CategoryAll({ data, isLoading, category }) {
  return (
    <div>
      <CategoryUp data={data} category={category} />

      <CategoryLeftforSmall data={data} />
      <div className="flex">
        <CategoryLeft />

        {isLoading ? (
          <div className="mt-6 flex flex-1 justify-center">
            <Spinner />
          </div>
        ) : (
          <CategoryItems data={data} />
        )}
      </div>
    </div>
  );
}

export default CategoryAll;
