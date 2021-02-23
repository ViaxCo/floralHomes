import React from 'react'

import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaClock } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'
import { FaPaperPlane } from 'react-icons/fa'
const FirstFooterSec = () => {
    return (
        <>
            <div className='row'>
                <div className='col-12'></div>
                <div className='col-12'>
                    <p style={{ color: 'lightgrey' }}>
                        The foremost online property verification and Real
                        Estate investment company that helps clients to acquire
                        verified properties and invest in verified deals.
                    </p>
                </div>
            </div>
            <div className='row'>
                <div
                    className='col-2 mx-auto p-1 text-center text-light'
                    style={{ backgroundColor: 'rgba(21, 66, 124, 0.568)' }}
                >
                    <FaFacebook />
                </div>
                <div
                    className='col-2 mx-auto p-1 text-center text-light'
                    style={{ backgroundColor: 'rgba(21, 66, 124, 0.568)' }}
                >
                    <FaTwitter />
                </div>
                <div
                    className='col-2 mx-auto p-1 text-center text-light'
                    style={{ backgroundColor: 'rgba(21, 66, 124, 0.568)' }}
                >
                    <FaInstagram />
                </div>
                <div
                    className='col-2 mx-auto p-1 text-center text-light'
                    style={{ backgroundColor: 'rgba(21, 66, 124, 0.568)' }}
                >
                    <FaYoutube />
                </div>
                <div
                    className='col-2 mx-auto p-1 text-center text-light'
                    style={{ backgroundColor: 'rgba(21, 66, 124, 0.568)' }}
                >
                    <FaLinkedin />
                </div>
            </div>
        </>
    )
}

const UsefulLinksSec = () => {
    return (
        <>
            <div className='col-12'>
                <div className='row'>
                    <div className='col-12'>
                        <p className='font-weight-bold h4'>Useful Links</p>
                    </div>
                    <div className='col-2 footerfancyBorder'></div>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <ul className='ul' style={{ listStyle: 'none' }}>
                        <li className='footerfancysideborder'>Home</li>
                        <li className='footerfancysideborder'>Blogs</li>
                        <li className='footerfancysideborder'>Contact Us</li>
                        <li className='footerfancysideborder'>University</li>
                        <li className='footerfancysideborder'>Quick links</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

const GetInTouchComp = () => {
    return (
        <>
            <div className='col-12'>
                <div className='row'>
                    <div className='col-12'>
                        <p className='font-weight-bold h3'>Get In Touch</p>
                    </div>
                    <div className='col-3 footerfancyBorder'></div>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <ul className='ul' style={{ listStyle: 'none' }}>
                        <li style={{ marginBottom: '5%', marginTop: '5%' }}>
                            <FaClock
                                style={{
                                    marginLeft: '-5%',
                                    marginRight: '5%',
                                    fontSize: 'larger',
                                }}
                            />
                            Mon - Sat: 09:00am - 5:00pm
                        </li>
                        <li style={{ marginBottom: '5%', marginTop: '5%' }}>
                            <FaPhone
                                style={{
                                    marginLeft: '-5%',
                                    marginRight: '5%',
                                    fontSize: 'larger',
                                }}
                            />
                            +234-809-444-2019
                        </li>
                        <li style={{ marginBottom: '5%', marginTop: '5%' }}>
                            <FaPaperPlane
                                style={{
                                    marginLeft: '-5%',
                                    marginRight: '5%',
                                    fontSize: 'larger',
                                }}
                            />
                            hello@florahomesgc.com
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

const TermsAndConds = () => {
    return (
        <>
            <div className='col-12'>
                <div className='row'>
                    <div className='col-12'>
                        <p className='font-weight-bold h3'>T&C's</p>
                    </div>
                    <div className='col-3 footerfancyBorder'></div>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <ul className='ul' style={{ listStyle: 'none' }}>
                        <li className='footerfancysideborder'>
                            Privacy policy
                        </li>
                        <li className='footerfancysideborder'>
                            Terms and Conditions
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

const Footer = () => {
    return (
        <>
            <div
                className='container-fluid'
                style={{
                    paddingTop: '10%',
                    paddingBottom: '12%',
                    backgroundColor: 'darkslateblue',
                    color: '#fff',
                    paddingRight: '5%',
                    paddingLeft: '5%',
                }}
            >
                <div className='row'>
                    <div className='col-md-3 mx-auto'>
                        <FirstFooterSec />
                    </div>
                    <div className='col-md-3 mx-auto'>
                        <UsefulLinksSec />
                    </div>
                    <div className='col-md-3 mx-auto'>
                        <GetInTouchComp />
                    </div>
                    <div className='col-md-3 mx-auto'>
                        <TermsAndConds />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
