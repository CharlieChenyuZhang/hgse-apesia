import React from "react";
import styled from "styled-components";
import ResponsiveApBar from "./ResponsiveAppBar";
import apesiaLogo from "../assets/apesia-logo.png";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import Manabu from "../assets/teams/Manabu.jpg";

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

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    title: "Developer",
    photo: Manabu,
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Designer",
    photo: Manabu,
  },
];

const ContentContainer = styled.div`
  margin-top: 83px;
  margin-left: 60px;
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
        <PageTitle>Meet the Team</PageTitle>
      </ContentContainer>
      <ContentContainer>
        <Grid container spacing={2}>
          {teamMembers.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="200px"
                  width="200px"
                  image={member.photo}
                  alt={member.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </ContentContainer>
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
