import React from 'react'
import { Link } from 'gatsby'
import Bio from '../components/Bio'
import Particles from 'react-particles-js';

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div style={{
          display:'flex',
          width:'100%',
          height:'100vh',
          
          justifyContent:'center',
          flexDirection:'column',
          alignItems:'center'
        }}>
        
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            background:'rgb(200,200,200);',
            borderRadius:'11px'
          }}
        >
        
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
        <Particles
        style={{
          position:'absolute',
          top:0,
          left:0,
          width:'100%',
          height:'100%',
          zIndex:-1
          
        }}
        params={{
          "particles": {
              "number": {
                  "value": 50
              },
              "size": {
                  "value": 4
              },
              "color": {
                "value": "#000"
              },
              "line_linked": {
                "enable": true,
                "distance": 80,
                "color": "#00000f",
                "opacity": 0.4,
                "width": 1
              },
          },
          "interactivity": {
            "detect_on": "window",
              "events": {
                  "onhover": {
                      "enable": false,
                      "mode": "grab"
                  },
                  "onclick":{
                    "enable":false,
                    "mode":"push"
                  }
              }
          }
        }} />
        <Bio />
      </div>)
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
<div>
      <div  >
        {header}
        </div>

      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(40),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
      
        {children}
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a><span>, by Ben Forsrup</span>
        </footer>
      </div>
      </div>
    )
  }
}

export default Layout
