import { NavLink } from "react-router-dom";

function ShopByCateItems({ data }) {
  return (
    <>
      {data?.map((item) => (
        <NavLink
          to={`/women/category/${item.name.toLowerCase()}`}
          key={item.id}
        >
          <li
            key={item.id}
            className="flex transform flex-col items-center transition hover:scale-105"
          >
            <img
              src={item.img}
              alt={item.name}
              className="h-[13rem] w-[11rem] object-cover sm:h-[19.5rem] sm:w-[14rem]"
            />
            <p className="smallText mt-1 text-center">{item.name}</p>
          </li>
        </NavLink>
      ))}
    </>
  );
}

export default ShopByCateItems;
