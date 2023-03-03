import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import List from '../../Components/List/List'
import { H2Center } from '../../Css/styledComponents'

function Bookmark() {
  const nav = useNavigate();
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
        if(res.data != "valid") {
          nav("/")
        window.location.reload();
          
        }
      })
    }else{
      nav("/")
    window.location.reload();

    }
  },[])
  return (
        <div>
            <H2Center>BOOKMARKS</H2Center>
            {/* <List/>
            <List/>
            <List/>
            <List/>
            <List/> */}
        </div>
  )
}

export default Bookmark