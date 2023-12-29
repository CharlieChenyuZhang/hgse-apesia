import React from "react";
import styled from "styled-components";
import ResponsiveApBar from "./ResponsiveAppBar";
import Footer from "./Footer";
import apesiaConstitiont from "../assets/apesia_constitution.pdf";

const BREAK_POINT = "1200px";

const MainContainer = styled.div`
  height: 100%;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  margin-top: 83px;
  margin-left: 60px;
  margin-right: 60px;
`;

const PageTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  padding: 5rem 0;
`;

const PdfLinkContainer = styled.div`
  margin-bottom: 5rem;
`;

const TeamPage = () => {
  return (
    <MainContainer>
      <ResponsiveApBar />
      <ContentContainer>
        <PageTitle>Our Constitution</PageTitle>

        <PdfLinkContainer>
          <a href={apesiaConstitiont} target="_blank" rel="noopener noreferrer">
            [Oct. 26. 2022] [Current] HGSE APESIA Constitution
          </a>
        </PdfLinkContainer>
      </ContentContainer>

      <Footer />
    </MainContainer>
  );
};

export default TeamPage;
