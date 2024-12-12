import { NavLink } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      PageNotFound{" "}
      <NavLink to="/">
        <b>Back to Home</b>
      </NavLink>{" "}
    </div>
  );
}

export default PageNotFound;
