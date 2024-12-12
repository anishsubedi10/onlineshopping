// import { NavLink } from "react-router-dom";
// import { useState } from "react";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Email:", email);
//     console.log("Password:", password);
//   };

//   return (
//     <div>
//       <h1>Please login to your account</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="email">Email Address</label>
//         <input
//           type="email"
//           id="email"
//           placeholder="Email Address"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           autoComplete="on"
//           required
//         />
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           id="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           autoComplete="on"
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//       <p>Forgot Password?</p>
//       <p>
//         Don&apos;t have an account? <NavLink to="/signup">Sign up</NavLink>
//       </p>
//     </div>
//   );
// }

// export default Login;

// import { NavLink } from "react-router-dom";
// import { useState } from "react";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Email:", email);
//     console.log("Password:", password);
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div>
//       <h1>Please login to your account</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="email">Email Address</label>
//         <input
//           type="email"
//           id="email"
//           placeholder="Email Address"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           autoComplete="on"
//           required
//         />
//         <label htmlFor="password">Password</label>
//         <div style={{ display: "flex", alignItems: "center" }}>
//           <input
//             type={showPassword ? "text" : "password"}
//             id="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             autoComplete="on"
//             required
//           />
//           <button
//             type="button"
//             onClick={togglePasswordVisibility}
//             style={{ marginLeft: "8px" }}
//           >
//             {showPassword ? "Hide" : "Show"}
//           </button>
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       <p>Forgot Password?</p>
//       <p>
//         Don&apos;t have an account? <NavLink to="/signup">Sign up</NavLink>
//       </p>
//     </div>
//   );
// }

// export default Login;

import { NavLink } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="mx-auto mt-8 max-w-md border-[1px] border-slate-300 p-6">
      <h1 className="bigText mb-4">Please login to your account</h1>
      <form onSubmit={handleSubmit} className="smallText space-y-4">
        {/* <label htmlFor="email" className="block text-sm font-medium"> */}
        <label htmlFor="email" className="block font-medium">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="on"
          required
          className="w-full rounded border border-gray-300 p-2"
        />

        {/* <label htmlFor="password" className="block text-sm font-medium"> */}
        <label htmlFor="password" className="block font-medium">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="on"
            required
            className="w-full rounded border border-gray-300 p-2 pr-16"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            // className="absolute right-3 top-1/2 -translate-y-1/2 transform text-sm text-blue-500"
            className="absolute right-3 top-1/2 -translate-y-1/2 transform"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <button
          type="submit"
          // className="w-full rounded bg-blue-500 p-2 text-white hover:bg-blue-600"
          className="w-full rounded bg-blue-500 p-2 hover:bg-blue-600"
        >
          Login
        </button>
      </form>
      <p className="mt-4 cursor-pointer text-sm text-blue-500">
        Forgot Password?
      </p>
      <p className="mt-2 text-sm">
        Don&apos;t have an account?
        <NavLink to="/signup" className="text-blue-500">
          Sign up
        </NavLink>
      </p>
    </div>
  );
}

export default Login;
