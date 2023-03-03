import React, { useState } from 'react'
import InputField from '../../Components/InputField/InputField'
import { LoginBox, Form, InputControl, SubmitButton, ErrorText, InputControlField, H1Center, InputControlbtn, H3Center } from '../../Css/styledComponents'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Profile() {

  var name = window.localStorage.getItem("name")
  var email = window.localStorage.getItem("email")
  const [formState, setFormState] = useState({ oldPassword: "", newPassword1: "", newPassword2: "" })
  var token = window.localStorage.getItem("token")

  const HandleChange = (e: any) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }))
  }
  const nav = useNavigate();
  const HandlePasswordChange = () => {
    if(formState.oldPassword == "" || formState.newPassword1 == "" || formState.newPassword2 == ""){
      console.log(formState)
      toast.warning("input field is empty", {
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
    else{
      // { headers: {"Authorization" : `Bearer ${token}`} },
      const header = {
        'Authorization':  `Bearer ${token}`
      }
      axios.post("https://localhost:7035/AuthorizeUser/changepassword",
        {
          oldPassword: formState.oldPassword,
          newPassword1: formState.newPassword1,
          newPassword2: formState.newPassword2
        },
        {headers:header}
      ).then(res=>{
        toast.success(res.data, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          formState.newPassword1 = ""
          formState.newPassword2 = ""
          formState.oldPassword = ""
      })
    }
  }
  const HandleLogout = () => {
    window.localStorage.setItem("token","null")
    window.localStorage.setItem("name","null")
    window.localStorage.setItem("email","null")
    nav("/");
    window.location.reload();
  }
  return (
    <LoginBox>
      <div >
        <H1Center >Profile</H1Center>
        <InputControlbtn>
          <b> Name </b> : {name}
        </InputControlbtn>
        <InputControlbtn>
          <b> Email </b> : {email}
        </InputControlbtn>

        <H3Center>Change Password</H3Center>

        <InputControl className="input-control">
          <InputField inputType="password" stateName="oldPassword" valueState={formState.oldPassword} placeHolder="Old Password" Id="oldPassword" handleChange={HandleChange} />
        </InputControl>

        <InputControl className="input-control">
          <InputField inputType="password" stateName="newPassword1" valueState={formState.newPassword1} placeHolder="New Password" Id="newPassword1" handleChange={HandleChange} />
        </InputControl>

        <InputControl className="input-control">
          <InputField inputType="password" stateName="newPassword2" valueState={formState.newPassword2} placeHolder="Confirm New Password" Id="newPassword2" handleChange={HandleChange} />
        </InputControl>

        <InputControlbtn className="input-control">
          <SubmitButton type="submit" name="changePassword" value="Change Password" onClick={HandlePasswordChange} />
        </InputControlbtn>

      </div>
      <InputControlbtn className="input-control">
        <SubmitButton type="submit" name="logut" value="Logout" onClick={HandleLogout} />
      </InputControlbtn>
    <ToastContainer/>
    </LoginBox>
  )
}

export default Profile