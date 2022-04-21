import React from 'react';
import { BiTrash } from "react-icons/bi";

function AddInfo({appointment}){
  return(
    <li id='AddInfo'>
      <dl>
        <dt>{appointment.petName}</dt>
        <dd className='owner'>
          <dfn>예약자명 : {appointment.ownerName}</dfn>
        </dd>
        <dd className='desc'>{appointment.aptNotes}</dd>
        <dd className='date'>{appointment.aptDate}</dd>
      </dl>
      <p>
        <button><BiTrash /></button>
      </p>
    </li>
  )
}

export default AddInfo