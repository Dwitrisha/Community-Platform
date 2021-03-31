import React from 'react'
import styled from "styled-components";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ChatInput from "./ChatInput";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { useDocument, useCollection} from "react-firebase-hooks/firestore";
import { selectRoomId } from "../features/appSlice";
import { db } from '../firebase';
import firebase from 'firebase';
import Message from "./Message"


function Chat() {
const chatRef= useRef(null);
    const roomId= useSelector(selectRoomId);
const [roomDetails]=useDocument(
    roomId && db.collection('rooms').doc(roomId)
)

const [roomMessages,loading]=useCollection(
    roomId && db.collection("rooms").doc(roomId).collection("messages").orderBy("timestamp","asc")
);

useEffect(() => {
chatRef?.current?.scrollIntoView({
    behaviour:"smooth",
});

}, [roomId,loading])

    return <ChatContainer>
        {roomDetails && roomMessages && ( <> 
      <Header>
  
            <HeaderLeft>
            <h4><strong>#{roomDetails?.data().name}</strong>  <StarBorderIcon/> </h4>
          
            </HeaderLeft>

            <HeaderRight>
              <p>
                  <HelpOutlineIcon/>Details
              </p>
            </HeaderRight>
      </Header>
      <ChatMessages>
{roomMessages?.docs.map((doc)=>{
const{message,timestamp,user,userImage} = doc.data();

return(
    <Message 
    key={doc.id}
    message={message}
    timestamp={timestamp}
    user={user}
    userImage={userImage}
    />
);
})}

<ChatBottom ref={chatRef}/>
      </ChatMessages>
      <ChatInput
      chatRef={chatRef}
      channelName={roomDetails?.data().name}
      channelId={roomId}
      />
      </>)}
     
    </ChatContainer>;
}

export default Chat



const Header = styled.div` 
display:flex;
justify-content:space-between;
padding:20px;
border-bottom:1px solid lightgray;`;

const HeaderLeft = styled.div`
align-items:center;
>h4{
    display:flex;
    text-transform:lowercase;
    margin-right:10px;
}

    >h4>.MuiSvgIcon-root{
        margin-left: 7px;
        font-size:23px;
    }
`;
const HeaderRight = styled.div` 

>p{
    display:flex;
    align-items:center;
    font-size:16px;
    font-weight:500;
    margin-left:0.5rem;
}`;

const ChatContainer = styled.div`
flex:0.9;
overflow-y:scroll;
margin-top:60px;`;

const ChatMessages = styled.div`
margin-top:20px`;

const ChatBottom = styled.div`
padding-bottom:200px;`;