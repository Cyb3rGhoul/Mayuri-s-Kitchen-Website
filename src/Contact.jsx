import React from 'react'
import './css/normalize.css'
import './css/grid.css'
import './css/col.css'
import './css/index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  return (
    <>
        <div className="contact h-screen text-white">
            <div className="row pt-28">
                <h2 className='heading text-2xl my-0 mx-auto'>We're happy to hear from you</h2>
            </div>
            <div className="row">
                <form action="/" method='POST' className='contact-form my-0 mx-auto'>
                    <div className="row">
                        <div className="col span_1_of_3">
                            <label>Name</label>
                        </div>
                        <div className="col span_2_of_3">
                            <label><input type="text" name='name' id='name' placeholder='Your Name' required/></label>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col span_1_of_3">
                            <label>Email ID</label>
                        </div>
                        <div className="col span_2_of_3">
                            <label><input type="email" name='email' id='email' placeholder='Your Email Address' required/></label>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col span_1_of_3">
                            <label>How did you find us?</label>
                        </div>
                        <div className="col span_2_of_3">
                            <select name="find-us" id="find-us">
                                <option value="friends">
                                    Friends
                                </option>
                                <option value="serach">
                                    Search Engine
                                </option>
                                <option value="ad">
                                    Advertisements
                                </option>
                                <option value="others">
                                    Others
                                </option>
                            </select>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col span_1_of_3">
                            <label>Newsletter</label>
                        </div>
                        <div className="col span_2_of_3">
                            <label><input type="checkbox" name='news' id='news' checked/></label>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col span_1_of_3">
                            <label>Drop a line</label>
                        </div>
                        <div className="col span_2_of_3">
                            <label><textarea name="text" id="ta" cols="30" rows="10"></textarea></label>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col span_1_of_3">
                            <label>&nbsp;</label>
                        </div>
                        <div className="col span_2_of_3">
                            <label><button type="submit" className='sub-but hover:bg-orange-700 transition'><span className='font-semibold'>Send Me</span></button></label>
                        </div>

                    </div>


                </form>
            </div>
        </div>
    </>
    )
}

export default Contact