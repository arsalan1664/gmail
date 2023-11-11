import React, { useEffect, useState } from 'react'
import './EmailList.css'
import { Checkbox, IconButton } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import { Inbox } from '@mui/icons-material';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Section from './Section'
import EmailRow from './EmailRow';
import { Query } from './Query';
import { onSnapshot } from 'firebase/firestore';

function EmailList() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [emails, setEmails] = useState([]);

    useEffect(() => {
       const q = Query();
       const unsub = onSnapshot(q, (snapshot) => {
           setEmails(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data()})))
       })
    }, [])
  return (
    <div className='emailList'>
        <div className='emailList__setting'>
            <div className='emailList__settingLeft'>
                <Checkbox {...label} />
                <IconButton>
                    <ArrowDropDownIcon/>
                </IconButton>
                <IconButton>
                    <RedoIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>
            <div className='emailList__settingRight'>
                <IconButton>
                    <ChevronLeftIcon/>
                </IconButton>
                <IconButton>
                    <ChevronRightIcon/>
                </IconButton>
                <IconButton>
                    <KeyboardHideIcon/>
                </IconButton>
                <IconButton>
                    <SettingsIcon/>
                </IconButton>

            </div>
            </div>
            <div className='emailList__sections'>
                <Section Icon={<Inbox/>} title='Primary' color='red' selected/>
                <Section Icon={<PeopleIcon/>} title='Social' color='#1A73E8' />
                <Section Icon={<LocalOfferIcon/>} title='Promotion' color='green' />
            </div>

            <div className="emailList__list">
                {emails.map(email => (
                    <EmailRow 
                        key={email.id}
                        title={email.data.to}
                        subject={email.data.subject}
                        discription={email.data.message}
                        time={(email.data.timestamp.toDate()).toUTCString()}
                    />
                ))}
            </div>
        
    </div>
  )
}

export default EmailList