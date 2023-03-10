import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ErrorText = styled.span`
color: red;
display: inline-block;
`
export const SourceName = styled.div`
  color: black;
    display: block;
    font-size: 0.7em;
    letter-spacing: 1px;
    text-transform: uppercase;
    opacity: 0.4;
`
export const H1Center = styled.h1`
text-align: center;
`
export const PublisedTime = styled.div`
  color: black;
    display: block;
    font-size: 0.7em;
    letter-spacing: 1px;
    text-transform: uppercase;
    float: left;
    opacity: 0.4;
`
export const LoginBox = styled.div`
  max-width: 28rem;
  width: 100%;
  margin: 2rem auto;
  padding: 2rem 2.5rem;
  border: none;
  outline: none;
  border-radius: 0.35rem;
  color: black;
  background: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
		0 4px 6px -2px rgba(0, 0, 0, 0.05);
`
export const InputControlField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`
export const InputControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`
export const InputControlbtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
`
export const Form = styled.form`
  width: 100%;
  height: auto;
  margin-top: 2rem;
`

export const SubmitButton = styled.input`
      font-family: inherit;
      font-size: 1rem;
      font-weight: 500;
      line-height: inherit;
      cursor: pointer;
      min-width: 40%;
      height: auto;
      padding: 0.65rem 1.25rem;
      border: none;
      outline: none;
      border-radius: 2rem;
      color: white;
      background: black;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
		0 2px 4px -1px rgba(0, 0, 0, 0.06);
      text-transform: uppercase;
      letter-spacing: 1px;
      &:disabled{
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    border: none;
    cursor: not-allowed;
    }
`
export const ListWrapper = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;

`
export const ListIconWrapper = styled.div`
margin: 5px 3px;
cursor: pointer;
`
export const ListIconsWrapper = styled.div`
padding: 10px;
display: flex;
float: right;
`
export const ListHeader = styled.h2`
color: black;
`
export const ListDescription = styled.div`
`
export const ListImgContainer = styled.div`
   position: relative;
    overflow: hidden;
    isolation: isolate;
    aspect-ratio: 16 / 9;
    width: 20rem;
`
export const ListContentWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`
export const ListImg = styled.img`
 

        width: 100%;
    height: 100%;
    object-fit: cover;
`
export const CardImgContainer = styled.div`
    width: 100%;
    position: relative;
    overflow: hidden;
    isolation: isolate;
    aspect-ratio: 16 / 9;
    &::before{
      content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 0;
    z-index: 1;
    }
`
export const CardTags = styled.div`
   position: absolute;
    inset: 10px 10px auto 10px;
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    color: white;
    gap: 0.25em;
    opacity: 0;
    transition: 250ms ease-in-out;
`
export const Cards = styled.div`
     display: grid;
    position: relative;
    width: min(100% - 1rem, 380px);
    background-color: rgb(250,250,250);
    overflow: hidden;
    border-radius: 0.8em;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
		0 2px 4px -1px rgba(0, 0, 0, 0.06);
    margin: auto;
    &:is(:hover,:focus){
      transform: translateY(-5px);
      box-shadow: 0px 10px 8px rgba(0, 0, 0, 0.1);
    }
    &:focus-visible{
      outline: 2px dashed;
    outline-offset: 0.4em;
    }
    &:is(:focus,:hover) ${CardImgContainer} {
      &::before{
        opacity: 1;
      }
    }
    &:is(:focus,:hover) ${CardTags}{
    opacity: 1;
    }
`

export const CardTag = styled.div`
   display: inline-block;
    padding: 0.1em 0.5em;
    font-size: 14px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.6);
    color: 250ms ease-in-out;
    border-radius: 5px;
    z-index: 2;
`
export const CardImg = styled.img`
  width: 100%;
    height: 100%;
    object-fit: cover;
`
export const CardBody = styled.div`
  padding: 1em 1.5em;
  
`
export const CardTitle = styled.h5`
    margin: 0;
  font-size: clamp(1.4rem, 4vw, 1.1rem);
  text-transform: capitalize;
  color: var(--clr-neutral-800);
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
export const Btn = styled.div`
  display: block;
  padding: 10px 25px;
  margin: 0px 10px;
  border-radius: 6px;
  transition: all 0.25s;
  cursor: pointer;
`
export const OutlineBtn = styled(Btn)`
   border: 1px solid $color-dark !important;
    color: $background-color;
    background: var(--white);
    &:hover{
      border: 1px solid $color-dark;
    color: $color-dark !important;
    }
`
export const SolidBtn = styled(Btn)`
  color: rgb(250,250,250) !important;
    background: black !important;
    &:hover{
    background: $background-color !important;

    }
`
export const Headers = styled.header`
    background: black;
    color: rgb(250, 250, 250) !important;
    height: 60px;
    line-height: 60px;
    width: 100vw;
    z-index: 10;
`
export const HeaderWrapper = styled.div`
      margin: auto;
    text-align: center;
    width: 70%;
`
export const Logo = styled.div`
    float: left;
    margin-left: 28px;
    font-size: 1.5em;
    height: 60px;
    color: white;
    letter-spacing: 1px;
    text-transform: uppercase;
`
export const Ul = styled.ul`
    display: inline-block;
    float: right;
    list-style: none;
    /* margin-right: 14px; */
    margin-top: -2px;
    text-align: right;
    transition: transform 0.5s ease-out;
    -webkit-transition: transform 0.5s ease-out;
`
export const Li = styled.li`
    display: inline-block;
  `
export const H3Center = styled.h3`
text-align: center;
text-transform: uppercase;
`
export const H2Center = styled.h3`
text-align: center;
`
export const HighlightBox = styled.div`
   max-width: 70rem;
  width: 100%;
  margin: 2rem auto;
  padding: 1.5rem 2rem;
  border: none;
  outline: none;
  border-radius: 0.35rem;
  color: black;
  background: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
		0 4px 6px -2px rgba(0, 0, 0, 0.05);
`
export const ListBox = styled.div`
   max-width: 70rem;
  width: 100%;
  margin: 2rem auto;
  padding: 1.5rem 2rem;
  border: none;
  outline: none;
  border-radius: 0.35rem;
  color: black;
  background: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
		0 4px 6px -2px rgba(0, 0, 0, 0.05);
`
export const CardBtnWrapper = styled.div`
display: flex;
justify-content: space-between;
`
export const Input = styled.input`
font-family: inherit;
font-size: 1rem;
font-weight: 400;
line-height: inherit;
width: 100%;
height: auto;
padding: 0.75rem 1.25rem;
border: none;
outline: none;
border-radius: 2rem;
color: black;
background: #f1f5f9;
`
export const NavLinkLogo = styled(NavLink)`
color:white;
`
export const NavLinks = styled(NavLink)`
    color: rgb(250, 250, 250);
    display: block;
    font-size: 0.7em;
    height: 50px;
    letter-spacing: 1px;
    margin: 0 20px;
    padding: 0 4px;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.5s ease;
    -webkit-transition: all 0.5s ease;
  `