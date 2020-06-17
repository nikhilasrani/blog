import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import Context from "../store/context"
import "./layout.css"

const Layout = ({ children }) => {
  const { state } = useContext(Context)
  const theme = useTheme()

  return (
    <main>
      <Global
        styles={css`
            * {
              box-sizing: border-box;
              margin:0,
              padding:0;
            }
            body {
              background-color: ${
                state.isDark ? theme.dark.background : theme.light.background
              }
            }
            h1,h2,h3,h4,h5,h6{
              font-family: "Montserrat";
              font-weight: 'bold';
            }
            p {
              font-family: 'Source Sans Pro'
            }
`}
      />
      {children}
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
