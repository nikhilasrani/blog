import React, { useContext } from "react"
// import { Link } from "gatsby"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import Context from "../store/context"
import Layout from "../components/layout"
import Switch from "../components/Switch/Switch"
import SEO from "../components/seo"
import "./index.css"
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDribbble,
  FaStackOverflow,
} from "react-icons/fa"

const IndexPage = () => {
  const { state, dispatch } = useContext(Context)
  const theme = useTheme()

  return (
    <Layout>
      <div
        css={css`
          h1,
          h2,
          p {
            color: ${state.isDark ? theme.dark.font : theme.light.font};
          }
          a {
            color: ${state.isDark ? theme.dark.primary : theme.light.primary};
          }
        `}
      >
        <Switch
          isOn={state.isDark}
          onColor={theme.dark.primary}
          handleToggle={() => dispatch({ type: "TOGGLE_DARK_MODE" })}
        />
        <SEO
          title="Nikhil Asrani | Front End Developer"
          keywords={[
            `nikhil`,
            `dev`,
            `react`,
            `react-native`,
            `javascript`,
            `nikhil asrani`,
            `india`,
          ]}
        />
        <h1>
          Hi!
          <br />
          I'm Nikhil.
        </h1>

        <p>
          I’m a Frontend Engineer focused on crafting delightful and engaging
          user experiences leveraging ES6+ JavaScript and other modern tools of
          web development.
        </p>

        <p id="work-ex">
          currently:
          <br />
          Software Engineer at{" "}
          <a
            href="https://remedicohealth.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Remedico
          </a>
          <br />
          past:
          <br />
          Web Ops at{" "}
          <a
            href="https://www.accenture.com/in-en/services/applied-intelligence/mywizard-intelligent-automation-platform"
            target="_blank"
            rel="noopener noreferrer"
          >
            Accenture myWizard
          </a>
        </p>
        <p>
          I primarily work with React, Node and React Native and I have dabbled
          with GraphQL, TypeScript, Vue.js and Svelte on my personal projects.
        </p>

        <div id="social-links">
          <a
            href="https://github.com/nikhilasrani"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="social-icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/nikhil-asrani/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="social-icons" />
          </a>
          <a
            href="https://twitter.com/NikhilBAsrani"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="social-icons" />
          </a>
          <a
            href="https://dribbble.com/nikhilasrani"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDribbble className="social-icons" />
          </a>
          <a
            href="https://stackoverflow.com/users/10707802/nikhil-asrani"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaStackOverflow className="social-icons" />
          </a>
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
