import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const ProdoctSec = () => {
    AOS.init()
    return (
        <div className='container landing-about-marg'>
            <div className='row'>
                <div className='col-12'>
                    <p className='text-branding h6 text-center'>PRODUCTS</p>
                    <p className='h2 text-dark font-weight-bold text-center'>
                        SERVICES WE OFFFER
                    </p>
                </div>
            </div>
            <div className='row mt-3'>
                <div
                    className='col-md-5 mx-auto p-2'
                    data-aos='fade-down-right'
                >
                    <div className='row shadow'>
                        <div
                            className='col-md-2 background p-3'
                            style={{
                                paddingLeft: '10px',
                                paddingRight: '10px',
                            }}
                        ></div>
                        <div className='col-md-9'>
                            <div className='card'>
                                <div className='card-body'>
                                    <p className='h6 text-branding p-3'>
                                        Verification Services
                                    </p>
                                    <p className=''>
                                        Save yourself from demolition, 3rd party
                                        claimant, and Scams by availing yourself
                                        of our verification service which brings
                                        together our field expert to help you
                                        know the status of the landed property
                                        you want to buy.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-1'></div>
                    </div>
                </div>
                <div className='col-md-5 mx-auto p-2' data-aos='fade-down-left'>
                    <div className='row shadow'>
                        <div
                            className='col-md-2 background p-3'
                            style={{
                                paddingLeft: '10px',
                                paddingRight: '10px',
                            }}
                        ></div>
                        <div className='col-md-9'>
                            <p className='h6 text-branding p-3'>
                                Complete Property Buyer Services
                            </p>
                            <p className=''>
                                Do you need to buy your choice property at your
                                choice location, or you just need property
                                services like Survey, Valuation, Documentation,
                                Sourcing, Negotiation, Payment . . . then engage
                                this Service at 100% done for you. This service
                                caters for both individuals, corporate
                                organizations, within Nigeria and in Diaspora.
                            </p>
                        </div>
                        <div className='col-md-1'></div>
                    </div>
                </div>
            </div>
            <div className='row' style={{ paddingTop: '50px' }}>
                <div
                    className='col-md-3 mx-auto p-3'
                    style={{ paddingTop: '2rem' }}
                >
                    <button
                        className='btn btn-default d-block mx-auto'
                        style={{ color: '#fff' }}
                    >
                        View All Products
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProdoctSec
