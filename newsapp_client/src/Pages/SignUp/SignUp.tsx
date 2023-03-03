import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import InputField from '../../Components/InputField/InputField';
import { LoginBox, Form, InputControl, SubmitButton,ErrorText,InputControlbtn } from '../../Css/styledComponents'


function SignUp() {
  const [formState, setFormState] = useState({
    email: null,
    name: null,
    password1: null,
    password2: null,
    errors: {
      email: false,
      emailMsg:'',
      name: false,
      nameMsg:'',
      password1: false,
      password1Msg:'',
      password2: false,
      password2Msg:'',

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
    if((errors.password1 == true && errors.password1Msg.length>0 ) || (errors.password2 == true && errors.password2Msg.length>0 ) || (errors.emailMsg.length>0 && errors.email == true)|| (errors.nameMsg.length>0 && errors.name == true)){
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
      case 'name': 
        errors.nameMsg = 
          value.length < 5
            ? 'Name must be at least 5 characters long!'
            : '';
        errors.name = 
          value.length < 5
            ?true
            : false;
        break;
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
      case 'password1':
        errors.password1Msg =
          (value.length < 8 )
            ? 'Password must be at least 8 characters long!'
            : '';
        errors.password1 =
          (value.length < 8 )
            ? true
            : false;
        break;
      case 'password2':
        errors.password2Msg =
          (value.length < 8  )
            ? 'Password must be at least 8 characters long!'
            : '';
        errors.password2 =
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
    
    if (validateForm(formState.errors) && formState.password1 == formState.password2) {
      console.info('Valid Form')
    } else {
      console.error('Invalid Form')
    }
  }
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
          <InputField inputType="text" stateName="name" valueState={formState.name} placeHolder="Name" handleChange={HandleChange} id="name"  />
        </InputControl>
        {(formState.errors.nameMsg.length > 0 && formState.errors.name == true) ? <ErrorText>{formState.errors.nameMsg}</ErrorText> : null}
        
        <InputControl >
          <InputField inputType="email" stateName="email" valueState={formState.email} placeHolder="Email" handleChange={HandleChange} id="email" />
        </InputControl>
        {(formState.errors.emailMsg.length > 0 && formState.errors.email == true) ? <ErrorText>{formState.errors.emailMsg}</ErrorText> : null}

        <InputControl className="input-control">
          <InputField inputType="password" stateName="password1" valueState={formState.password1} placeHolder="Create Password" handleChange={HandleChange} id="password1" />
        </InputControl>
        {(formState.errors.password1Msg.length > 0 && formState.errors.password1 == true) ? <ErrorText>{formState.errors.password1Msg}</ErrorText> : null}
        <InputControl className="input-control">
          <InputField inputType="password" stateName="password2" valueState={formState.password2} placeHolder="Confirm Password" handleChange={HandleChange} id="password2" />
        </InputControl>
        {(formState.errors.password2Msg.length > 0 && formState.errors.password2 == true) ? <ErrorText>{formState.errors.password2Msg}</ErrorText> : null}
        
        <InputControlbtn className="input-control">
          <SubmitButton type="submit" name="submit" className="input-submit" value="Sign Up" onClick={HandleSubmit} />
        </InputControlbtn>
      </Form>
    </LoginBox>
  </div>
  )
}

export default SignUp