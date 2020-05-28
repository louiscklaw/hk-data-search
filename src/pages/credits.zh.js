import React from 'react'
import run_config from '../run_config'

function CreditsPage(){
  let default_lang = run_config.DEFAULT_LANG
  return(
    <div style={{width: '80vw', margin:'auto'}}>

      <section >
        <container>
          <p>this is credits page</p>
          <a className="button" href={`/${default_lang}`}>Back</a>
        </container>
      </section>

      <section>
        <container>
          this to the wallpaper
          Photo by <a>Florian Wehde</a> on <a>Unsplash</a>
        </container>
      </section>

    </div>
  )
}

export default CreditsPage