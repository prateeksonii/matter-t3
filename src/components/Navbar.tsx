import { PuzzleIcon } from "@heroicons/react/outline";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-4/5 mx-auto h-20 flex items-center">
      <div className="text-3xl flex items-center gap-2 font-light font-head tracking-wide">
        <PuzzleIcon className="w-7 h-7" />
        <span>matter</span>
      </div>
      <div className="ml-auto flex items-center gap-8">
        <Link href="/login">
          <a>Log In</a>
        </Link>
        <Link href="/signup">
          <a className="bg-zinc-700 py-2 px-4 rounded">Sign Up</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
