// import { useParams } from "react-router-dom";
// import { useCategoryItem } from "../category/useCategoryItem";

// function Items() {
//   const { itemCategory, itemId } = useParams();

//   const { data, error } = useCategoryItem(itemCategory.toLowerCase());

//   const item = data?.filter((item) => item.id === itemId);
//   console.log(item);
//   console.log(data);

//   return (
//     <div>
//       <h1>{item.image}</h1>
//     </div>
//   );
// }

// export default Items;

import { useParams } from "react-router-dom";
import { useCategoryItem } from "../category/useCategoryItem";
import PageNotFound from "../ui/PageNotFound";

function Items() {
  const { itemCategory, itemId } = useParams();

  const { isLoading, data, error } = useCategoryItem(
    itemCategory.toLowerCase(),
  );

  const item = data?.find((item) => item.id.toString() === itemId);

  console.log(item);
  console.log(data);

  return (
    <div>
      {/* {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>{item.image}</h1>
          <p>{item.description}</p>
          <p>Price: Rs. {item.price}</p>
        </>
      )} */}

      {isLoading ? (
        <p>Loading...</p>
      ) : item ? (
        <>
          <img className="h-32 w-24" src={item.image} alt="" />
          <img className="h-32 w-24" src={item.image} alt="" />
          <img className="h-32 w-24" src={item.image} alt="" />
          <img className="h-32 w-24" src={item.image} alt="" />
          <p>{item.description}</p>
          <p>Price: Rs. {item.price}</p>
        </>
      ) : (
        <PageNotFound />
      )}
    </div>
  );
}

export default Items;
