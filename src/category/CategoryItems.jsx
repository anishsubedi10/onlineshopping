import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useFavorite } from "../features/Favorite/useFavorite";
import { useCreateFavorite } from "../features/Favorite/useCreateFavorite";
import { useDeleteFavorite } from "../features/Favorite/useDeleteFavorite";
import LoadingBackground from "../ui/LoadingBackground";
import { Link } from "react-router-dom";

function CategoryItems({ data }) {
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

  if (!data || data.length === 0) {
    return <p className="bigText m-5">No items available in this category.</p>;
  }

  return (
    <div className="mx-4 flex-1 sm:mr-8">
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-[repeat(auto-fit,_minmax(16rem,_1fr))]">
        {/* <ul className="grid grid-cols-2 justify-items-center gap-4 sm:grid-cols-[repeat(auto-fit,_minmax(16rem,16rem))]"> */}
        {data?.map((item) => (
          // <li key={item.id} className="smallText relative hover:shadow-lg">
          <li
            key={item.id}
            className="smallText relative max-w-80 hover:shadow-lg"
          >
            <Link to={`/item/${item.category}/${item.id}`}>
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.cate}
                  className="aspect-[250/312] w-full object-cover"
                />
              ) : (
                <div className="aspect-[250/312]">
                  <LoadingBackground />
                </div>
              )}
              <p className="mt-2 leading-4">{item.description}</p>
              <p className="mt-1 font-bold">Rs. {item.price}</p>
              <p className="mb-3 text-gray-500">
                <span className="line-through">Rs. {item.originalPrice} </span>{" "}
                -{item.discountPercent}%
              </p>
            </Link>
            <p className="absolute right-4 top-4 z-10 cursor-pointer text-xl">
              {product?.some((p) => p && p.id === item.id) ? (
                <span
                  onClick={() => deleteItemOnFavorite(item.id)}
                  className="flex items-center justify-center rounded-full bg-pink-500 p-[0.4rem] text-white"
                >
                  <MdFavorite />
                </span>
              ) : (
                <MdFavoriteBorder
                  className="text-gray-300"
                  onClick={() => addItemOnFavorite(item.id)}
                />
              )}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryItems;
