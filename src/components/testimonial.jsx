import React from 'react'
import {
    FaArrowCircleLeft,
    FaArrowCircleRight,
    FaQuoteRight,
    FaStar,
} from 'react-icons/fa'

const Testimonial = () => {
    return (
        <div
            className='container'
            style={{ marginBottom: '4%', paddingBottom: '4%' }}
        >
            <div className='row'>
                <div className='col-md-12'>
                    <p
                        className='text-branding text-center h6'
                        style={{ marginBottom: '3%' }}
                    >
                        TESTIMONIAL
                    </p>
                    <p
                        className='h2 font-weight-bold text-center'
                        style={{ marginBottom: '2%' }}
                    >
                        What Clients say
                    </p>
                </div>
            </div>
            <div>
                <div style={{ marginTop: '2%' }}>
                    <div>
                        <div className='col-10 d-block mx-auto'>
                            <div
                                id='carouselExampleControls'
                                class='carousel slide'
                                data-ride='carousel'
                            >
                                <div class='carousel-inner'>
                                    <div class='carousel-item active'>
                                        <div>
                                            <div>
                                                <div
                                                    className='col-1 p-3 text-center d-block mx-auto p- text-light'
                                                    style={{
                                                        backgroundColor:
                                                            'goldenrod',
                                                        borderRadius: '50%',
                                                    }}
                                                >
                                                    <FaQuoteRight />
                                                </div>
                                                <div
                                                    className='col-12'
                                                    style={{
                                                        padding: '12%',
                                                        paddingTop: '5%',
                                                    }}
                                                >
                                                    <p
                                                        className='h6 text-center'
                                                        style={{
                                                            lineHeight: '25px',
                                                            fontSize: 'larger',
                                                        }}
                                                    >
                                                        I am an estate surveyor
                                                        and i've been following
                                                        the trend of your good
                                                        advice, they're golden!
                                                        if only a good investor
                                                        would take it. Thank you
                                                        floralHomesGC
                                                    </p>
                                                    <p
                                                        className=' h6 text-center'
                                                        style={{
                                                            marginTop: '5%',
                                                        }}
                                                    >
                                                        otunba
                                                        olanrewaju(NIGERIA)
                                                    </p>
                                                    <p
                                                        style={{
                                                            color: 'gold',
                                                        }}
                                                        className='text-center'
                                                    >
                                                        <FaStar /> <FaStar />{' '}
                                                        <FaStar /> <FaStar />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='carousel-item'>
                                        <div className='container-fluid'>
                                            <div className='row'>
                                                <div className='col-12 p-3'>
                                                    <div
                                                        className='col-1 p-3 text-center d-block mx-auto p- text-light'
                                                        style={{
                                                            backgroundColor:
                                                                'goldenrod',
                                                            borderRadius: '50%',
                                                        }}
                                                    >
                                                        <FaQuoteRight />
                                                    </div>
                                                </div>
                                                <div
                                                    className='col-12'
                                                    style={{
                                                        padding: '12%',
                                                        paddingTop: '5%',
                                                    }}
                                                >
                                                    <p
                                                        className='h6 text-center'
                                                        style={{
                                                            lineHeight: '25px',
                                                            fontSize: 'larger',
                                                        }}
                                                    >
                                                        I am an estate surveyor
                                                        and i've been following
                                                        the trend of your good
                                                        advice, they're golden!
                                                        if only a good investor
                                                        would take it. Thank you
                                                        floralHomesGC
                                                    </p>
                                                    <p
                                                        className=' h6 text-center'
                                                        style={{
                                                            marginTop: '5%',
                                                        }}
                                                    >
                                                        otunba
                                                        olanrewaju(NIGERIA)
                                                    </p>
                                                    <p
                                                        style={{
                                                            color: 'gold',
                                                        }}
                                                        className='text-center'
                                                    >
                                                        <FaStar /> <FaStar />{' '}
                                                        <FaStar /> <FaStar />{' '}
                                                        <FaStar /> <FaStar />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a
                                    class='carousel-control-prev carousel-control'
                                    href='#carouselExampleControls'
                                    role='button'
                                    data-slide='prev'
                                >
                                    <span class='' aria-hidden='true'>
                                        <FaArrowCircleLeft
                                            style={{
                                                color: 'blueviolet',
                                                fontSize: '30px',
                                            }}
                                        />
                                    </span>
                                    <span class='sr-only'>Previous</span>
                                </a>
                                <a
                                    class='carousel-control-next carousel-control'
                                    href='#carouselExampleControls'
                                    role='button'
                                    data-slide='next'
                                >
                                    <span class='' aria-hidden='true'>
                                        <FaArrowCircleRight
                                            style={{
                                                color: 'blueviolet',
                                                fontSize: '30px',
                                            }}
                                        />
                                    </span>
                                    <span class='sr-only'>Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
