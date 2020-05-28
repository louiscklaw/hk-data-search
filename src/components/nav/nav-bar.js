import React from 'react';
import {Link} from 'gatsby'

import NavbarBurger from './navbar-burger'

class NavBar extends React.Component{
  constructor(props){
    super(props)
    this.state={
      nav_script: ""
    }
  }


  render(){
    return(
      <>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <NavbarBurger />

          <div id="navbar-main" className="navbar-menu">
            <div className="navbar-start">
              <Link to="/zh" className="navbar-item cust-highlight">
                搜索
              </Link>

              <Link to="/zh/about" className="navbar-item cust-highlight">
                關於這頁
              </Link>

              <Link to="/zh/credits" className="navbar-item cust-highlight">
                Credits
              </Link>
    {/*
              <Link to="/zh/api_details/test_helloworld" className="navbar-item">
                test_api_details
              </Link>

              <Link to="/zh/test_link" className="navbar-item">
                test_link
              </Link> */}

            {/*
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  More
                </a>

                <div className="navbar-dropdown">
                  <a className="navbar-item">
                    About
                  </a>
                  <a className="navbar-item">
                    Jobs
                  </a>
                  <a className="navbar-item">
                    Contact
                  </a>
                  <hr className="navbar-divider" />
                  <a className="navbar-item">
                    Report an issue
                  </a>
                </div>
              </div>
              */}
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">

                  <a className="button is-light">
                    繁/En
                  </a>

                  <a className="button is-primary">
                    註冊
                  </a>

                  <a className="button is-light">
                    登入
                  </a>

                  <a className="button is-light">
                    <i className="fab fa-github"></i>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default NavBar
