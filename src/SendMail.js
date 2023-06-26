import React from 'react'
import './SendMail.css'
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';

function SendMail() {
  return (
    <div className='sendMail'>
        <div className='sendMail__header'>
            <h3>New Message</h3>
            <CloseIcon className='sendMail__headerClose'/>
        </div>

        <form>
            <input name='to' placeholder='To' type='text'/>
            <input name='subject' placeholder='Subject' type='text'/>
            <input name='message' placeholder='Message..' type='text' className='sendMail__message'/>

            <div className='sendMail__formButton'>
                <Button variant='contained' color='primary' type='submit' className='sendMail__formSend'>Send</Button>
            </div>
        </form>
    </div>
  )
}

export default SendMail