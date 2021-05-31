import React from 'react'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

function Trending(props) {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }
    return (
        <Containing>
            <h2>TRENDING</h2>
            <Div>
                <Container>
                    <Carousel {...settings}>
                        <Wrap>
                            <a>
                                <img src='./images/green-suit-trending-mobile.jpg' alt=''/>
                                <h3>Men's Custom Green Suit</h3>
                            </a>
                            <h2>$359</h2>
                        </Wrap>
                        <Wrap>
                            <a>
                                <img src='./images/shoes-trending-mobile.jpg' alt=''/>
                                <h3>Leather Dress Shoe</h3>
                            </a>
                            <h2>$109</h2>
                        </Wrap>
                        <Wrap>
                            <a>
                                <img src='./images/blue-suit-trending-mobile.jpg' alt=''/>
                                <h3>Men's Custom Blue Suit</h3>
                            </a>
                            <h2>$359</h2>
                        </Wrap>
                        <Wrap>
                            <a>
                                <img src='./images/watch-trending-mobile.jpg' alt=''/>
                                <h3>Men's Leather Watch</h3>
                            </a>
                            <h2>$165</h2>
                        </Wrap>
                    </Carousel>
                </Container>
                <TextContainer>
                        <h2>Choose from our hottest products!</h2>
                        <p>We design and curate the coolest looks with our signature style. Stay up to date with good quality,
                            affordable clothing you wont find anywhere else and be ready for any occasion. </p>
                </TextContainer>
            </Div>
        </Containing>
    )
}

export default Trending

const Containing = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    
    h2 {
        margin: auto;
    }
`
const Div = styled.div`
    @media only screen and (min-width: 992px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media only screen and (min-width: 1400px) {
        height: 85%;
        width: 85%;


    }
`

const TextContainer = styled.div`
    display: none;

    @media only screen and (min-width: 992px) {
        display: block;
        color: black;
        width: 50%;
        margin-left: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h2 {
            margin-bottom: 2rem;
            font-size: 2.3rem;
            width: 80%;
        }

        p {
            width: 80%;
            font-size: 1.4rem;
            margin-top: 1rem;
        }
    }
`

const Container = styled.div`
    overflow: hidden;
    display: flex;
    margin-top: 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    @media only screen and (min-width: 992px) {
        height: 50%;
        width: 50%;
    }
`

const Carousel = styled(Slider)`
    margin-top: 1rem;
    width: 95%;
    margin-bottom: 2rem;

    & > button {
        opacity: 1;
        height: 100%;
        width: 30vw;
        z-index: 2;

        &:hover {
            opacity: 1;
            transition: opacity 0.2s ease;
        }
    }

    ul li button {
        &:before{
            font-size: .8rem;
        }
    }

    .slick-list {
        overflow: initial;
    }

    h3 {
        margin-left: 1rem;
    }

    h2 {
        margin-left: 1rem;
    }

    @media only screen and (min-width: 992px) {
        .slick-next {
            right: -8rem;
        }

        .slick-prev {
            left: -8rem;
        }
    }

`

const Wrap = styled.div`
    border-sizing: border-box;
    cursor: pointer;
    position: relative;

    a {
        border-radius: 4px;
        cursor: pointer;
        display: block;
        poisition: relative;
        padding: 4px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 10px;
    }

`