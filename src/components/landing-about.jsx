import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

const LandingAbout = () => {
    AOS.init();
    return (
        <>
            <div className='container background' style={{paddingBottom: '80px'}}></div>
            <div className='container-fluid landing-about-marg'>
                <div className='row' data-aos="fade-right">
                    <div className='col-md-5 mx-auto p-3'>
                        <img src='https://www.florahomesgc.com/images/aaa.jpg' alt='' className='missionSate__img'
/>
                    </div>
                    <div className='col-md-5 mx-auto p-3'>
                        <p className='h5 text-branding font-weight-bold'>WHY WE GET</p>
                        <p className='h3 text-light font-weight-bold text-dark'>Our Hands Dirty For You</p>
                        <p className='h6 text-light text-dark' style={{lineHeight: '25px'}}>To prevent real estate losses and give investors futuristic landed property investment; in terms of verifying the property, acquiring it, documenting it, designing, building and managing the property.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingAbout;