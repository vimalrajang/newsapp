import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import InputField from '../../Components/InputField/InputField';
import { LoginBox, Form, InputControl, SubmitButton,ErrorText,InputControlbtn } from '../../Css/styledComponents'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const validEmailRegex = RegExp(
    /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i
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
    // console.log(formState)
  }
  var nav=useNavigate(); 
  const HandleSubmit = (event: any) => {
    event.preventDefault();
    
    if (validateForm(formState.errors) && formState.password1 == formState.password2) {
      axios.post(`https://localhost:7035/AuthenticateUser/signup`,{
        name: formState.name,
       email: formState.email,
      password: formState.password1
      }).then(res=>{
        console.log(res.data)
        if(res.data.token!=''){
          window.localStorage.setItem("token",res.data.token)
          if(formState.name && formState.email){
            window.localStorage.setItem("name",formState.name)
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
    <ToastContainer/>
  </div>
  )
}

export default SignUp