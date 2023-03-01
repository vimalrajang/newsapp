import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import InputField from '../../Components/InputField/InputField';


const LoginBox = styled.div`
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
const InputControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
`
const Form = styled.form`
  width: 100%;
  height: auto;
  margin-top: 2rem;
`

const SubmitButton = styled.input`
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
      background: blue;
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
function SignUp() {
  return (
    <div>
    <LoginBox>
      <div className="heading">
        <h1 className="text text-large">Sign Up</h1>
        <p className="text text-normal">Existing user? <span><NavLink to="/login" >Login</NavLink></span>
        </p>
      </div>
      <Form name="signup">
        <InputControl >
          <InputField InputType="text" StateName="name" PlaceHolder="Name" Id="name" />
        </InputControl>
        <InputControl >
          <InputField InputType="email" StateName="email" PlaceHolder="Email" Id="email" />
        </InputControl>
        <InputControl className="input-control">
          <InputField InputType="password" StateName="password1" PlaceHolder="Create Password" Id="password" />
        </InputControl>
        <InputControl className="input-control">
          <InputField InputType="password" StateName="password2" PlaceHolder="Confirm Password" Id="password" />
        </InputControl>
        <InputControl className="input-control">
          <SubmitButton type="submit" name="submit" className="input-submit" value="Sign Up"  />
        </InputControl>
      </Form>
    </LoginBox>
  </div>
  )
}

export default SignUp