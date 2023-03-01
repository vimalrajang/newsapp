import React from 'react'
import {Headers,HeaderWrapper,Logo,Ul,Li,NavLinks} from '../../Css/styledComponents'

  
function Header() {
    return (
        <Headers>
            <HeaderWrapper>
                <Logo>
                    THE NEWS APP
                </Logo>
                <div>
                    <Ul id="menu">
                        <Li><NavLinks to="/">Home</NavLinks></Li>
                        <Li><NavLinks to="/categories">Categories</NavLinks></Li>
                        <Li><NavLinks to="/bookmarks">Bookmarks</NavLinks></Li>
                        <Li><NavLinks to="/login">Login</NavLinks></Li>
                    </Ul>
                </div>
            </HeaderWrapper>
        </Headers>
    )
}

export default Header