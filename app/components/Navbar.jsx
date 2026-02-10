import React from 'react'

const Navbar = () => {
  return (
    <div className='h-20 w-full fixed top-0 z-50 mt-8'>
      <div className='h-full w-[70%] bg-white/40 backdrop-blur-3xl mx-auto flex justify-between items-center rounded-full px-16'>
        <div>
          <h1 className='text-2xl font-bold text-red-600'>Sanskriti</h1>
        </div>
        <div>
          <ul className='flex gap-4 items-center'>
            <li>Home</li>
            <li>About</li>
            <li>Events</li>
            <li>
              <button className=' rounded-full bg-red-600 p-4 -mr-10'>
                Download brochure
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar