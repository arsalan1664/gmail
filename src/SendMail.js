import React from 'react';
import './SendMail.css';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { closeSendMessage } from './features/mail/mailSlice';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import db from './firebase';

function SendMail() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (formData) => {
    addDoc(collection(db,'emails'), {
        to: formData.to,
        subject: formData.subject,
        message: formData.message,
        timestamp: Timestamp.now(),
    });
    console.log(formData);
    dispatch(closeSendMessage());
}

  // handleClick() function
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(closeSendMessage());
    return; // Add a return statement
  };

  return (
    <div className='sendMail'>
      <div className='sendMail__header'>
        <h3>New Message</h3>
        <Button onClick={handleClick}>
          <CloseIcon className='sendMail__headerClose' />
        </Button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name='to'
          placeholder='To'
          type='text'
          {...register('to', { required: true })}
        />
        <input
          name='subject'
          placeholder='Subject'
          type='text'
          {...register('subject', { required: true })}
        />
        <input
          name='message'
          placeholder='Message..'
          type='text'
          {...register('message', { required: true })}
          className='sendMail__message'
        />

        <div className='sendMail__formButton'>
          <Button
            variant='contained'
            color='primary'
            type='submit'
            className='sendMail__formSend'
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
