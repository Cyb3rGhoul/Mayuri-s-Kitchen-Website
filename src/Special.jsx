import React from 'react'
import './css/index.css';
import './css/grid.css'
import './css/normalize.css'
import './css/col.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Special = () => {
  return (
    <>
        <div className="special h-screen">
            <ul className="meals-showcase pt-32 px-5">
                <li className='food-list p-px block float-left'>
                    <figure className='meal-photo'>
                        <img src={require('./assets/images/1.jpg')} alt="food" />
                    </figure>
                </li>
                <li className='food-list p-px block float-left w-'>
                    <figure className='meal-photo'>
                        <img src={require('./assets/images/2.jpg')} alt="food" />
                    </figure>
                </li>
                <li className='food-list p-px block float-left w-'>
                    <figure className='meal-photo'>
                        <img src={require('./assets/images/3.jpg')} alt="food" />
                    </figure>
                </li>
                <li className='food-list p-px block float-left w-'>
                    <figure className='meal-photo'>
                        <img src={require('./assets/images/4.jpg')} alt="food" />
                    </figure>
                </li>
            </ul>
            <ul className="meals-showcase twoo mt-10 px-5">
                <li className='food-list p-px block float-left w-'>
                    <figure className='meal-photo'>
                        <img src={require('./assets/images/5.jpg')} alt="food" />
                    </figure>
                </li>
            <li className='food-list p-px block float-left w-'>
                    <figure className='meal-photo'>
                        <img src={require('./assets/images/6.jpg')} alt="food" />
                    </figure>
                </li>
                <li className='food-list p-px block float-left w-'>
                    <figure className='meal-photo'>
                        <img src={require('./assets/images/7.jpg')} alt="food" />
                    </figure>
                </li>
                <li className='food-list p-px block float-left w-'>
                    <figure className='meal-photo'>
                        <img src={require('./assets/images/8.jpg')} alt="food" />
                    </figure>
                </li>
            </ul>
        </div>
    </>
    )
}

export default Special