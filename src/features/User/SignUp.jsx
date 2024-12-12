import { NavLink } from "react-router-dom";
import { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [passwordCr, setPasswordCr] = useState("");
  const [passwordCo, setPasswordCo] = useState("");
  const [showPasswordCr, setShowPasswordCr] = useState(false);
  const [showPasswordCo, setShowPasswordCo] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("PasswordCr:", passwordCr);
    console.log("PasswordCo:", passwordCo);
  };

  return (
    <div className="mx-auto mt-8 max-w-md border-[1px] border-slate-300 p-6">
      <h1 className="bigText mb-4">Please Sign up to your account</h1>
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
          Create Password
        </label>
        <div className="relative">
          <input
            type={showPasswordCr ? "text" : "password"}
            id="password"
            placeholder="Password"
            value={passwordCr}
            onChange={(e) => setPasswordCr(e.target.value)}
            autoComplete="on"
            required
            className="w-full rounded border border-gray-300 p-2 pr-16"
          />
          <button
            type="button"
            onClick={() => setShowPasswordCr(!showPasswordCr)}
            // className="absolute right-3 top-1/2 -translate-y-1/2 transform text-sm text-blue-500"
            className="absolute right-3 top-1/2 -translate-y-1/2 transform"
          >
            {showPasswordCr ? "Hide" : "Show"}
          </button>
        </div>
        {/*  */}

        <label htmlFor="password" className="block font-medium">
          Confirm Password
        </label>
        <div className="relative">
          <input
            type={showPasswordCo ? "text" : "password"}
            id="password"
            placeholder="Password"
            value={passwordCo}
            onChange={(e) => setPasswordCo(e.target.value)}
            autoComplete="on"
            required
            className="w-full rounded border border-gray-300 p-2 pr-16"
          />
          <button
            type="button"
            onClick={() => setShowPasswordCo(!showPasswordCo)}
            // className="absolute right-3 top-1/2 -translate-y-1/2 transform text-sm text-blue-500"
            className="absolute right-3 top-1/2 -translate-y-1/2 transform"
          >
            {showPasswordCo ? "Hide" : "Show"}
          </button>
        </div>
        {/*  */}

        <button
          type="submit"
          // className="w-full rounded bg-blue-500 p-2 text-white hover:bg-blue-600"
          className="w-full rounded bg-blue-500 p-2 hover:bg-blue-600"
        >
          Login
        </button>
      </form>

      <p className="mt-4 text-sm">
        Already have an account?
        <NavLink to="/login" className="text-blue-500">
          Login
        </NavLink>
      </p>
    </div>
  );
}

export default SignUp;
