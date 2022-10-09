import React from 'react'
import Link from 'gatsby-link'

export default ({data}) => {
   console.log("navigation data:" + data)
   return (
      <div>
      <div className="menu" style={{display:'block'}}>
      </div>
      <div className="main-title">
        <Link to="/project/">
         <img src="/img/logo.png" width="108" alt="logo" />
        </Link>
      </div>     
      </div>
   )
   
}


