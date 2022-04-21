import React from 'react';
import { BiCalendarPlus } from "react-icons/bi";

function AddAppointment(){
  return(
    <div id="appoint">
      <h4><BiCalendarPlus />예약하기</h4>
      <ul>
        <li>
          <label htmlFor='userName'>집사명</label>
          <input type="input" id='userName' />
        </li>
        <li>
          <label htmlFor='uesrChildren'>애기명</label>
          <input type="input" id='uesrChildren' />
        </li>
        <li>
          <label htmlFor='userDate'>예약일</label>
          <input type="date" id='userDate' />
        </li>
        <li>
          <label htmlFor='userTime'>예약 시간</label>
          <input type="time" id='userTime' />
        </li>
        <li>
          <label htmlFor='UserDes'>기타 설명</label>
          <textarea cols="30" rows="10" id='UserDes' placeholder='기타 설명' />
        </li>
      </ul>
      <p><button type='submit'>예약하기</button></p>
    </div>
  )
}

export default AddAppointment