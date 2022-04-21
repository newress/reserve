import React from "react";
import { BiSearch, BiCaretDown } from "react-icons/bi";

function DropDown(){
  return(
    <div id="DropDown">
      <ul>
        <li id="suesrChildren">애기이름</li>
        <li id="userName">예약자명</li>
        <li id="userDate">날자</li>
      </ul>
    </div>
  )
}


function Search(){
  return(
    <div id="search">
      <p>
        <BiSearch />
        <input type="text" placeholder="search" />
        <button type="button">정렬하기 <BiCaretDown /></button>
      </p>
      <DropDown />
    </div>
  )
}



export default Search