import { Avatar } from '@material-ui/core'
import React, {useState, useEffect } from 'react'
import './SidebarChat.css'
import db from './firebase'
import { Link } from 'react-router-dom';
function SidebarChat({id,name, addNewChat }) {
    const [seed ,setseed] = useState('');

    useEffect(() => {
        setseed(Math.floor(Math.random() * 5000))
    },[]);

const createChat = () => {
    const roomName = prompt("please enter name for chat");

    if(roomName){
        
        db.collection("rooms").add({
            name: roomName,
        });

    }
};



    return !addNewChat ? (
        <Link to ={`/rooms/${id}`}>
        <div className="sidebar__Chat">
           <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
           <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>Last message..</p>
           </div>
        </div>
    </Link>
    ):
       ( <div onClick={createChat}
         className="sidebar__Chat">
             <h2>Add new chat</h2>
            

        </div>);
}

export default SidebarChat
