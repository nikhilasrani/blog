import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import Context from "../store/context"

import { StaticQuery, graphql } from "gatsby"
// import "bootstrap/dist/css/bootstrap.css"
// import "./layout.css"
import Header from "./header/header"
import Footer from "./footer/footer"

const Layout = ({ children }) => {
  const { state } = useContext(Context)
  const theme = useTheme()

  return (
    <div>
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
`}
      />
      {children}
    </div>
  )
  //   return (
  //     <StaticQuery
  //       query={graphql`
  //         query SiteTitleQuery {
  //           site {
  //             siteMetadata {
  //               title
  //             }
  //           }
  //         }
  //       `}
  //       render={data => (
  //         <div>
  //           <Global
  //             styles={css`
  //                     * {
  //                       box-sizing: border-box;
  //                       margin:0,
  //                       padding:0;
  //                     }
  //                     body {
  //                       background-color: ${
  //                         state.isDark
  //                           ? theme.dark.background
  //                           : theme.light.background
  //                       }
  //                     }
  // `}
  //           >
  //             <div className="background-fully">
  //               <main className="content">
  //                 <div style={{ zIndex: 2 }}>
  //                   <Header />
  //                 </div>
  //                 {children}
  //                 <Footer />
  //               </main>
  //             </div>
  //           </Global>
  //         </div>
  //       )}
  //     />
  //   )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
