import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";

const SignupPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Matter | Sign Up</title>
      </Head>
      <Navbar />
      <main className="w-4/5 mx-auto grid grid-cols-[70%_30%] my-12">
        <div></div>
        <div className="flex flex-col justify-center">
          <h1 className="font-head font-extrabold text-5xl leading-tight">
            Let&apos;s get you started
          </h1>
          <form className="mt-8 flex flex-col gap-3">
            <label htmlFor="name" className="block">
              Full name
              <input
                type="text"
                className="block w-full rounded bg-zinc-700 mt-1"
              />
            </label>
            <label htmlFor="email" className="block">
              Email address
              <input
                type="email"
                className="block w-full rounded bg-zinc-700 mt-1"
              />
            </label>
            <label htmlFor="password" className="block">
              Password
              <input
                type="password"
                className="block w-full rounded bg-zinc-700 mt-1"
              />
            </label>
            <label htmlFor="password-confirm" className="block">
              Confirm password
              <input
                type="password"
                className="block w-full rounded bg-zinc-700 mt-1"
              />
            </label>
            <button type="submit" className="bg-indigo-700 py-3 rounded mt-3">
              Sign Up
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default SignupPage;
