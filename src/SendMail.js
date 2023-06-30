import React from 'react'
import './SendMail.css'
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';

function SendMail() {
  
  const {register, handleSubmit} = useForm();

  const onSubmit = (formData) => {
    console.log(formData)
  }
  

  return (
    <div className='sendMail'>
        <div className='sendMail__header'>
            <h3>New Message</h3>
            <CloseIcon className='sendMail__headerClose'/>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
            <input name='to' placeholder='To' type='text' ref={register('to',{required:true})}/>
            <input name='subject' placeholder='Subject' type='text' ref={register('subject',{required:true})}/>
            <input name='message' placeholder='Message..' type='text' ref={register('message',{required:true})} className='sendMail__message'/>

            <div className='sendMail__formButton'>
                <Button variant='contained' color='primary' type='submit' className='sendMail__formSend'>Send</Button>
            </div>
        </form>
    </div>
  )
}

export default SendMail