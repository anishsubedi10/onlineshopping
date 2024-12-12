function CategoryLeft() {
  return (
    <div className="sticky top-20 mt-16 hidden h-fit w-fit md:mx-10 md:block lg:mx-20">
      <h1 className="mb-2 font-semibold sm:text-xl">Sizes</h1>
      <p className="mb-48 flex flex-col gap-2">
        <p>XXS</p>
        <p>XS</p>
        <p>S</p>
        <p>M</p>
        <p>L</p>
        <p>XL</p>
        <p>XXL</p>
      </p>
    </div>
  );
}

export default CategoryLeft;

export function CategoryLeftforSmall({ data }) {
  return (
    <div className="smallText flex items-center justify-around pb-2 md:hidden">
      <select name="size" id="size-select" className="rounded-md border p-2">
        <option value="Size">Size</option>
        <option value="XXS">XXS</option>
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
        <option value="XXL">XXL</option>
      </select>

      <p>{data?.length}</p>
    </div>
  );
}
