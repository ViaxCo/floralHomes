import React from 'react'

const MissionStatement = () => {
    return (
        <div
            className='container-fluid'
            style={{
                paddingTop: '1%',
                paddingBottom: '4%',
                marginTop: '3%',
                marginBottom: '1%',
            }}
        >
            <div className='row'>
                <div className='col-md-1'></div>
                <div className='col-md-4'>
                    <p className='h6 text-branding'>PURPOSE</p>
                    <p className='h2 font-weight-bold'>Our Promise To You</p>
                    <ul style={{ listStyleType: 'square' }}>
                        <li className='mission-list-items'>
                            Providing 100% done-for-you real estate services to
                            existing and aspiring property investors.
                        </li>
                        <li className='mission-list-items'>
                            Delivering simplified quality information to the
                            mobile phones of every property investor using
                            technology.
                        </li>
                        <li className='mission-list-items'>
                            Engaging green architecture that revitalizes every
                            soul occupying the space.
                        </li>
                    </ul>
                    <button
                        className='btn'
                        style={{ color: '#fff', marginBottom: '10%' }}
                    >
                        Learn more...
                    </button>
                </div>
                <div className='col-md-1'></div>
                <div className='col-md-4'>
                    <div style={{}}>
                        <img
                            src='https://www.florahomesgc.com/images/aaa.jpg'
                            className='image-width shadow'
                            alt=''
                            style={{
                                width: '100%',
                                height: '60vh',
                                borderRadius: '50%',
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MissionStatement
