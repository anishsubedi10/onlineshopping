// import { Link } from "react-router-dom";

// function PageNotFound() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100">
//       <div className="text-center">
//         <h1 className="text-9xl font-bold text-gray-300">404</h1>
//         <h2 className="mt-4 text-3xl font-semibold text-gray-800">
//           Page Not Found
//         </h2>
//         <p className="mt-2 text-gray-600">
//           The page you're looking for doesn't exist or has been moved.
//         </p>
//         <Link to="/">
//           <button className="mt-6 rounded-lg bg-blue-500 px-6 py-2 text-white shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
//             Go Back to Home
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default PageNotFound;

import { Link, useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-300">404</h1>
        <h2 className="mt-4 text-3xl font-semibold text-gray-800">
          Page Not Found
        </h2>
        <p className="mt-2 text-gray-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="rounded-lg bg-blue-500 px-6 py-2 text-white shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Go Back
          </button>

          <Link to="/">
            <button className="rounded-lg bg-blue-500 px-6 py-2 text-white shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
              Go Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
