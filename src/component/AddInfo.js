import React from 'react';
import { BiTrash } from "react-icons/bi";

function AddInfo(){
  return(
    <li id='AddInfo'>
      <dl>
        <dt>이름</dt>
        <dd className='owner'>
          <dfn>예약자명 :</dfn>
        </dd>
        <dd className='desc'>설명</dd>
        <dd className='date'>날자</dd>
      </dl>
      <p>
        <button><BiTrash /></button>
      </p>
    </li>
  )
}

export default AddInfo