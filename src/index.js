import React from 'react';
import ReactDOM from 'react-dom/client';
//component

//source
import { BiArchive } from "react-icons/bi";
import './index.css';
import AddAppointment from './component/AddAppoinment';
import Search from './component/Search';

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
          <li>반복문</li>
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
