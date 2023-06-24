import React from 'react'
import './EmailRow.css'
import { CheckBox } from '@mui/icons-material'
import StarIcon from '@mui/icons-material/Star';
import { IconButton } from '@mui/material';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';

function EmailRow({ id, title, subject, discribtion, time }) {
  return (
    <div className='emailRow'>
      <div className="emailRow_options">
        <CheckBox />
        <IconButton>
          <StarIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>
      <div className="emailRow__title">

      </div>
      <div className="emailRow__message">

      </div>
      <div className="emailRow__discrip">
      </div>tion
    </div>
  )
}

export default EmailRow