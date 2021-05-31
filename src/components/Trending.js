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
        <Container>
            <h2>TRENDING</h2>
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
    )
}

export default Trending

const Container = styled.div`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    @media only screen and (min-width: 992px) {
        height: 40%;
        width: 40%;
        margin: auto;
        overflow: initial;
    }
`

const Carousel = styled(Slider)`
    margin-top: 1rem;
    width: 95%;
    margin-bottom: 2rem;

    & > button {
        opacity: 1;
        height: 200%;
        width: 30vw;
        z-index: 1;

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
        
    }

`

const Wrap = styled.div`
    border-sizing: border-box;
    border-radius: 4px;
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
    }

    @media only screen and (min-width: 992px) {

        img {
            
        }
    }
`