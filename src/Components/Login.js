import * as React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="bg-white px-10 py-20 rounded-3xl border-gray-200">
      <h1 className="text-5xl font-semibold">Welcome Back</h1>
      <p className="font-medium text:lg text-gray-500 mt-4">
        Welcome back! Please enter your details.
      </p>
      <div className="mt-9">
        <div>
          <label className="text-lg font-medium">Email</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter your email"
          />
        </div>
      </div>
      <div>
        <label>Password</label>
        <input
          className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
          placeholder="Enter your password"
          type="password"
        />
      </div>
      <div className="mt-8 flex justify-between items-center">
        <div>
          <input type="checkbox" id="remember" />
          <label
            htmlFor="remember me"
            className="ml-2 font-medium text-base"
            for="remember"
          >
            Remember me
          </label>
        </div>
        <button className="font-medium text-base text-violet-500">
          Forgot password
        </button>
      </div>
      <div className="mt-8 flex flex-col gap-y-4">
        <button className=" active:scale-[.98] py-3 rounded-xl bg-violet-500 text-white text-lg font-bold">
          Sign in
        </button>
        <button className=" active:scale-[.98] py-3 rounded-xl bg-violet-500 text-white text-lg font-bold">
          Sign in with Google
        </button>

        <p>Don't have an account? </p>

        <Link
          to="/Register"
          className="active:scale-[.98] py-3 rounded-xl bg-violet-500 text-white text-lg font-bold"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
export default Login;
