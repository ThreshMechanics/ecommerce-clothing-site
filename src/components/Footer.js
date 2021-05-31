import React from 'react'
import styled from 'styled-components'
import Newsletter from './Newsletter'
import { FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa'

function Footer() {
    return (
        <Container>
            <AboutContainer>
                <h3>ABOUT US</h3>
                <p>We craft affordable and high-quality menswear</p>
                <FaFacebookF className='footer-icon facebook-icon' />
                <FaTwitter className='footer-icon twitter-icon' />
                <FaInstagram className='footer-icon instagram-icon' />
            </AboutContainer>
            <ServicesContainer>
                <h3>SERVICES</h3>
                <a>
                    <span>Contact Us</span>
                </a>
                <a>
                    <span>Returns and Exchanges</span>
                </a>
                <a>
                    <span>Terms and Conditions</span>
                </a>
                <a>
                    <span>Privacy</span>
                </a>
                <a>
                    <span>Help</span>
                </a>
            </ServicesContainer>
            <NewsletterContainer>
                <h3>NEWSLETTER</h3>
                <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
                <div>
                    <input type="email" aria-label="Enter your email" placeholder="Enter your email" required="" />
                    <a>SUBSCRIBE</a>
                </div>
            </NewsletterContainer>
        </Container>
    )
}

export default Footer

const Container = styled.div`
    height: 40rem;
    display: flex;
    flex-direction: column;
    h3 {
        margin-bottom: 1rem;
    }
    @media only screen and (min-width: 992px) {
        flex-direction: row;
        height: 25rem;
        border-top: 2px groove #b1b0b0;
        margin-top: 1rem;
    }
`
const AboutContainer = styled.div`
    margin-top: 2rem;
    padding: 2rem;
    p {
        margin-bottom: 1rem;
    }
    
    @media only screen and (min-width: 992px) {
        width: 33%;
    }
`

const ServicesContainer = styled.div`
    margin-top: 2rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;

    a{
        margin-top: 1rem;
        cursor: pointer;
    }

    @media only screen and (min-width: 992px) {
        width: 33%;
    }
`

const NewsletterContainer = styled.div`
    margin-top: 2rem;
    padding: 2rem;
    input {
        margin-top: 1rem;
        width: 45%;
    }
    a {
        text-align: center;
        padding: 14px;
        height: 50%;
        color: white;
        background-color: #161616; 
        margin-left 1rem;
        cursor: pointer;
    }

    @media only screen and (min-width: 992px) {
        width: 33%;
    }
`
