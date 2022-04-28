import { BiTrash } from 'react-icons/bi'
// for-> htmlFor value-> defaultValue  class-> className
function AddInfo({appointment,onDelectAppointment}){
  return (
    <li>
      <dl>
        <dt>{appointment.petName}</dt>
        <dd className="owner">
          <dfn>예약자명 :</dfn>
          {appointment.ownerName}
        </dd>
        <dd className="desc">
          {appointment.aptNotes}</dd>
        <dd className="date">
          {appointment.aptDate}</dd>
      </dl>
      <p>
        <button
          onClick = {
            () => onDelectAppointment(appointment.id)
          }
          ><BiTrash /></button>
      </p>
    </li>
  )
}

export default AddInfo;
