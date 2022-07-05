import type { NextPage } from "next";
import Head from "next/head";
import { PuzzleIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Navbar from "../components/Navbar";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Matter</title>
      </Head>
      <Navbar />
      <main className="w-4/5 mx-auto grid grid-cols-2 min-h-[400px]">
        <div className="flex flex-col justify-center">
          <h1 className="font-head font-light text-7xl leading-tight">
            Manage projects easily
          </h1>
          <Link href="/signup">
            <a className="bg-indigo-700 w-max py-3 px-6 rounded mt-8 text-xl">
              Get started
            </a>
          </Link>
        </div>
      </main>
    </>
  );
};

export default HomePage;
