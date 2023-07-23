import React from 'react'
import './css/grid.css'
import './css/index.css'
import './css/col.css'


const Features = () => {
    return (
    <>
    <div className="feature h-screen">

    <div className="row text-black pt-36 pl-6 text-white text-right">
        <h2 className='feature-heading text-3xl font-semibold uppercase text-center mb-5'>Get Yummy Food</h2>
        <p className='leading-8 text-center pl-40 pr-40'>
            Bhook Lagi hai? Aajao burger khila dunga!
            <br />
            Mess Ka khana pasand nahi aaya? Aajao Pizza Khila dunga!
            <br />
            Kuch Thanda aur Refreshing pina hai? Aajao Mojito pila dunga!
        </p>
    </div>
        <div className='row text-black p-8 text-white'>
            <div className="col span_1_of_3 p-px">
                <ion-icon class="icon-food text-5xl block mb-4" name="infinite-outline"></ion-icon>
                <h3 className='text-xl font-semibold uppercase mb-3 tracking-wide'>Never Crave for Any food</h3>
                <p className='leading-6'>We got Multiple food Varieties with Us!</p>
            </div>
            <div className="col span_1_of_3 p-px">
                <ion-icon class='icon-food text-5xl block mb-4' name="fast-food-outline"></ion-icon>
                <h3 className='text-xl font-semibold uppercase mb-3 tracking-wide'>All Type of food Available</h3>
                <p className='leading-6'>From Tasty BreakFast to yummy Chinese in night, We got it all!</p>
            </div>
            <div className="col span_1_of_3 p-px">
                <ion-icon class='icon-food text-5xl block mb-4' name="hourglass-outline"></ion-icon>
                <h3 className='text-xl font-semibold uppercase mb-3 tracking-wide'>Feeling Aalasi? Hostel Delivery Available</h3>
                <p className='leading-6'>Order online and get your food at door step!</p>
            </div>
        </div>
    </div>
    </>
    )
}

export default Features