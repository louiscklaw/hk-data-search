import React from 'react';

import './footer.css'

function Footer(){
  return(
    <>
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
              <div>
                <span className="footer-social-link">
                  <a href="https://www.facebook.com/louiscklaw" className="social-link">
                    <i className="fab fa-facebook-square fa-2x"></i>
                  </a>
                </span>

                <span className="footer-social-link">
                  <a href="https://github.com/louiscklaw/" className="social-link">
                    <i class="fab fa-github-square fa-2x"></i>
                  </a>
                </span>

              </div>
          </div>
          <div class="content has-text-centered">
            <p>
              API demo board by <a href="https://portfolio.louislabs.com/">louiscklaw</a>
            </p>
          </div>

        </div>
      </footer>
    </>
  )
}

export default Footer