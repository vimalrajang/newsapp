import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import InputField from '../../Components/InputField/InputField';
import { LoginBox, Form, InputControl, SubmitButton, ErrorText, InputControlField } from '../../Css/styledComponents'



function Login() {
  const [formState, setFormState] = useState({
    email: null,
    password: null,
    errors: {
      email: false,
      emailMsg:'',
      password: false,
      passwordMsg:'',

    }
  })
  const [subButtonValid, setSubButtonValid] = useState(false)

  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );


  const validateForm = (errors: any) => {
    let valid = true;
    // Object.values(errors).forEach((val:any) => {
    //   val.length > 0 && (valid = false)
    //   console.log(valid)
    // });
    if((errors.password == true && errors.passwordMsg.length>0 ) || (errors.emailMsg.length>0 && errors.email == true)){
      return false
      
    }
    else{
      return true
    }

    // return valid;
  };

  const HandleChange = (event: any) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = formState.errors;

    switch (name) {
      // case 'name': 
      //   errors.name = 
      //     value.length < 5
      //       ? 'Full Name must be at least 5 characters long!'
      //       : '';
      //   break;
      case 'email':
        errors.emailMsg =
          validEmailRegex.test(value)
          ? ''
          : 'Email is not valid!';
        
        errors.email =
          validEmailRegex.test(value)
          ? false
          : true;
        break;
      case 'password':
        errors.passwordMsg =
          (value.length < 8 )
            ? 'Password must be at least 8 characters long!'
            : '';
        errors.password =
          (value.length < 8 )
            ? true
            : false;
        break;
      default:
        break;
    }
    setFormState(prevState => ({ ...prevState, [name]: value, errors }))
    // if(validateForm(formState.errors)){
    //   setSubButtonValid(true)
    // }
    // else{
    //   setSubButtonValid(false)
    // }
    console.log(formState)
  }
  
  const HandleSubmit = (event: any) => {
    event.preventDefault();
    if (validateForm(formState.errors)) {
      console.info('Valid Form')
    } else {
      console.error('Invalid Form')
    }
  }


  return (

    <div>
      <LoginBox>
        <div className="heading">
          <h1 className="text text-large">Login</h1>
          <p className="text text-normal">New user? <span><NavLink to="/signin" className="text text-links">Create an account</NavLink></span>
          </p>
        </div>
        <Form name="signin">
          <InputControl >
            <InputField inputType="email" stateName="email" valueState={formState.email} placeHolder="Email" Id="email" handleChange={HandleChange} />
          </InputControl>
          {(formState.errors.emailMsg.length > 0 && formState.errors.email == true) ? <ErrorText>{formState.errors.emailMsg}</ErrorText> : null}
          <InputControl className="input-control">
            <InputField inputType="password" stateName="password" valueState={formState.password} placeHolder="Password" Id="password" handleChange={HandleChange} />
          </InputControl>
          {(formState.errors.passwordMsg.length > 0 && formState.errors.password == true) ? <ErrorText>{formState.errors.passwordMsg}</ErrorText> : null}
          <InputControl className="input-control">
            <a href="#" className="text text-links">Forgot Password</a>
            <SubmitButton type="submit" name="submit" className="input-submit" value="Login" onClick={HandleSubmit}
            // disabled={!subButtonValid} 
            />
          </InputControl>
        </Form>
      </LoginBox>
    </div>
  )
}

export default Login