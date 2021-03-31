import { red } from "@material-ui/core/colors";
import React from "react";
import styled from "styled-components";
import SidebarOption from "./SidebarOption"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import AddIcon from '@material-ui/icons/Add';
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase"
import { auth, provider } from '../firebase';
import {useAuthState} from "react-firebase-hooks/auth";

function Sidebar(){
    const [channels]= useCollection(db.collection("rooms"));
    const[user] = useAuthState(auth);
    return(

     <SideBarContainer>
<SideBarHeader>
<SideBarInfo>
    <h2>Hi {user.displayName}</h2>
   <h3><FiberManualRecordIcon/>{user.displayName}
   </h3> 

</SideBarInfo>
<CreateIcon/>
</SideBarHeader>

<SidebarOption Icon={InsertCommentIcon} title="Threads"/>
<SidebarOption Icon={InboxIcon} title="Mentions & reactions"/>
<SidebarOption Icon={DraftsIcon} title="Saved Items"/>
<SidebarOption Icon={BookmarkBorderIcon} title="Channel Browser"/>
<SidebarOption Icon={PeopleAltIcon} title="People & User Groups"/>
<SidebarOption Icon={AppsIcon} title="Apps"/>
<SidebarOption Icon={FileCopyIcon} title="Browse File"/>
<SidebarOption Icon={ExpandLessIcon} title="Show Less"/>
<hr/>
<SidebarOption Icon={ExpandMoreIcon} title="Channels"/>

   <hr/>
   <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel"/>
 
   {channels?.docs.map((doc) => (
       <SidebarOption
        key={doc.id}
         id={doc.id} 
         title= {doc.data().name}
         />
   ))}
     </SideBarContainer>

    )}

    export default Sidebar;

    const SideBarContainer = styled.div`
    background-color: var(--app-color);
    color:black;
    flex:0.2;
    border-top:1px solid  var(--app-color);
   
    margin-top:60px;
   

    `;

    const SideBarHeader = styled.div`
    display:flex;
    border-bottom: 1px solid var(--app-color);
    padding :13px;
    
    >.MuiSvgIcon-root{
   padding:8px;
   color:var(--app-color);
   font-size:18px;
   background-color:white;
   border-radius:999px;

    }`;

    const SideBarInfo = styled.div`
    flex:1;
    
    >h2{
        font-size:15px;
        font-weight:900;
        margin-bottom:5px;

    }
    
    >h3{
        display:flex;
        font-size:13px;
        font-weight:400;
        align-items:center;
    }
    
    
    >h3> .MuiSvgIcon-root{
        font-size: 14px;
        margin-top: 1px;
        margin-right:2px;
        color:green; 

    }`;