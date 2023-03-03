import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import InputField from '../../Components/InputField/InputField';
import { LoginBox, Form, InputControl, SubmitButton, ErrorText, InputControlField, InputControlbtn } from '../../Css/styledComponents'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

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
  const nav = useNavigate();
  const validEmailRegex = RegExp(
    /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i
  );
    useEffect(()=>{
      var token = window.localStorage.getItem("token");
      var name = window.localStorage.getItem("name");
      var email = window.localStorage.getItem("email");
      if(token != "null"||name!="null"||email!="null"){
        const header = {
          'Authorization':  `Bearer ${token}`
        }
        axios.get("https://localhost:7035/AuthorizeUser/isuservalid",
          {headers:header}
        ).then(res=>{
          if(res.data == "valid") {
            nav("/")
    window.location.reload();

          }
        })
      }
    },[])

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
      axios.post(`https://localhost:7035/AuthenticateUser/login`,{
      email: formState.email,
      password: formState.password
      }).then((res:any)=>{
        console.log(res.data)
        if(res.data.token!=''){
          window.localStorage.setItem("token",res.data.token)
          if(formState.email){
            window.localStorage.setItem("name",res.data.name)
            window.localStorage.setItem("email",formState.email)
          }
          toast.success(res.data.message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            nav("/");
            window.location.reload();

        }
        else{

        toast.info(res.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        }

      })
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
          <InputControlbtn className="input-control">
            <SubmitButton type="submit" name="submit" className="input-submit" value="Login" onClick={HandleSubmit}
            // disabled={!subButtonValid} 
            />
          </InputControlbtn>
        </Form>
      <ToastContainer/>
      </LoginBox>
    </div>
  )
}

export default Login