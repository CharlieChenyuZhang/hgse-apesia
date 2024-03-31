import React from "react";
import styled from "styled-components";
import ResponsiveApBar from "./ResponsiveAppBar";
import Footer from "./Footer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Header from "./Header";
import AboutLogo from "../assets/aboutus/about-logo.png";
import AboutLogoMobile from "../assets/aboutus/about-logo-mobile.JPG";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const BREAK_POINT = "1200px";

const MainContainer = styled.div`
  height: 100%;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  margin-top: 70px;
  margin-left: 60px;
  margin-right: 60px;
`;

const PageTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  padding: 3rem 0;
`;

const LogoIntro = styled.img`
  width: 80%;
`;

const AboutLogoContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.isDesktop ? "row" : "column")};
  justify-content: center;
  margin: 60px 0;
`;

const AboutUs = () => {
  // New ResponsiveImage component to handle the image source dynamically
  const ResponsiveImage = ({ alt }) => {
    // State to hold the current window width
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    // Effect to update the state when the window is resized
    React.useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Determine which image source to use based on the window width
    const isDesktop = windowWidth >= 768;
    const imageSrc = isDesktop ? AboutLogo : AboutLogoMobile;

    return (
      <AboutLogoContainer isDesktop={isDesktop}>
        {!isDesktop && <PageTitle>About Logo</PageTitle>}
        <LogoIntro src={imageSrc} alt={alt} />
      </AboutLogoContainer>
    );
  };

  return (
    <MainContainer>
      <ResponsiveApBar />
      <ContentContainer>
        <Header name={"About Us"} />
        <PageTitle>Our Structure</PageTitle>
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>
                Harvard GSE APESIA Global Education Forum (GEF)
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Harvard University Graduate School of Education Asian Pacific
                Education Students International Association (APESIA) Global
                Education Forum (GEF) is an international summit dedicated to
                advancing the development of the Asia-Pacific international
                education sector. The summit brings together education experts,
                scholars, policymakers, and industry leaders from the
                Asia-Pacific region and around the world to explore important
                topics such as educational technology, education policy,
                international education, and educational innovation. Through
                various conferences, seminars, workshops, and other activities,
                GEF promotes multinational cooperation and exchange, drives
                global education development, and actively contributes to the
                construction of a more inclusive, innovative, and sustainable
                educational ecosystem.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>
                Harvard GSE APESIA Education Research Topics (ERT)
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <b>Cross-cultural Education Exchange</b>
                <br />
                Researching mechanisms, influencing factors, and the impact on
                individuals and societies of cross-cultural education exchange
                to promote understanding and communication between different
                cultures.
                <br />
                <br />
                <b>Educational Technology and Innovation</b>
                <br />
                Exploring methods of utilizing advanced technology to improve
                education, researching the application of technologies such as
                online education, virtual reality, and artificial intelligence
                in teaching and learning.
                <br />
                <br />
                <b>Education Policy and Reform</b>
                <br />
                Studying the formulation, implementation, and evaluation of
                education policies, as well as the impact of education reform on
                social, economic, and cultural development, providing
                theoretical and empirical evidence for policymakers.
                <br />
                <br />
                <b>Learning Psychology and Development</b>
                <br />
                Researching the psychological mechanisms, developmental
                characteristics, and influencing factors of the learning
                process, exploring effective strategies and methods to promote
                student learning and development.
                <br />
                <br />
                <b>Education Equity and Inclusion</b>
                <br />
                Studying the current status and challenges of education equity
                and inclusion, exploring strategies and measures to reduce
                educational disparities and enhance equal opportunities in
                education.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>
                Harvard GSE APESIA Education Global Scholars Committee (GSC)
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The Global Scholar Committee is an integral part of the Harvard
                Graduate School of Education Asian Pacific Education Students
                International Association (APESIA), dedicated to addressing
                challenges in international education research. Its mission is
                to gather outstanding scholars from various disciplinary fields
                to conduct in- depth research on critical issues in education
                transformation in the Asia-Pacific region. The committee aims to
                advance academic research in the region and facilitate exchange
                and sharing among education organizations in the Asia-Pacific.
                <br />
                <br />
                Our committee members possess rich research experience and
                outstanding academic achievements, spanning multiple disciplines
                including education, psychology, sociology, economics, and
                policy studies. They bring deep expertise and unique insights
                into various aspects of educational research.
                <br />
                <br />
                The Scholar Committee actively engages with key issues in the
                education sector in the Asia-Pacific region, including but not
                limited to educational inequality, educational technology and
                innovation, education policy and reform, and cross-cultural
                education exchange. Through organizing academic seminars,
                hosting specialized lectures, and publishing academic papers, we
                foster collaboration among members to explore effective
                approaches to address the challenges facing education in the
                Asia-Pacific region.
                <br />
                <br />
                Furthermore, the Scholar Committee is committed to establishing
                partnerships with academic institutions and organizations in the
                Asia-Pacific region to promote multinational cooperation and
                exchange, expand research fields, and advance developments in
                the education sector.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>
                AISpark Innovation Challenge Competition (AICC)
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The Harvard GSE APESIA AISpark Challenge Competition (AICC) is a
                global high school and college student artificial intelligence
                education competition jointly organized by the Harvard Venture
                Capital Club and the Harvard Graduate School of Education Asian
                Pacific Education Students International Association (APESIA).
                The competition aims to discover and promote innovators and
                leaders of the next generation who will use artificial
                intelligence to drive educational transformation. Participants
                will have the opportunity to use their skills and creativity to
                propose AI-based solutions to address the challenges and issues
                facing the education sector today.
                <br />
                <br />
                AISC aims to inspire participants to use AI technology and
                thinking to propose innovative educational solutions, thereby
                promoting progress and development in the education sector. This
                competition provides participants with a unique opportunity to
                interact, learn, and showcase their creativity and skills
                alongside peers from around the world. Through AISC, the Harvard
                Venture Capital Club and the Harvard Graduate School of
                Education APESIA aim to inspire the younger generation with
                innovative thinking and entrepreneurial spirit, injecting new
                vitality and momentum into the future of the education sector.
                This competition serves not only as a stage to showcase
                individual talents but also as a platform for collaborative
                exploration of educational innovation, contributing to the
                construction of a more intelligent, inclusive, and innovative
                educational ecosystem.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>
                Harvard GSE APESIA Asia-Pacific Education Industry Alumni
                Association (APEIAA)
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The Harvard Graduate School of Education Asian Pacific Education
                Students International Association (APESIA) Asia-Pacific
                Education Industry Alumni Association (APEIAA) is an alumni
                organization initiated by the Harvard Graduate School of
                Education's APESIA. The organization aims to connect alumni from
                the education industry in the Asia-Pacific region, facilitate
                communication and collaboration among alumni, and collectively
                promote the development and progress of the education sector in
                the Asia- Pacific region.
                <br />
                <br />
                Members of APEIAA come from various sectors within the field of
                education, including education institution managers, education
                policy makers, education technology professionals, and
                educational researchers. They possess rich experience and
                profound expertise in the education sector and are committed to
                promoting innovation and development in the Asia-Pacific
                education industry through cooperation and sharing. APEIAA
                regularly organizes various activities, including alumni
                gatherings, industry seminars, and specialized lectures,
                providing alumni with a platform for communication and
                interaction to share experiences, discuss issues, and seek
                collaboration opportunities. Through these activities, APEIAA
                aims to build a closely-knit alumni network, providing support
                and resources for alumni to collectively promote the prosperity
                and progress of the education sector in the Asia-Pacific region.
                <br />
                <br />
                APEIAA welcomes all HGSE alumni engaged in education-related
                work in the Asia-Pacific region to join and become drivers and
                leaders in the development of the education industry in the
                Asia-Pacific region.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <ResponsiveImage alt="About Us Logo" />
      </ContentContainer>
      <Footer />
    </MainContainer>
  );
};

export default AboutUs;
