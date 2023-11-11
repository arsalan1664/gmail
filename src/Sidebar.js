import React from 'react';
import "./Sidebar.css";
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
import { IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import { useDispatch } from 'react-redux';
import { openSendMessge } from './features/mail/mailSlice';

function Sidebar() {
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(openSendMessge());
    };

    return (
        <div className="sidebar">
            <Button onClick={handleClick} startIcon={<AddIcon fontSize='large' />} className="sidebar__compose">Compose</Button>

            <SidebarOption Icon={<InboxIcon />} title='Inbox' number={56} selected={true}/>
            <SidebarOption Icon={<StarIcon />} title='Stared' number={22}/>
            <SidebarOption Icon={<AccessTimeIcon />} title='Snoozed' number={0}/>
            <SidebarOption Icon={<LabelImportantIcon />} title='Important' number={0}/>
            
            <SidebarOption Icon={<NearMeIcon />} title='Sent' number={7}/>
            <SidebarOption Icon={<NoteIcon />} title='Draft' number={16}/>
            <SidebarOption Icon={<ExpandMoreIcon />} title='More' number={68}/>

            <div className='sidebar__footer'>
                <div className='sidebar__footerIcon'>
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                        
                    <IconButton>
                        <DuoIcon />
                    </IconButton>

                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
