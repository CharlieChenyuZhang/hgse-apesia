import React, { useState } from "react";
import styled from "styled-components";
import ResponsiveApBar from "./ResponsiveAppBar";
import apesiaLogo from "../assets/apesia-logo.png";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Modal,
} from "@mui/material";
import member0 from "../assets/teams/0.png";
import member1 from "../assets/teams/1.png";
import member2 from "../assets/teams/2.png";
import member3 from "../assets/teams/3.png";
import member4 from "../assets/teams/4.png";
import member5 from "../assets/teams/5.png";
import member6 from "../assets/teams/6.png";
import member7 from "../assets/teams/7.png";
import member8 from "../assets/teams/8.png";
import member9 from "../assets/teams/9.png";
import member10 from "../assets/teams/10.png";
import member11 from "../assets/teams/11.png";
import member12 from "../assets/teams/12.png";
import member13 from "../assets/teams/13.png";
import member14 from "../assets/teams/14.png";
import member15 from "../assets/teams/15.png";

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
    name: "Manabu Nagaoka Doe",
    title: "EVP",
    photo: member0,
  },
  {
    id: 2,
    name: "Evelyn Li",
    title: "EVP",
    photo: member1,
  },
  {
    id: 3,
    name: "Evelyn Li",
    title: "EVP",
    photo: member2,
  },
  {
    id: 4,
    name: "Evelyn Li",
    title: "EVP",
    photo: member3,
  },
  {
    id: 5,
    name: "Evelyn Li",
    title: "EVP",
    photo: member4,
  },
  {
    id: 6,
    name: "Evelyn Li",
    title: "EVP",
    photo: member5,
  },
  {
    id: 7,
    name: "Evelyn Li",
    title: "EVP",
    photo: member6,
  },
  {
    id: 8,
    name: "Evelyn Li",
    title: "EVP",
    photo: member7,
  },
  {
    id: 9,
    name: "Evelyn Li",
    title: "EVP",
    photo: member8,
  },
  {
    id: 10,
    name: "Evelyn Li",
    title: "EVP",
    photo: member9,
  },
  {
    id: 11,
    name: "Manabu Nagaoka Doe",
    title: "EVP",
    photo: member10,
  },
  {
    id: 12,
    name: "Evelyn Li",
    title: "EVP",
    photo: member11,
  },
  {
    id: 13,
    name: "Evelyn Li",
    title: "EVP",
    photo: member12,
  },
  {
    id: 14,
    name: "Evelyn Li",
    title: "EVP",
    photo: member13,
  },
  {
    id: 15,
    name: "Evelyn Li",
    title: "EVP",
    photo: member14,
  },
  {
    id: 16,
    name: "Evelyn Li",
    title: "EVP",
    photo: member15,
  },
];

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

const CardHover = styled(Card)`
  opacity: 0.6;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const CardMediaComponent = styled(CardMedia)`
  height: 350px;
`;

const TeamMemberModal = ({ member, open, handleClose }) => {
  if (!member) return null;

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        <img src={member.photo} alt={member.name} style={{ width: "100%" }} />
        <Typography variant="h6" component="h2">
          {member.name}
        </Typography>
        <Typography sx={{ mt: 2 }}>{member.title}</Typography>
        {/* Add more details here */}
      </Box>
    </Modal>
  );
};

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCardClick = (member) => {
    setSelectedMember(member);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <MainContainer>
      <ResponsiveApBar />
      <ContentContainer>
        <PageTitle>Meet the Team</PageTitle>
        <Grid container spacing={5}>
          {teamMembers.map((member) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={member.id}>
              <CardHover onClick={() => handleCardClick(member)}>
                <CardMediaComponent
                  component="img"
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
              </CardHover>
            </Grid>
          ))}
        </Grid>
        <TeamMemberModal
          member={selectedMember}
          open={modalOpen}
          handleClose={handleModalClose}
        />
      </ContentContainer>

      <ContentContainer>
        <Grid container spacing={2}>
          {teamMembers.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.id}>
              <Card
                style={
                  {
                    /* add hover styles here */
                  }
                }
                onClick={() => handleCardClick(member)}
              >
                {/* CardMedia and CardContent */}
              </Card>
            </Grid>
          ))}
        </Grid>
      </ContentContainer>
      <TeamMemberModal
        member={selectedMember}
        open={modalOpen}
        handleClose={handleModalClose}
      />

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
