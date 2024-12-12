import { NavLink, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();

  // Split the current path and filter out empty segments
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment);
  return (
    <nav aria-label="breadcrumb">
      <ol style={{ display: "flex", listStyleType: "none", padding: 0 }}>
        {/* Home link */}
        <li>
          <NavLink to="/">Home</NavLink>
          <span style={{ margin: "0 3px" }}> &gt; </span>
        </li>

        {/* Map each path segment to a breadcrumb link */}
        {pathSegments.map((segment, index) => {
          // Create the path up to the current segment for the link
          const path = `/${pathSegments.slice(0, index + 1).join("/")}`;

          return (
            <li key={index}>
              {index < pathSegments.length - 1 ? (
                <>
                  <NavLink to={path}>{segment}</NavLink>
                  <span style={{ margin: "0 3px" }}> &gt; </span>
                </>
              ) : (
                // Display last segment as plain text without link
                <span>{segment}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
