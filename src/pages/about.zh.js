import React from 'react';
import {Link} from 'gatsby'

import {NavBar} from '../components/nav'
import Footer from '../components/footer'


function AboutPage(){
  return(
    <>
      <NavBar />
      <div>
        About page body
      </div>
      <Link to="/zh"> back </Link>
      <Footer />
    </>
  )
}

export default AboutPage