import React from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Section2 = () => {
    AOS.init()
    return (
        <div className='container-fluid landing-about-marg background'>
            <div className='row'>
                <div
                    className='col-md-6 p-3'
                    data-aos='fade-up-right'
                >
                    <img
                        src='https://www.florahomesgc.com/images/app-mockup.png'
                        alt='phone img'
                        style={{ width: '100%', objectFit: 'contain', height: '80vh' }}
                    />
                </div>
                <div className='col-md-6 p-3 section__center'>
                    <p className='h2 text-light font-weight-bold text-center' >
                        18 Real Estate Mistakes That Make People Lose Money In
                        Property Investment.
                    </p>
                    <p className='text-light text-center'>
                        Don't fall victim to landed property scam, demolition,
                        third party claimant and other losses in Nigeria Real
                        Estate.
                    </p>
                    <button className='mt-3 btn btn-primary section__btn'>Access now</button>
                </div>
            </div>
        </div>
    )
}

export default Section2
