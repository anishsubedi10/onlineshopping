import { FiUser } from "react-icons/fi";
import { IoCartOutline, IoSearch } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Header() {
  const iconStyle = { fontSize: "1.1rem" };
  // window.innerWidth >= 640 ? { fontSize: "1.1rem" } : { fontSize: "0.5rem" };

  return (
    <>
      <div className="flex justify-between bg-slate-50 px-5 py-3.5 sm:px-20 sm:py-2">
        <NavLink to="/" className="bigText">
          Aafnai Bazzar
        </NavLink>

        <div className="my-auto flex gap-5 sm:gap-5">
          {/* <input type="search" placeholder="search" name="" id="" /> */}
          <IoSearch style={iconStyle} />
          <NavLink to="/favorite">
            <MdFavoriteBorder style={iconStyle} />
          </NavLink>
          <NavLink to="/login">
            <FiUser style={iconStyle} />
          </NavLink>
          <NavLink to="/cart">
            <IoCartOutline style={iconStyle} />
          </NavLink>
        </div>
      </div>

      <div className="relative w-full border-[1px] border-slate-300 bg-slate-50 pl-3">
        <ul className="headerScroll smallText flex gap-8 py-4 md:justify-center">
          <NavLink to="women/new-arrival">New Arrival</NavLink>
          <NavLink to="women/category/pants">Pants</NavLink>
          <NavLink to="women/category/tops">Tops</NavLink>
          <NavLink to="women/category/outerwear">Outerwear</NavLink>
          <NavLink to="women/category/swimwear">Swimwear</NavLink>
          <NavLink to="women/category/activeware">Activeware</NavLink>
          <NavLink to="women/category/dresses">Dresses</NavLink>
          <NavLink to="women/sale">Sale</NavLink>
        </ul>
      </div>
    </>
  );
}

export default Header;
