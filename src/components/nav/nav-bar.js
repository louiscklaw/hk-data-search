import React from 'react';
import {Link} from 'gatsby'

function NavBar(){
  return(
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </a>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <Link to="/zh" className="navbar-item">
            搜索
          </Link>

          <Link to="/zh/about" className="navbar-item">
            關於我
          </Link>

{/*       <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              More
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                About
              </a>
              <a class="navbar-item">
                Jobs
              </a>
              <a class="navbar-item">
                Contact
              </a>
              <hr class="navbar-divider" />
              <a class="navbar-item">
                Report an issue
              </a>
            </div>
          </div> */}
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">

              <a class="button is-light">
                <strong>繁/En</strong>
              </a>

              <a class="button is-primary">
                <strong>註冊</strong>
              </a>

              <a class="button is-light">
                登入
              </a>

              <a class="button is-light">
                <i class="fab fa-github fa-2x"></i>
              </a>

            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
