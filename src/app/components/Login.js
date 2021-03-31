import React from 'react'
import styled from "styled-components";
import {Button} from "@material-ui/core";
import { auth, provider } from '../firebase';

function Login() {

    const signIn= (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error) =>  alert(error.message));
    };
    return <LoginContainer>
        <LoginInnerContainer>
<img src="https://images.pexels.com/photos/7330104/pexels-photo-7330104.jpeg?cs=srgb&dl=pexels-dwitrisha-saha-7330104.jpg&fm=jpg"/>
       <h1>Sign in to Frenznity</h1> 
       <p>Get in touch @ dwitrisha@gmail.com</p>

       <Button type="submit" onClick={signIn}>Sign in with Google</Button>
       </LoginInnerContainer>
    </LoginContainer>
}

export default Login

const LoginContainer =styled.div`
background-image: linear-gradient(-225deg, #e3fdf5 0%, #ffe6fa 100%);
 
height:100vh;
display:grid;
place-items:center;
`;
const LoginInnerContainer =styled.div`
padding:100px;
text-align:center;
display:grid;
background-image: linear-gradient(rgb(133, 196, 233),rgba(255, 255, 255, 0.836),rgba(255, 255, 255, 0.836), rgba(255, 255, 255, 0.836), rgba(255, 255, 255, 0.836), rgb(133, 196, 233));
border-radius:10px;
box-shadow:0 1px 3px rgba(0,0,0,0.12) , 0 1px 2px rgba(0,0,0,0.24);

>img{
    object-fit:contain;
    height:200px;
  
    margin-bottom:1px;
    margin-left:20%;

}

@media(max-width:900px)
{

    >img{
    object-fit:contain;
    height:150px;
  width:85%;
    margin-bottom:5px;
    margin-left:0;

}

}
>button{
        margin-top: 50px;
        text-transform: inherit !important;
        
        color:white;
        width:270px;
  border-radius: 25px;
  outline: none;
  border: none;
 
  background-size: 200%;
  font-size: 1rem;
  color: #fff;
  text-transform: uppercase;
  margin: 0;
  cursor: pointer;
  transition: 0.5s;
  margin-left: 1rem;
  margin-top: 1rem;
  bottom: 4px;
  left: 0%;
  right: 0%;
  box-shadow: 2px 2px 4px rgb(54, 53, 53);
  background-image: linear-gradient(to right, #5e45a2, #5bcadd, #3292be);
}

>button:hover {
  background-position: right;
}
`;