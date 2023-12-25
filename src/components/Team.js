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
import Manabu from "../assets/teams/0.jpg";
import Evelyn from "../assets/teams/1.jpg";

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
    photo: Manabu,
  },
  {
    id: 2,
    name: "Evelyn Li",
    title: "EVP",
    photo: Evelyn,
  },
  {
    id: 3,
    name: "Evelyn Li",
    title: "EVP",
    photo: Evelyn,
  },
  {
    id: 4,
    name: "Evelyn Li",
    title: "EVP",
    photo: Evelyn,
  },
  {
    id: 5,
    name: "Evelyn Li",
    title: "EVP",
    photo: Evelyn,
  },
  {
    id: 6,
    name: "Evelyn Li",
    title: "EVP",
    photo: Evelyn,
  },
  {
    id: 7,
    name: "Evelyn Li",
    title: "EVP",
    photo: Evelyn,
  },
  {
    id: 8,
    name: "Evelyn Li",
    title: "EVP",
    photo: Evelyn,
  },
  {
    id: 9,
    name: "Evelyn Li",
    title: "EVP",
    photo: Evelyn,
  },
  {
    id: 10,
    name: "Evelyn Li",
    title: "EVP",
    photo: Evelyn,
  },
  {
    id: 11,
    name: "Manabu Nagaoka Doe",
    title: "EVP",
    photo: Manabu,
  },
  {
    id: 12,
    name: "Evelyn Li",
    title: "EVP",
    photo: Evelyn,
  },
  {
    id: 13,
    name: "Evelyn Li",
    title: "EVP",
    photo: Evelyn,
  },
  {
    id: 14,
    name: "Evelyn Li",
    title: "EVP",
    photo: Evelyn,
  },
  {
    id: 15,
    name: "Evelyn Li",
    title: "EVP",
    photo: Evelyn,
  },
  {
    id: 16,
    name: "Evelyn Li",
    title: "EVP",
    photo: Evelyn,
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
        <Grid container spacing={2}>
          {teamMembers.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.id}>
              <CardHover onClick={() => handleCardClick(member)}>
                <CardMedia
                  component="img"
                  height="200"
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
