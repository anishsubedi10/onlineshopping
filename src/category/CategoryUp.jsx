import { NavLink } from "react-router-dom";
import Breadcrumb from "../ui/Breadcrumb";

function CategoryUp({ data, category = "" }) {
  return (
    <div className="smallText flex justify-around py-5 lg:mx-20">
      <p className="">
        <Breadcrumb />
      </p>
      <p>{category}</p>
      <p className="hidden md:block">{data?.length} items</p>
    </div>
  );
}

export default CategoryUp;
