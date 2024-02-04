import React from "react";
import styled from "styled-components";
import ResponsiveApBar from "./ResponsiveAppBar";
import Footer from "./Footer";

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
  padding: 5rem 0;
`;

const TeamPage = () => {
  return (
    <MainContainer>
      <ResponsiveApBar />
      <ContentContainer>
        <PageTitle>Speakers</PageTitle>
        coming soon...
      </ContentContainer>

      <Footer />
    </MainContainer>
  );
};

export default TeamPage;
