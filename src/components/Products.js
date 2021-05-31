import React from 'react'
import styled from 'styled-components'

function Products() {
    return (
        <Container>
            <WatchContainer>
                <h2>Watches</h2>
                <p>$60</p>
                <a className='button-primary-white product-button'>VIEW WATCHES</a>
            </WatchContainer>
            <SuitContainer>
                <img src='' alt='' />
                <h2>MADE-TO-ORDER</h2>
                <h3>SUITING</h3>
                <a className='button-primary-white product-button'>VIEW SUITS</a>
            </SuitContainer>
            <ShoeContainer>
                <img src='' alt='' />
                <h2>SHOES</h2>
                <p>$60</p>
                <a className='button-primary-white product-button'>VIEW SHOES</a>
            </ShoeContainer>
        </Container>
    )
}

export default Products

const Container = styled.div`
    height: 60rem;

    @media only screen and (min-width: 992px) {
        height: 20rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 3rem;
        padding: 0rem 1rem;
    }
`

const WatchContainer = styled.div`
    height: 33%;
    background: url('./images/products-watch.jpg') no-repeat center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 0rem;    

    h2 {
        color: white;
    }
    p {
        color: white;
        font-size: 2rem;
        padding: .3rem 0rem;
    }
    a {
        font-size: .7rem;
    }
    @media only screen and (min-width: 992px) {
        width: 33%;
        height: 100%;
    }
`
const SuitContainer = styled.div`
    height: 33%;
    background: url('./images/products-suit.jpg') no-repeat center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 0rem;
    
    h3{
        color: white;
        padding-top: .3rem;
    }
    h2 {
        color: white;
    }
    p {
        color: white;
        font-size: 2rem;
        padding: .3rem 0rem;
    }
    a {
        margin-top: .8rem;
    }

    @media only screen and (min-width: 992px) {
        width: 33%;
        height: 100%;
    }
`

const ShoeContainer = styled.div`
    height: 33%;
    background: url('./images/products-shoes.jpg') no-repeat center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 0rem;    

    h2 {
        color: white;
    }
    p {
        color: white;
        font-size: 2rem;
        padding: .3rem 0rem;
    }

    @media only screen and (min-width: 992px) {
        width: 33%;
        height: 100%;
    }
`