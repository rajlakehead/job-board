import {
  getSignInUrl,
  getSignUpUrl,
  getUser,
  signOut,
} from "@workos-inc/authkit-nextjs";
import Link from "next/link";
import React from "react";

const Header = async () => {
  const { user } = await getUser();
  const signInUrl = await getSignInUrl();
  const signOutUrl = await getSignUpUrl();

  return (
    <header>
      <div className="container flex items-center justify-between mx-auto my-4">
        <Link href={"/"} className="font-bold text-xl">
          Job Board
        </Link>
        <nav className="flex gap-4">
          {!user && (
            <Link className="bg-gray-300 rounded-md px-2 py-2" href={signInUrl}>
              Login
            </Link>
          )}
          {user && (
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button type="submit" className="bg-gray-300 py-2 px-2 rounded-md">
                Logout, {user.firstName}
              </button>
            </form>
          )}
          <Link className="bg-blue-600 text-white px-2 py-2 rounded-md" href={"/new-listing"}>
            Post a job
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
