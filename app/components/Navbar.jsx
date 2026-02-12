import React from 'react'

const Navbar = () => {
  return (
    <div className='h-20 w-full fixed top-0 z-50 mt-8'>
      <div className='h-full w-[70%] bg-white/40 backdrop-3xl mx-auto flex justify-between items-center rounded-full px-16'>
        <a href="#home">
          <h1 className="text-3xl font-bold text-white cursor-pointer">
            Sanskriti
          </h1>
        </a>
        <div>
          <ul className='flex gap-4 items-center'>
            <li>
              <a href="#home" className="hover:text-red-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-red-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="#events" className="hover:text-red-500 transition">
                Events
              </a>
            </li>
            <li>
            <a
              href="/brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="rounded-full bg-red-600 px-5 py-3 text-white -mr-10 hover:bg-red-700 transition">
                Download brochure
              </button>
            </a>

            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar