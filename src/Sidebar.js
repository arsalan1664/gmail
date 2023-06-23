import React from 'react'
import "./Sidebar.css"
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import SidebarOption from './SidebarOption';
import InboxIcon from '@mui/icons-material/Inbox';


function Sidebar (){
    return(
        <div className="sidebar">
            <Button startIcon={<AddIcon fontSize='Large'/> } className="sidebar__compose">Compose</Button>

            <SidebarOption Icon={<InboxIcon/>} title='Inbox' number={12}/>
        </div>
    )
}

export default Sidebar