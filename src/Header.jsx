import React from 'react'
import './css/index.css';
import './css/grid.css'
import './css/normalize.css'
import './css/col.css'

const Header = () => {
  return (
    <>
    <div className="content">
      <div className='mt-0 mb-2.5 tracking-wide uppercase font-medium text-black p-44 h-screen one absolute w-full top-1/2 left-1/2'>
      <h1 className='text-5xl'>Mayuri's Kitchen<br/>Come and fill Your Tummy</h1>

      <div className='inline-block px-2.5 py-7'>
        <a className='bg-amber-600 color-white border-2 border-solid mr-6 border-orange-500 p-3 rounded-3xl hover:bg-amber-800 hover:border-orange-800 transition delay-200' href="/">I'm Hungry</a>
        <a className='border-2 border-solid border-orange-500 text-orange-300 p-3 rounded-3xl hover:bg-amber-800 hover:border-orange-800 hover:text-white transition delay-200' href="/">Show me more</a>
      </div>
      </div>
    </div>
    </>
  )
}

export default Header