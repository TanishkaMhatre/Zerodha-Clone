import React from 'react';

function Hero() {
    return (
        <div className='container mb-5 py-5'>
            <div className='row text-center'>
                <h1 className='mb-3'>Open a free demat & trading account online</h1>
                <p className='text-muted mb-5'>
                    Start investing brokerage free and join a community of 1.6+ crore investors and traders
                </p>

                <div className='col-6 mb-4'>
                    <img src='/Media/account_open.svg' alt='' className='img-fluid' />
                </div>

                <div className='col-6 d-flex flex-column align-items-center justify-content-center'>
                    <div
                        className='w-100'
                        style={{
                            maxWidth: '450px',
                            padding: '40px 30px',
                            backgroundColor: '#f8f9fa',
                            borderRadius: '12px'
                        }}
                    >
                        <h3 className='mb-4' style={{ fontSize: '1.6rem' }}>Signup now</h3>
                        <div className='input-group mb-4'>
                            <span className='input-group-text'>
                                <img src='https://flagcdn.com/w40/in.png' alt='India Flag' style={{ width: '24px' }} /> +91
                            </span>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter your mobile number'
                            />
                        </div>
                        <button className='btn btn-primary w-100 mb-3'>Get OTP</button>
                        <small className='text-muted'>
                            By proceeding, you agree to the Zerodha <a href='#'>terms</a> & <a href='#'>privacy policy</a>
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
