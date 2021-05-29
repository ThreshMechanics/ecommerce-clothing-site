import React from 'react'
import styled from 'styled-components'

function Newsletter() {
    return (
        <Container>
            <NewsletterContainer>
                <h5>JOIN NEWSLETTER</h5>
                <div>
                    <input type="email" aria-label="Enter your email" placeholder="Enter your email" required="" />
                    <a>SUBSCRIBE</a>
                </div>
            </NewsletterContainer>
        </Container>

    )
}

export default Newsletter

const Container = styled.div`
    background-color: #f5f5f5;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
`

const NewsletterContainer = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    h5 {
        width: 30%;
        font-size: 1rem;
        text-align: center;
        margin-right: 2rem;
    }
    div {
        display: flex;
        flex-direction: column;
    }
    input {
        padding: 14px;
        border: 1px solid #dddddd;
        background: transparent;
        height: 50%;
        width: 100%;
        margin-bottom: .8rem;
        margin-left: 2rem;
    }
    a {
        text-align: center;
        padding: 14px;
        height: 50%;
        color: white;
        background-color: #161616; 
        width: 100%;
        margin-left: 2rem;
    }
`