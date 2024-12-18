import { useState } from "react";

function CategoryLeft({ setSize }) {
  const sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];
  const [selectedSize, setSelectedSize] = useState("");

  const handleSizeClick = (size) => {
    setSelectedSize(size);
    setSize?.(size.toLowerCase());
  };

  return (
    <div className="sticky top-20 mt-4 hidden h-fit w-fit md:mx-10 md:block lg:mx-20">
      <h1 className="mb-2 font-semibold sm:text-xl">Sizes</h1>
      <div className="mb-48 flex flex-col gap-2">
        {sizes.map((size) => (
          <p
            key={size}
            onClick={() => handleSizeClick(size)}
            className={`cursor-pointer rounded-md p-2 ${
              selectedSize === size
                ? "bg-blue-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {size}
          </p>
        ))}
      </div>
    </div>
  );
}

export default CategoryLeft;

export function CategoryLeftforSmall({ data, setSize }) {
  const sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];

  return (
    <div className="smallText flex items-center justify-around pb-2 md:hidden">
      <select
        name="size"
        id="size-select"
        className="rounded-md border p-2"
        onChange={(e) => setSize?.(e.target.value.toLowerCase())}
      >
        <option value="">Size</option>
        {sizes.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
      <p>{data?.length ? `${data.length} items` : ""}</p>
    </div>
  );
}
