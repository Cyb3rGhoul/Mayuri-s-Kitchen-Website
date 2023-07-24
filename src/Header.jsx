import React from 'react'
import './css/index.css';
import './css/grid.css';
import './css/normalize.css';
import './css/col.css';


const Header = () => {
  return (
    <>
    <div className="content">
      <div className='hero-text mt-0 mb-2.5 tracking-wide uppercase font-medium text-black p-44 h-screen one absolute w-full top-1/2 left-1/2'>
        <div className='head'>
      <h1 className='text-5xl'>Mayuri's Kitchen<br/>Come and fill Your Tummy</h1>
      </div>
      <div className='inline-block px-2.5 py-7'>
        <a className='home-btn bg-amber-600 color-white border-2 border-solid mr-6 border-orange-500 p-3 rounded-3xl hover:bg-amber-800 hover:border-orange-800 transition delay-200' href="/features">I'm Hungry</a>
        <a className='home-btn border-2 border-solid border-orange-500 text-orange-300 p-3 rounded-3xl hover:bg-amber-800 hover:border-orange-800 hover:text-white transition delay-200' href="/special">Show me more</a>
      </div>
      </div>
    </div>
    <footer className='absolute bottom-4 flex flex-col items-center w-full'>
      <div className="row">
        <div className="col span_1_of_2">
          <ul className='socials flex flex-row justify-between w-40 text-3xl'>
            <li><a href="https://instagram.com/haarrrssshhh_" target='_blank' rel="noreferrer"><ion-icon name="logo-instagram"></ion-icon></a></li>
            <li><a href="https://twitter.com/Cypher1911" target='_blank' rel="noreferrer"><ion-icon name="logo-twitter"></ion-icon></a></li>
            <li><a href="/"><ion-icon name="logo-google"></ion-icon></a></li>
          </ul>
        </div>
      </div>
      <div className="row copy text-white font-semibold">
        <p>Copyright &copy; 2023 by <span>Harsh Shukla</span> | All rights reserved</p>
      </div>
    </footer>
    </>
  )
}

export default Header