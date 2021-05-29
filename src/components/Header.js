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
                    <span>Home</span>
                </a>
                <a>
                    <span>Home</span>
                </a>
                <a>
                    <span>Home</span>
                </a>
                <a>
                    <span>Home</span>
                </a>
                <a>
                    <span>Home</span>
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
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;

`

const LogoContainer = styled.div`
    padding-left: 4rem;
`
const MenuContainer = styled.div`
    display: none;
`

const MobileMenuContainer = styled.div`
    padding-right: 4rem;
`