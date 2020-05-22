import React from 'react';

function Hero(){
  return(
    <>
      <section class="hero is-info is-medium is-bold">
        <div class="hero-head"></div>
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title">統計數字一覧</h1>
            <h2 class="subtitle">hong kong statistics search</h2>
            <input placeholder="預設字" value="" />
            <div>Number of match 98</div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero