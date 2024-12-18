import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

import { useParams } from "react-router-dom";
import { useCategoryItem } from "../category/useCategoryItem";
import { useState } from "react";
import { useFavorite } from "../features/Favorite/useFavorite";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useCreateFavorite } from "../features/Favorite/useCreateFavorite";
import { useDeleteFavorite } from "../features/Favorite/useDeleteFavorite";
import { CiLocationOn } from "react-icons/ci";
import { FaHandHoldingUsd } from "react-icons/fa";
import { useCreateCart } from "../features/cart/useCreateCart";
import toast from "react-hot-toast";

// import PageNotFound from "../ui/PageNotFound";

const imageData = [
  {
    id: 1,
    url: "https://srsjhagxcstyzprahbst.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg",
  },
  {
    id: 2,
    url: "https://srsjhagxcstyzprahbst.supabase.co/storage/v1/object/public/cabin-images/cabin-002.jpg",
  },
  {
    id: 3,
    url: "https://srsjhagxcstyzprahbst.supabase.co/storage/v1/object/public/cabin-images/cabin-003.jpg",
  },
  {
    id: 4,
    url: "https://srsjhagxcstyzprahbst.supabase.co/storage/v1/object/public/cabin-images/cabin-004.jpg",
  },
];

function Items() {
  const sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL"]; //yo database bata liyaune
  const colors = ["green", "yellow", "red", "black"];

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setquantity] = useState(1);

  function handleDecreaseQuantity() {
    if (quantity > 1) setquantity(quantity - 1);
  }
  function handleIncreaseQuantity() {
    setquantity(quantity + 1);
  }
  // ----------------------------------------------

  const { itemCategory, itemId } = useParams();

  const { isLoading, data, error } = useCategoryItem(
    itemCategory.toLowerCase(),
  );

  const [imgnumber, setImagenumber] = useState(0);

  const item = data?.find((item) => item.id.toString() === itemId);

  const handlePrevious = () => {
    setImagenumber((prevNumber) =>
      prevNumber === 0 ? imageData.length - 1 : prevNumber - 1,
    );
  };

  const handleNext = () => {
    setImagenumber((nextNumber) =>
      nextNumber === imageData.length - 1 ? 0 : nextNumber + 1,
    );
  };

  const OnclickPhoto = (i) => {
    setImagenumber(i);
  };

  // ------------------------------------------
  const { isCreating, createFavorite } = useCreateFavorite();
  const { isDeleting, deleteFavorite } = useDeleteFavorite();

  function addItemOnFavorite(id) {
    createFavorite(id);
  }
  function deleteItemOnFavorite(id) {
    deleteFavorite(id);
  }
  const { data: favoriteData } = useFavorite();

  const product = favoriteData?.map((d) => d.allitems);

  // -------------------------
  const { createCart, isCreating: isCreatingCart } = useCreateCart();
  function addItemOnCart(id) {
    if (selectedSize && selectedColor) {
      const cartItem = {
        product_id: id,
        size: selectedSize,
        color: selectedColor,
        quantity: quantity,
      };
      createCart(cartItem);
    } else {
      toast.error("Please select color and size");
    }
  }

  return (
    <div>
      {isLoading ? (
        <p className="h-[25vh]">Loading...</p>
      ) : item ? (
        <nav className="mx-auto my-10 flex w-fit flex-col gap-4 px-5 esf:flex-row esf:gap-10">
          <div className="flex flex-row justify-center gap-3 esf:flex-col esf:justify-start">
            {imageData.map((d, i) => (
              <img
                key={d.id}
                className="h-20 w-14 cursor-pointer"
                src={d.url}
                alt=""
                onClick={() => OnclickPhoto(i)}
              />
            ))}
          </div>

          {/* <div className="relative h-[30rem] w-[20rem] sm:h-[40rem] sm:w-[30rem]"> */}
          <div className="relative h-[25rem] w-[20rem] ff:h-[30rem] ff:w-[25rem] ftf:h-[40rem] ftf:w-[30rem]">
            <img
              // className="h-[30rem] w-[20rem] sm:h-[40rem] sm:w-[30rem]"
              className="h-[25rem] w-[20rem] ff:h-[30rem] ff:w-[25rem] ftf:h-[40rem] ftf:w-[30rem]"
              src={imageData[imgnumber].url}
              alt=""
            />
            <p className="absolute top-[50%] flex w-full justify-between px-3 text-white">
              <FaChevronLeft
                className="size-10 cursor-pointer"
                onClick={handlePrevious}
              />
              <FaChevronRight
                className="size-10 cursor-pointer"
                onClick={handleNext}
              />
            </p>
          </div>
          <div className="mx-auto flex max-w-96 flex-col gap-4 esf:pt-10">
            <div className="">
              <p className="bigText mb-2">{item.description}</p>
              <p className="font-bold">Rs. {item.price}</p>
              <p className="text-gray-500">
                <span className="line-through">Rs. {item.originalPrice} </span>{" "}
                -{item.discountPercent}%
              </p>
            </div>

            <SizesAndColor
              type="color"
              values={colors}
              selected={selectedColor}
              setSelected={setSelectedColor}
            />
            <SizesAndColor
              type="size"
              values={sizes}
              selected={selectedSize}
              setSelected={setSelectedSize}
            />

            <div className="mb-7 flex items-center">
              <p>Quantity:</p>
              <p className="ml-4 flex gap-4 text-2xl">
                <span
                  onClick={handleDecreaseQuantity}
                  className="cursor-pointer"
                >
                  -
                </span>{" "}
                <span>{quantity}</span>
                <span
                  onClick={handleIncreaseQuantity}
                  className="cursor-pointer"
                >
                  +
                </span>
              </p>
            </div>

            <div className="flex items-center gap-10">
              <button
                className="w-40 rounded-md bg-green-600 p-2 text-white transition-all duration-200 hover:bg-green-700"
                onClick={() => addItemOnCart(item.id)}
              >
                Add to Cart
              </button>

              <p>
                {product?.some((p) => p && p.id === item.id) ? (
                  <span
                    onClick={() => deleteItemOnFavorite(item.id)}
                    className="flex items-center justify-center rounded-full bg-pink-500 p-[0.4rem] text-white"
                  >
                    <MdFavorite className="cursor-pointer" />
                  </span>
                ) : (
                  <MdFavoriteBorder
                    className="size-7 cursor-pointer text-gray-300"
                    onClick={() => addItemOnFavorite(item.id)}
                  />
                )}
              </p>
            </div>
            <div className="mt-7">
              <p className="font-semibold">Delivery Option</p>
              <p className="flex items-center text-base text-slate-600">
                <CiLocationOn style={{ fontSize: "1.3rem" }} />
                <span className="my-4 ml-1">Inaruwa-3,Sunsari</span>
              </p>

              <p className="flex items-center text-base text-slate-600">
                <FaHandHoldingUsd style={{ fontSize: "1.3rem" }} />
                <span className="ml-1">Cash on Delivery Available</span>
              </p>
            </div>
          </div>
        </nav>
      ) : (
        // <PageNotFound />
        <p className="m-auto mt-10 h-[30vh] w-fit text-xl font-bold">
          This item is not available any more
        </p>
      )}
    </div>
  );
}

export default Items;

function SizesAndColor({ type, values, selected, setSelected }) {
  const handlesizesAndcolorClick = (type, value) => {
    if (type === "size") {
      setSelected(selected === value ? "" : value);
    } else if (type === "color") {
      setSelected(selected === value ? "" : value);
    }
  };

  return (
    <div className="grid max-w-96 grid-cols-[auto_1fr] gap-x-2">
      <p className="pt-2">{type}:</p>
      <div className="flex flex-wrap gap-4">
        {values.map((value) => (
          <p
            key={value}
            onClick={() => handlesizesAndcolorClick(`${type}`, value)}
            className={`cursor-pointer rounded-md p-2 ${
              selected === value
                ? "bg-green-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {value}
          </p>
        ))}
      </div>
    </div>
  );
}
