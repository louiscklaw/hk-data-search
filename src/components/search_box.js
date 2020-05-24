import React from 'react';

function SearchBox({onChangeSearchTerm}){
  return(
    <>
      <input placeholder="預設字" onChange={(e) => onChangeSearchTerm(e.target.value)}/>
    </>
  )
}

export default SearchBox