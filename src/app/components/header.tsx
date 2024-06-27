import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
          <div className="container flex items-center justify-between mx-auto my-4">
          <Link href={"/"} className="font-bold text-xl">Job Board</Link>
          <nav className="flex gap-4 *:py-2 *:px-2 *:rounded-md">
          <Link className="bg-gray-300" href={"/login"}>Login</Link>
          <Link className="bg-blue-600 text-white"href={"/new-listing"}>Post a job</Link>
        </nav>
          </div>       
        </header>
  )
}

export default Header