import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer/footer"
import headshot from "../images/nikhilasrani.png"
console.log(headshot)

const AboutPage = () => (
  <Layout>
    <div
      className="content-wrapper"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
        height: "100%",
      }}
    >
      <SEO title="About Me" />
      <div>
        <h2>About Me </h2>
        <img
          src={headshot}
          alt="headshot of me"
          className="headshot"
          style={{ borderRadius: "50%", height: "150px", width: "150px" }}
        />
        <p>
          I'm a 23 year old Front End Engineer who has been born and brought up
          in Bangalore. I was previously working in an Operations role at
          Accenture for their{" "}
          <a href="https://www.accenture.com/in-en/service-mywizard-intelligent-automation-platform">
            intelligent automation platform
          </a>{" "}
          for over a year until October 2018. I graduated as an Electronics
          Engineer from PESIT in 2017.
          <br /> <br />
          I'm an ex-Parliamentary Debater who was the Tournament Director at{" "}
          <a
            href="https://www.facebook.com/groups/pesdebate/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The PES Debate 2016
          </a>{" "}
          one of the founding members of the{" "}
          <a
            href="https://www.facebook.com/pesdebsoc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            PES Debating Society.
          </a>
          <br />
          <br />
          I'm also an ex-Cottonian who was part of the team that were{" "}
          <a
            href="https://www.dnaindia.com/bangalore/report-talented-12-take-a-giant-leap-at-nasa-1724886"
            target="_blank"
            rel="noopener noreferrer"
          >
            Finalists at the International Space Station Design Competition
          </a>{" "}
          in 2012 held at NASA's Johnson Space Center in Houston Texas. You can
          checkout the interviews we gave to a local news channel{" "}
          <a
            href="https://www.youtube.com/playlist?list=PLQm9GmJUXfTDYUpkVqEnt-0rgIXXtz-CA"
            target="_blank"
            rel="noopener noreferrer"
          >
            here.
          </a>
        </p>
        <p>
          You can <a href="mailto:asrani.nikhil@gmail.com">email</a> me or
          contact me at{" "}
          <a
            href="https://twitter.com/NikhilBAsrani"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter
          </a>
        </p>
      </div>
    </div>
    <Footer />
  </Layout>
)
export default AboutPage
