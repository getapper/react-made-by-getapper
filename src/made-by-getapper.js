import React from 'react'
import { number, oneOf, shape } from 'prop-types'
import injectSheet, { jss, ThemeProvider } from 'react-jss'
import jssNested from 'jss-nested'

import './font.css'

jss.use(jssNested())

const getapperLogo = 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGl2ZWxsb18xIiBkYXRhLW5hbWU9IkxpdmVsbG8gMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTUuNzIgNTIuMDIiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojODdiZWQ4O30uY2xzLTJ7ZmlsbDojNzA5OGFlO308L3N0eWxlPjwvZGVmcz48dGl0bGU+bG9nbzwvdGl0bGU+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjMuNzQgMzEuNzcgMjUuMzUgNTIuMDIgMjguODkgNDUuOTkgMCAxOS41OSAzLjc0IDMxLjc3Ii8+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjI1LjA0IDE2LjQ4IDQzLjAyIDIxLjc3IDQ2LjUzIDE1Ljc0IDI1LjA0IDE2LjQ4Ii8+PHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjYuOTkgNS43NSAwLjUzIDE2Ljg5IDMwLjI4IDQzLjcxIDM3Ljk1IDMwLjU4IDE3LjQzIDE1LjI1IDQ4LjA4IDEzLjEzIDU1LjczIDAgNi45OSA1Ljc1Ii8+PC9zdmc+'

const getapperLogoPositive = 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGl2ZWxsb18xIiBkYXRhLW5hbWU9IkxpdmVsbG8gMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTUuNzIgNTIuMDIiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojODdiZWQ4O30uY2xzLTJ7ZmlsbDojZmZmO308L3N0eWxlPjwvZGVmcz48dGl0bGU+bG9nb19wPC90aXRsZT48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMy43NCAzMS43NyAyNS4zNSA1Mi4wMiAyOC44OSA0NS45OSAwIDE5LjU5IDMuNzQgMzEuNzciLz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMjUuMDQgMTYuNDggNDMuMDIgMjEuNzcgNDYuNTMgMTUuNzQgMjUuMDQgMTYuNDgiLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iNi45OSA1Ljc1IDAuNTMgMTYuODkgMzAuMjggNDMuNzEgMzcuOTUgMzAuNTggMTcuNDMgMTUuMjUgNDguMDggMTMuMTMgNTUuNzMgMCA2Ljk5IDUuNzUiLz48L3N2Zz4='


const styles = (theme) => {
  const { radius, shadow } = theme
  const size = radius * 0.4
  const width = Math.max(180, radius * 2)

  return ({
    '@keyframes spin': {
      from: {
        transform: 'rotate(0deg)'
      },
      to: {
        transform: 'rotate(360deg)'
      }
    },
    '@keyframes spinback': {
      from: {
        transform: 'rotate(0deg)'
      },
      to: {
        transform: 'rotate(-360deg)'
      }
    },
    wrapper: {
      color: theme.color,
      font: {
        family: '"futura-pt",sans-serif',
        size: 15
      },
      textAlign: 'left',
      textDecoration: 'none',
      position: 'fixed',
      zIndex: 9999999,
      bottom: 0,
      right: -width + radius,
      height: radius,
      width,
      background: theme.background,
      filter: shadow,
      borderTopLeftRadius: radius,
      boxSizing: 'border-box',
      padding: {
        left: radius / 2.5,
        right: radius / 2.5,
        top: radius * 0.15
      },
      display: 'flex',
      alignItems: 'center',
      transition: 'all ease-out .33s',
      '&:hover': {
        right: 0,
        '& $logo': {
          animation: {
            name: 'spinback',
            duration: '.5s'
          }
        }
      }
    },
    logo: {
      width: 'auto',
      height: size,
      margin: {
        right: radius * 0.3
      },
      animation: {
        name: 'spin',
        duration: '.5s'
      }
    },
    text: {
      padding: {
        bottom: radius * 0.15
      }
    }
  })
}

const Comp = ({ classes, themeType }) => (
  <a
    className={classes.wrapper}
    href="http://getapper.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      alt="Getapper"
      className={classes.logo}
      src={themeType === 'light' ? getapperLogo : getapperLogoPositive}
    />
    <span className={classes.text}>Made by getapper</span>
  </a>
)

Comp.propTypes = {
  classes: shape({}).isRequired,
  themeType: oneOf(['light', 'dark']).isRequired
}

const StyledComp = injectSheet(styles)(Comp)

const theme = (radius, isLight) => ({
  background: isLight ? '#fff' : '#222',
  color: isLight ? '#1a1a1a' : '#fff',
  shadow: isLight ? 'drop-shadow(0px 0px 5px rgba(0,0,0,.1))' : 'drop-shadow(0px 0px 3px rgba(0,0,0,.4))',
  radius
})

const App = ({
  radius,
  themeType
}) => (
  <ThemeProvider theme={theme(radius, themeType === 'light')}>
    <StyledComp themeType={themeType} />
  </ThemeProvider>
)

App.propTypes = {
  radius: number,
  themeType: oneOf(['light', 'dark'])
}

App.defaultProps = {
  radius: 45,
  themeType: 'light'
}

export default App
