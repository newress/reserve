import React from 'react';
import { useState } from 'react';
import { BiCalendarPlus } from "react-icons/bi";

function AddWrite(toggleForm, formData, setFormData, formDataPublish){
  if(!toggleForm){
    return null
  }
  return(
    <>
    <ul>
    <li>
      <label htmlFor='userName'>집사명</label>
      <input 
      type="input" id='userName' 
      onChange={(event) => {
        setFormData({...formData, ownerName:event.target.value})
      }}
      />
    </li>
    <li>
      <label htmlFor='uesrChildren'>애기명</label>
      <input 
      type="input" id='uesrChildren' 
      onChange={(event) => {
        setFormData({...formData, petName:event.target.value})
      }}
      />
    </li>
    <li>
      <label htmlFor='userDate'>예약일</label>
      <input 
      type="date" id='userDate' 
      onChange={(event) => {
        setFormData({...formData, aptDate:event.target.value})
      }}
      />
    </li>
    <li>
      <label htmlFor='userTime'>예약 시간</label>
      <input 
      type="time" id='userTime' 
      onChange={(event) => {
        setFormData({...formData, aptTime:event.target.value})
      }}
      />
    </li>
    <li>
      <label htmlFor='UserDes'>기타 설명</label>
      <textarea 
      cols="30" rows="10" id='UserDes' placeholder='기타 설명' 
      onChange={(event) => {
        setFormData({...formData, aptNotes:event.target.value})
      }}
      />
    </li>
  </ul>
  <p><button 
  type='submit'
  onClick={formDataPublish}
  >예약하기</button></p>
  </>
  )
}


function AddAppointment({onSendAppointment, lastId}){
  const clearData = {
    petName: '',
    ownerName: '',
    aptNotes:'',
    aptDate:''
  }

  let [toggleForm, setToggleForm] = useState(false);
  //form데이터 생성
  let [formData, setFormData] = useState(clearData);

  function formDataPublish(){
    const formDataInfo = {
      id: lastId + 1,
      petName: formData.petName,
      ownerName: formData.ownerName,
      aptNotes: formData.aptNotes,
      aptDate: formData.aptDate + ' ' + formData.aptTime
    }
    onSendAppointment(formDataInfo)
    setFormData(clearData)
    setToggleForm(!toggleForm)
  }
  return(
    <div id="appoint">
      <h4 onClick={
        () => {setToggleForm(!toggleForm)}
      }><BiCalendarPlus />예약하기</h4>
      <AddWrite 
      toggleForm={toggleForm} 
      formData={formData}
      formDataPublish={formDataPublish}
      setFormData={setFormData}
      />
    </div>
  )
}

export default AddAppointment