import React from 'react';
import ReactDOM from 'react-dom/client';
//component
import AddAppointment from './component/AddAppoinment';
import Search from './component/Search';
import AddInfo from './component/AddInfo';
//source
import { BiArchive } from "react-icons/bi";
import './index.css';
import appointData from './data.json'

function App(){
  return(
    <article>
      <h3>
        <BiArchive /> 예약 시스템
      </h3>
      <AddAppointment />
      <Search />
      <div id="list">
        <ul>
          {
            appointData.map( item => (
              <AddInfo 
                key={item.id}
                appointment = {item}              
              />
            ))
          }
        </ul>
      </div>

    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
