import React from 'react';

import { GlobalContext } from '../context/GlobalContext'

import SearchBox from './search_box'

function Hero(){
  let {updateSearchTerm} = React.useContext(GlobalContext)
  console.log(updateSearchTerm)
  return(
    <>
      <section className="hero is-info is-medium is-bold">
        <div className="hero-head"></div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">統計數字一覧</h1>
            <h2 className="subtitle">hong kong statistics search</h2>
            <SearchBox onChangeSearchTerm={updateSearchTerm}></SearchBox>
            <div>Number of match 98</div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero