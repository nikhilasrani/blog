import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer/footer"
import headshot from "../images/nikhilasrani.png"
import "./about.css"
import Header from "../components/header/header"
const AboutPage = () => (
  <Layout>
    <Header style={{zIndex:3}}/>
    <div
      className="content-wrapper"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
        height: "100%",
        zIndex:-1
      }}
    >
      <SEO title="About Me" />

      <div className="intro section" id="intro">
        <h2>About Me </h2>
        <div className="row">
          <div className="col-sm-3">
            <img
              src={headshot}
              alt="headshot of me"
              className="headshot"
              style={{ borderRadius: "50%", height: "150px", width: "150px" }}
            />
          </div>
          <div className="col-sm-9">
            <p>
              I'm a 24 year old Bangalorean. I enjoy working on the latest Front
              End Technologies. I was previously working in an Operations role
              at Accenture for their{" "}
              <a href="https://www.accenture.com/in-en/service-mywizard-intelligent-automation-platform">
                intelligent automation platform
              </a>{" "}
              for over a year until October 2018. I graduated as an Electronics
              &amp; Communication Engineer from PESIT in 2017.
            </p>
            <p>
              You can <a href="mailto:asrani.nikhil@gmail.com">email</a> me or
              DM me on{" "}
              <a
                href="https://twitter.com/NikhilBAsrani"
                target="_blank"
                rel="noopener noreferrer"
              >
                twitter
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      {/** Work Experience */}
      <div className="work section second" id="experiences">
        <div className="container">
          <h3>
            Work
            <br />
            Experience
          </h3>
          <ul className="work-list">
            <li className="tenure">November 2018 - Present</li>
            <li>
              <a
                href="https://github.com/nikhilasrani"
                target="_blank"
                rel="noopener noreferrer"
              >
                Front End Developer
              </a>
            </li>
            <li>
              Working on multiple projects using modern front-end frameworks and
              libraries
            </li>
          </ul>
          <ul className="work-list">
            <li className="tenure">June 2017 - October 2018</li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.accenture.com/in-en/service-mywizard-intelligent-automation-platform"
              >
                Accenture
              </a>{" "}
            </li>
            <li>Platform Engineer on myWizard</li>
            <li>
              {" "}
              Part of the global team that worked on server availability and
              operations of myWizard (Accenture's Intelligent Automation
              platform). Handled tickets related to various server operations
              and jobs performance and handled escalations of client-side
              technical issues.
            </li>
          </ul>
          <ul className="work-list">
            <li className="tenure">January 2017 - April 2017</li>
            <li>
              <a
                href="https://zinnov.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zinnov Management Consulting
              </a>
            </li>
            <li>Associate Consultant Intern</li>
            <li>
              Modelled a talent and gender diversity report of 15 enterprise
              software companies and 5 unicorn startups in India for the HR-APAC
              unit of a US-Based Technology Giant
            </li>
          </ul>
        </div>
      </div>
      <div className="skills section second" id="skills">
        <div className="container">
          <h3>
            Technical
            <br />
            Skills
          </h3>
          <ul className="skill-list list-flat">
            <li>Web Technologies</li>
            <li>HTML / CSS Flexbox / CSS Grid</li>
          </ul>
          <ul className="skill-list list-flat">
            <li>Libraries</li>
            <li>React / React Native / Bootstrap / Semantic UI</li>
          </ul>
          <ul className="skill-list list-flat">
            <li>Programming</li>
            <li>Javascript</li>
          </ul>
        </div>
      </div>

      {/** Achievements */}
      <div className="award section second" id="achievements">
        <div className="container">
          <h3>
            Award &amp;
            <br />
            Achievements
          </h3>
          <ul className="award-list list-flat">
            <li>August 2018</li>
            <li>Accenture Technology Core Values Award FY18</li>
          </ul>
          <ul className="award-list list-flat">
            <li>July 2018</li>
            <li>Accenture Technology Delivering Outcomes Award FY18</li>
            <li>Accenture Technology Inspire GEM Award - July 2018</li>
          </ul>
        </div>
      </div>
      {/** Hobbies */}
      <div className="hobbies section second" id="hobbies">
        <div className="container">
          <h3>
            Hobbies &amp;
            <br />
            Interests
          </h3>
          <ul className="hobbies-list">
            <li className="tenure">August 2016 - October 2016</li>
            <li>
              <a
                href="https://takshashila.org.in/course/graduate-certificate-in-public-policy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Graduate Certificate in Public Policy
              </a>
            </li>
            <li>
              Undertook a 12-week course on the fundamentals of public policy
              and governance.
            </li>
          </ul>
          <ul className="hobbies-list">
            <li className="tenure">August 2014 - October 2016</li>
            <li>
              <a
                href="https://www.facebook.com/pesdebsoc/"
                target="_blank"
                rel="noopener noreferrer"
                className="hobbies-links"
              >
                Parliamentary Debating
              </a>{" "}
            </li>
            <li>
              Founding Member of the PES Debating Society. Tournament Director
              of{" "}
              <a
                href="https://www.facebook.com/groups/pesdebate/"
                target="_blank"
                rel="noopener noreferrer"
                className="hobbies-no-decoration"
              >
                The PES Debate 2016.
              </a>
            </li>
            <li>
              Participated in over 25 national level debates across India and
              internationally and securing breaking positions at many well
              reputed tournaments.
              <br /> •Best Adjudicator at MIT Debating Tournament 2016 <br />
              •Runners Up at NITK Parliamentary Debate 2015
              <br /> •Finalist at NLUO Parliamentary Debate 2016 <br />
              •Semi-Finalist at IITB Parliamentary Debate 2016
              <br /> •Semi-Finalist at The PES Debate 2016
              <br />
              •Semi-Finalist at RV Debating Tournament 2015 <br />
              •Quarter-Finalist at NALSAR Inter Varsity 2016
              <br /> •Quarter-Finalist at MSR Memorial Parliamentary Debate 2016{" "}
              <br />
              •Quarter-Finalist at SMC Parliamentary Debate 2016 <br />
              •Quarter-Finalist at ILS Parliamentary Debate 2016
              <br />
              •Quarter-Finalist at IITB Parliamentary Debate 2015
              <br />
              •Novice-Semi-Finalist at SMC Parliamentary Debate 2015
            </li>
          </ul>
          <ul className="hobbies-list">
            <li className="tenure">June 2011 - July 2012</li>
            <li>
              <a
                href="http://cottonboys.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                School Level Achievements
              </a>
            </li>

            <li>
              I'm an Old Cottonian who was part of the team that were{" "}
              <a
                href="https://www.dnaindia.com/bangalore/report-talented-12-take-a-giant-leap-at-nasa-1724886"
                target="_blank"
                rel="noopener noreferrer"
                className="hobbies-no-decoration"
              >
                finalists at the International Space Station Design
                Competition(ISSDC)
              </a>{" "}
              in 2012 held at NASA's Johnson Space Center in Houston Texas. You
              can checkout the interviews we gave to a local news channel{" "}
              <a
                href="https://www.youtube.com/playlist?list=PLQm9GmJUXfTDYUpkVqEnt-0rgIXXtz-CA"
                target="_blank"
                rel="noopener noreferrer"
                className="hobbies-no-decoration"
              >
                here.
              </a>
            </li>
            <li>
              Part of the team that submitted a report on Biodiversity to Wipro
              Earthian 2012 which was shortlisted as the top 25 among 900 school
              and college submissions in India.
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Footer />
  </Layout>
)
export default AboutPage
