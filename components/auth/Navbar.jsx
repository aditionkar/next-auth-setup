import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

function Navbar() {
  return (
    <nav  className="flex justify-around items-center py-4 bg-[#141414] text-white">
        <Link href="/" className='text-2xl font-semibold'>Company-name</Link>
        <ul className="hidden md:flex space-x-4 list-none">
            <li className='mt-1.5'>
              <Link href="/login" className="hover:text-gray-400">
                Login
              </Link>
            </li>
            <li className='mt-1.5'>
              <Link href="/signIn" className="hover:text-gray-400">
                SignIn
              </Link>
            </li>
            <li className='mt-1.5'>
              <Link href="/dashboard" className="hover:text-gray-400">
                Dashboard
              </Link>
            </li>
            <li className='mt-1.5'>
              <Link href="/settings" className="hover:text-gray-400">
                Settings
              </Link>
            </li>
              <Button type="submit" className="hover:text-gray-400 text-md">
                Logout
              </Button>
      </ul>
    </nav>
  )
}

export default Navbar