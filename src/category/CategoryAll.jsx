import { useState, useMemo } from "react";
import Spinner from "../ui/Spinner";
import CategoryItems from "./CategoryItems";
import CategoryLeft, { CategoryLeftforSmall } from "./CategoryLeft";
import CategoryUp from "./CategoryUp";

function CategoryAll({ data, isLoading, category }) {
  const [size, setSize] = useState("");

  const filteredData = useMemo(() => {
    return size ? data.filter((d) => d.size === size) : data;
  }, [size, data]);

  return (
    <div>
      <CategoryUp data={filteredData} category={category} />

      <CategoryLeftforSmall data={filteredData} setSize={setSize} />
      <div className="flex">
        <CategoryLeft setSize={setSize} />

        {isLoading ? (
          <div className="mt-6 flex flex-1 justify-center">
            <Spinner />
          </div>
        ) : (
          <CategoryItems data={filteredData} />
        )}
      </div>
    </div>
  );
}

export default CategoryAll;
