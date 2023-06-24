import React from 'react'
import './EmailRow.css'
import { Checkbox, IconButton } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';

function EmailRow({ id, title, subject, discription, time }) {
  return (
    <div className='emailRow'>

      <div className="emailRow_options">
        <Checkbox />
        <IconButton>
          <StarIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>

      <h3 className="emailRow__title">
          {title}
      </h3>

      <div className="emailRow__message">
          <h4>
            {subject}{' '}
            <span className='emailRow__discription'>- {discription}</span>
          </h4>
          
      </div>
      <div className="emailRow__time">
       <p>{time}</p> 
      </div>
    </div>
  )
}

export default EmailRow