import React from 'react'
import CylinderComp from '../components/CylinderComp'
import FieryGlowY from '../components/FieryGlowY'

function Hero() {
  return (
    <div className='h-screen w-full relative'>
      <FieryGlowY />
      {/* Wine red glow background */}
      <div className='absolute inset-0 bg-gradient-radial from-red-900 via-red-950/80 to-transparent pointer-events-none' ></div>

      <CylinderComp />
      <div className='absolute inset-0 flex flex-col justify-center items-center gap-4'>
        <div className='h-[75%] w-[40%] flex flex-col justify-center items-center gap-4 mt-40'>


          <h1 className='text-2xl tracking-widest font-base self-start leading-0.5'>
            F.E.T.S.U Presents
          </h1>
          <h1 className='text-[10rem] leading-[10rem] font-[samarkan] text-red-600 text-shadow-2xl -mt-8'>
            sanskriti
          </h1>
          <h1 className='text-6xl text-red-600 font-medium font-[samarkan] text-shadow-2xl -mt-8'>
            2026
          </h1>
          <h1 className='text-4xl font-semibold font-[samarkan]'>
            redefinig culture
          </h1>
        </div>
      </div>

    </div>
  )
}

export default Hero