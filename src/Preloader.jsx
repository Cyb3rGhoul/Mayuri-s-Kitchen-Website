import React, { useEffect } from 'react'
import './css/preloader.css'
import { preLoaderAnim } from './index';

const Preloader = () => {

    useEffect(()=>{
        preLoaderAnim()
    },[]);

  return (
    <>
        <div className="preloader">
            <div className="texts-container" id='text'>
                <span>Cooking</span>
                <span>Yummy</span>
                <span>Food</span>
            </div>
        </div>
    </>
  )
}

export default Preloader