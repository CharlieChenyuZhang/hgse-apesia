import React from "react";
import styled from "styled-components";
import ResponsiveApBar from "./ResponsiveAppBar";
import Typography from "@mui/material/Typography";
import hgseBuilding from "../assets/hgse-building.png";
import harvardBuilding from "../assets/harvard-building.png";
import Footer from "./Footer";

const BREAK_POINT = "1200px";

const MainContainer = styled.div`
  height: 100%;
  min-height: 100vh;
`;

const ImageOverlayContainer = styled.div`
  position: relative;
  text-align: center;
  margin-top: 83px;
`;

const ImageWithOverlay = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ResponsiveTypography = styled(Typography)`
  font-size: 4rem;
  color: white;
  margin: 20px;
  text-align: center;

  @media (max-width: ${BREAK_POINT}) {
    font-size: 2rem;
    &:after {
      content: "HGSE APESIA";
    }
    > b {
      display: none;
    }
  }
`;

const ImageTextSection = styled.div`
  display: flex;
  align-items: center;
  padding: 40px;
  margin: 40px;

  @media (max-width: ${BREAK_POINT}) {
    flex-direction: column;
    margin: 0px;
    padding: 0px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${BREAK_POINT}) {
    display: none;
  }
`;

const TextContainer = styled.div`
  flex: 2;
  padding: 20px;
  margin: 50px;
`;

const HeaderContainer = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const DescriptionContainer = styled.div`
  margin-bottom: 1.5rem;
`;

export default function Home() {
  return (
    <MainContainer>
      <ResponsiveApBar />
      <ImageOverlayContainer>
        <ImageWithOverlay src={hgseBuilding} alt="harvard building" />
        <Overlay>
          <ResponsiveTypography
            variant="h3"
            component="div"
            sx={{
              mr: 2,
              fontFamily: "Roboto",
              textDecoration: "none",
            }}
          >
            <b>
              Harvard Graduate School of Education
              <br />
              Asian Pacific Education Student International Association
              <br />
              (HGSE APESIA)
            </b>
          </ResponsiveTypography>
        </Overlay>
      </ImageOverlayContainer>
      {/* I want to display an image on the left and some text on the right hand side */}
      <ImageTextSection>
        <ImageContainer>
          <img src={harvardBuilding} alt="Example" />
        </ImageContainer>
        <TextContainer>
          <HeaderContainer>
            Harvard Graduate School of Education Asian Pacific Education
            Students
          </HeaderContainer>
          <DescriptionContainer>
            The Harvard Graduate School of Education Asian Pacific Education
            StudentsInternational Association (“APESIA”) exists to promote a
            greater understanding of Asian Pacific education culture, political
            and social dilemmas, to serve as a vehicle for Asian Pacific
            education ecosystem, and to serve as a support network for Asian
            Pacific students, researchers, educational innovators,
            practitioners, and the HGSE community.
          </DescriptionContainer>
          <HeaderContainer>Goal</HeaderContainer>
          <DescriptionContainer>
            Our goal is to promote a greater understanding of Asian Pacific
            education issues and culture, as well as provide social and
            professional opportunities for oversea students to engage with the
            APE community at large. APESIA also works closely with other Harvard
            affinity groups to address social and systemic issues affecting all
            people of color.
          </DescriptionContainer>
          <HeaderContainer>Mission</HeaderContainer>
          <DescriptionContainer>
            The Harvard Graduate School of Education Asian Pacific Education
            Students International Association (“APESIA”) mission is to advocate
            for the Asian Pacific the education (APE) community at Harvard
            Education School and beyond provides academic resources and support
            for education school students and creates a social and professional
            network to connect students and alumni worldwide.
          </DescriptionContainer>
        </TextContainer>
      </ImageTextSection>
      <Footer />
    </MainContainer>
  );
}
