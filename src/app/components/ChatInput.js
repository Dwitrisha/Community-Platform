import React from 'react'
import styled from "styled-components";
import {Button} from "@material-ui/core";
import { db } from '../firebase';
import { useState } from "react";
import firebase from 'firebase';
import { useAuthState} from "react-firebase-hooks/auth";
import { auth} from "../firebase";


function ChatInput({channelName,channelId,chatRef}) {
    const [user, loading] = useAuthState(auth);
    const [input,setInput]=useState("");
    const sendMessage = (e)=> {
        e.preventDefault();
    
        if(!channelId)
        {
            return false;

        }

        db.collection('rooms').doc(channelId).collection('messages').add({
            message:input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            userImage:" https://th.bing.com/th/id/Rab0c4bf05eec30b7bd570ad476760b1f?rik=fME3%2fwAts7TTsA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-jHrJ3VITQf8%2fUDILF_ctbOI%2fAAAAAAAACn4%2fUwOvDmW4EJw%2fs1600%2fCUTE%2bGIRL%2bHAIR%2bFB%2bDP.jpg&ehk=ZPSc9B2dddIYE1O1S9UOwuuojDwYrU7DD48U06gadZk%3d&risl=&pid=ImgRaw",
        });

        chatRef.current.scrollIntoView({
           behavior: "smooth"
        });
        
       setInput("");
    };
    return (<ChatInputContainer>
    <form >
        <input value={input} onChange={e=>setInput(e.target.value)}placeholder={`Message # ${channelName}`}/>
        <Button hidden type='submit' onClick={sendMessage}> 
            SEND
        </Button>
    </form>
    </ChatInputContainer>);
}

export default ChatInput;
const ChatInputContainer=styled.div`
border-radius: 20px;

>form{
    position:relative;
    display:flex;
    justify-content: center;
 
}

>form>input{
    position:fixed;
    bottom:30px;
    width:60%;
    border:1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline:none;
 
}

>form>button{
    display:none !important;
}`;
