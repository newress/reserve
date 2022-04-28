import {useState} from 'react'
import {BiSearch , BiCaretDown, BiCheck} from 'react-icons/bi'

function DropDown({toggleSort, sortBy, onSortByChange, orderBy, onOrderByChange}){
  if(!toggleSort){
    return
  }
  return (
    <ul>
      <li 
        onClick = {() => {onSortByChange('petName')}}
      >애기이름
      {(sortBy === 'petName') && <BiCheck />}</li>
      <li
        onClick = {() => {onSortByChange('ownerName')}}
      >예약자명
      {(sortBy === 'ownerName') && <BiCheck />}</li>
      <li
        onClick = {() => {onSortByChange('aptDate')}}
      >날짜
      {(sortBy === 'aptDate') && <BiCheck />}</li>
      <li
        onClick = {() => {onOrderByChange('asc')}}
      >오름차순
      {(sortBy === 'asc') && <BiCheck />}</li>
      <li
        onClick = {() => {onOrderByChange('desc')}}
      >내림차순
      {(sortBy === 'desc') && <BiCheck />}</li>
    </ul>
  )
}

function Search({query,onQueryChange, sortBy, onSortByChange, orderBy,onOrderByChange}){
  let [toggleSort,setToggleSort] = useState(false);
  return (
    <div id="search">
      <p>
        <BiSearch />
        <input 
          type="text" 
          placeholder="search"
          value={query}
          onChange = {
            (event) => {onQueryChange(event.target.value)}
          }
           />
        <button 
          type="button"
          onClick = {
            () => { setToggleSort(!toggleSort)}
          }>정렬하기 
        <BiCaretDown /></button>
      </p>
    <DropDown
      toggleSort = {toggleSort} 
      sortBy = {sortBy}
      orderBy = {orderBy}
      onSortByChange = {mySort => onSortByChange(mySort)}
      onOrderByChange = {myOrder => onOrderByChange(myOrder)}
      />
    </div>
  )
}

export default Search