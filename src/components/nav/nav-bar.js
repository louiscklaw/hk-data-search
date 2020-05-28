import React from 'react';
import {Link} from 'gatsby'

function NavBar(){
  return(
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </a>

        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/zh" className="navbar-item">
            搜索
          </Link>

          <Link to="/zh/about" className="navbar-item">
            關於這頁
          </Link>

          <Link to="/zh/credits" className="navbar-item">
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
                <i className="fab fa-github fa-2x"></i>
              </a>

            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
