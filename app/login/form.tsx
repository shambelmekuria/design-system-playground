import React from "react";

export default function LoginForm() {
  return (
    <div className="h-screen flex items-center justify-center px-4 bg-neutral-100">
      <div className="w-full max-w-md mx-auto p-12 border border-neutral-200 shadow bg-white rounded-xl space-y-5">
        <div className="flex flex-col gap-4">
            <h1 className="text-3xl text-neutral-800 font-bold">Welcome back </h1>
            <p className=" text-neutral-400">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <form action="#" className="space-y-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="usename" className="font-semibold text-neutral-700">
              Usename
            </label>
            <input
              type="text"
              id="usename"
              className="w-full border border-neutral-200 rounded-md py-2 px-4"
              placeholder="Enter Usename"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="font-semibold text-neutral-700"
            >
              Password
            </label>
            <input
              type="text"
              id="password"
              className="w-full border border-neutral-200 rounded-md py-2 px-4"
              placeholder="Enter Passowrd"
            />
          </div>
          <div>
            <button className="py-2 px-4 text-center bg-blue-600 text-white w-full">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
