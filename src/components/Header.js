import React from 'react'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'

function Header() {
    return (
        <Container>
            <LogoContainer>
                <img src='./images/logo.png'/>
            </LogoContainer>
            <MobileMenuContainer>
                <FaBars className='mobile-menu'/>
            </MobileMenuContainer>
            <MenuContainer>
                <a>
                    <span className='home-menu'>Home</span>
                </a>
                <a>
                    <span>Suits</span>
                </a>
                <a>
                    <span>Watches</span>
                </a>
                <a>
                    <span>Shoes</span>
                </a>
                <a>
                    <span>Cart (0)</span>
                </a>
            </MenuContainer>
        </Container>
    )
}

export default Header

const Container = styled.div`
    height: 40px;
    background: transparent;
    position: absolute;
    margin-top: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (min-width: 992px) {
        height: 70px;
    }
`

const LogoContainer = styled.div`
    padding-left: 4rem;
`
const MenuContainer = styled.div`
    display: none;

    @media only screen and (min-width: 992px) {
        width: 40rem;
        display: flex;
        justify-content: space-evenly;
        color: white;
        padding-right: 4rem;

        span {
            cursor: pointer;
        }

        .home-menu{
            text-decoration: underline;
        }
    }
`

const MobileMenuContainer = styled.div`
    padding-right: 4rem;

    @media only screen and (min-width: 992px) {
        display: none;
    }
`