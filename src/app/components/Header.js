import { red } from "@material-ui/core/colors";
import React from "react";
import styled from "styled-components";
import {Avatar} from "@material-ui/core"
import AccessTimeIcon from "@material-ui/icons/AccessTime"
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'; 
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../firebase";
function Header()
{
    const[user] = useAuthState(auth);
    return (<HeaderContainer>
        {/*Header left*/}
<HeaderLeft>
<HeaderAvatar  
src={user?.photoUrl}
alt={user.displayName}
/>
<AccessTimeIcon/>
</HeaderLeft>

         {/*Header Search*/}
<HeaderSearch>
    <SearchIcon/>
    <input placeholder="SEARCH" type="text"/>
</HeaderSearch>
        <HeaderRight>
 <HelpOutlineIcon/>
            </HeaderRight>
    </HeaderContainer>
    );
}

export default Header;
const HeaderSearch=styled.div`
flex:0.4;
opacity:1;
border-radius:6px;
background-color:var(--app-color);
text-align: center;
display:flex;
padding:0 50px;
color:white;
border:2px white solid;
margin:0.5rem;
>input{
    background-color:transparent;
    border:none;
    text-align:center;
    min-width:30vw;
    outline:0;
}
`;

const HeaderContainer = styled.div`
display:flex;
position:fixed;
width:100%;
align-items:center;
justify-content:space-between;
padding:10px 0;
background-color: var(--app-color);
`;
const HeaderLeft = styled.div`
flex:0.3;
display:flex;
align-items:center;
margin-left:20px;

>.MuiSvgIcon-root{
    margin-left:auto;
    margin-right: 30px;
}

`;

const HeaderAvatar= styled(Avatar)`
cursor:pointer;
:hover{
    opacity:0.5 ;
}`

const HeaderRight= styled.div` 
flex:0.3;
display:flex;
align-items: flex-end;

>MultiSvgIcon-root{
    margin-left:auto;
    margin-right:20px;
}
`;
