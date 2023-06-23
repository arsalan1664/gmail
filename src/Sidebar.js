import React from 'react'
import "./Sidebar.css"
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import SidebarOption from './SidebarOption';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NoteIcon from '@mui/icons-material/Note';


function Sidebar (){
    return(
        <div className="sidebar">
            <Button startIcon={<AddIcon fontSize='Large'/> } className="sidebar__compose">Compose</Button>

            <SidebarOption Icon={<InboxIcon/>} title='Inbox' number={56} selected={true}/>
            <SidebarOption Icon={<StarIcon/>} title='Stared' number={22}/>
            <SidebarOption Icon={<AccessTimeIcon/>} title='Snoozed' number={12}/>
            <SidebarOption Icon={<LabelImportantIcon/>} title='Important' number={36}/>
            
            <SidebarOption Icon={<NearMeIcon/>} title='Sent' number={7}/>
            <SidebarOption Icon={<NoteIcon/>} title='Draft' number={16}/>
            <SidebarOption Icon={<ExpandMoreIcon/>} title='More' number={68}/>
        </div>
    )
}

export default Sidebar