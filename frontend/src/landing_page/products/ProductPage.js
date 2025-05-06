import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
function ProductPage() {
    return (
        <>

            <Hero />
            <LeftSection imageURL='Media/kite.png'
                productName='Kite'
                productDescription='Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant Ul, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.'
                tryDemo=''
                learnMore=''
                googlePlay=''
                appStrore />

            <RightSection
                imageURL='Media/console.png'
                productName='Console'
                productDescription='The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.'

                learnMore='' />

            <LeftSection imageURL='Media/coin.png'
                productName='Coin'
                productDescription='Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.'
                tryDemo=''
                learnMore=''
                googlePlay=''
                appStrore />

            <RightSection 
            imageURL='Media/kiteconnect.png'
            productName='Kite Connect API'
            productDescription='Build powerful trading platforms and experiences with our super simple HTTP/JSON APls. If you are a startup, build your investment app and showcase it to our clientbase.'

            learnMore=''/>

            <LeftSection imageURL='Media/varsity.png'
                productName='Varsity Mobile'
                productDescription='An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.'
                tryDemo=''
                learnMore=''
                googlePlay=''
                appStrore />

                <p className='text-center'>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>

            
            <Universe />

        </>
    );
}

export default ProductPage;