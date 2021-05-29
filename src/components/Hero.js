import React from 'react'
import styled from 'styled-components'

function Hero() {
    return (
        <Container>
            <HeroContainer>
                <h2>LAST CALL</h2>
                <h2>UP TO 75% OFF SELECT STYLES</h2>
                <a className='button-primary-white'>SHOP NOW</a>
                <h3>APOLLO - DRESS TO IMPRESS</h3>
                <h3>SINCE - 1997</h3>
            </HeroContainer>
        </Container>
    )
}

export default Hero

const Container = styled.div`
    background: url('./images/mobile-hero-image5.jpg') no-repeat;
    background-position: center top;
    background-size: cover;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-itmes: center;

    @media only screen and (min-width: 992px) {
        background: url('./images/desktop-hero-image3.jpg');
    }
`

const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.4rem;
    text-align: center;
    
    a {
        margin-top: 1rem;
    }

    h3 {
        display: none;
    }
`

const CTA = styled.button`

`