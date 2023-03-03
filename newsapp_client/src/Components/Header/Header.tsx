import React from 'react'
import { NavLink } from 'react-router-dom'
import {Headers,HeaderWrapper,Logo,Ul,Li,NavLinks} from '../../Css/styledComponents'

  
function Header() {
    var token = window.localStorage.getItem("token")
    var name =  window.localStorage.getItem("name")
    var email =  window.localStorage.getItem("email")

    return (
        <Headers>
            <HeaderWrapper>
                <NavLink to="/">
                <Logo>
                    THE NEWS APP
                </Logo>
                </NavLink>
                <div>
                    <Ul id="menu">
                        <Li><NavLinks to="/">Home</NavLinks></Li>
                        <Li><NavLinks to="/categories">Categories</NavLinks></Li>
                        {
                            (token == 'null' && name == 'null' && email == 'null')?
                            <React.Fragment>
                                <Li><NavLinks to="/login">Login</NavLinks></Li>
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <Li><NavLinks to="/bookmarks">Bookmarks</NavLinks></Li>
                                <Li><NavLinks to="/profile">{name}</NavLinks></Li>
                            </React.Fragment>
                        }
                    </Ul>
                </div>
            </HeaderWrapper>
        </Headers>
    )
}

export default Header