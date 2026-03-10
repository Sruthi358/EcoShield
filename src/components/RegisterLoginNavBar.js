import React from 'react'
import { Link } from 'react-router-dom';

export default function RegisterLoginNavBar(props) {
  return (
    <>
      <header className='bg-gray-800 text-white px-6 py-4'>
          <nav className='flex items-center justify-between text-sm font-medium gap-4 flex-wrap'>
          {/* <p className="font-bold text-xl">EcoShield.</p> */}
          <Link to="/" className="font-bold text-xl">
  EcoShield.
</Link>
              <ul className='ml-auto mr-8'>
                  <li><Link to="/" className='hover:text-teal-700'>{props.Button}</Link></li>
              </ul>
          </nav>
      </header>
    </>
  )
}
