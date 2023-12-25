import React from "react";
import styled from "styled-components";
import ResponsiveApBar from "./ResponsiveAppBar";
import apesiaLogo from "../assets/apesia-logo.png";
import apesiaConstitiont from "../assets/apesia_constitution.pdf";

const BREAK_POINT = "1200px";

const MainContainer = styled.div`
  height: 100%;
  min-height: 100vh;
`;

const Banner = styled.div`
  background-color: rgb(164, 16, 52);
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
  text-align: center;
`;

const BottomImageTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BottomImageContainer = styled.div`
  margin-top: 40px;
`;
const BottomTextContainer = styled.div`
  max-width: 800px;
  margin-top: 20px;
  margin-bottom: 100px;
  text-align: center;
`;

const ContentContainer = styled.div`
  margin-top: 83px;
  margin-left: 60px;
`;

const PageTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  padding: 5rem 0;
`;

const PdfContainer = styled.div`
  margin: 0 45px 5rem 45px;
`;

const TeamPage = () => {
  return (
    <MainContainer>
      <ResponsiveApBar />
      <ContentContainer>
        <PageTitle>Our Constitution</PageTitle>
      </ContentContainer>
      <PdfContainer>
        <iframe src={apesiaConstitiont} width="100%" height="800px" />
      </PdfContainer>

      <Banner>
        We build education diversity, equity, and inclusion for all learners
      </Banner>
      <BottomImageTextContainer>
        <BottomImageContainer>
          <img src={apesiaLogo} alt="APESIA logo" />
        </BottomImageContainer>

        <BottomTextContainer>
          The Harvard Graduate School of Education and/or shield are trademarks
          of the President and Fellows of Harvard College and are used by
          permission of Harvard University.
        </BottomTextContainer>
      </BottomImageTextContainer>
    </MainContainer>
  );
};

export default TeamPage;
