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
import alumni0 from "../assets/alumni/0.png";
import alumni1 from "../assets/alumni/1.png";
import alumni2 from "../assets/alumni/2.png";
import alumni3 from "../assets/alumni/3.png";
import alumni4 from "../assets/alumni/4.png";
import alumni5 from "../assets/alumni/5.png";
import alumni6 from "../assets/alumni/6.png";
import alumni7 from "../assets/alumni/7.png";

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

const alumni = [
  {
    name: "Gulnaz Kordanova",
    photo: alumni0,
    description: `
    <ul>
    <li>Harvard Graduate School of Education</li>
    <li>2021 Panel Speaker at Harvard China Education Symposum</li>
    <li>Forbes 30 U 30, CEO of NGO Connected-Ed.kz 
    </li>
    </ul>
    `,
  },
  {
    name: "​Jojo Wang",
    photo: alumni1,
    description: `
    <ul>
    <li>Harvard Graduate School of Education</li>
    <li>​Over 5 years in cross cultural research experience in the field of adolescent mental health. Two scientific papers on the largest journal in the field of Psychology as first author</li>
    </ul>
    `,
  },
  {
    name: "Serena Zhang",
    photo: alumni2,
    description: `
    Harvard Kennedy School 
    `,
  },
  {
    name: "Sona Das",
    photo: alumni3,
    description: `
    <ul>
    <li>Harvard Graduate School of Education</li>
    <li>CEO of Learnovate</li>
    </ul>
    `,
  },
  {
    name: "Alice Cao",
    photo: alumni4,
    description: `    
    Harvard Graduate School of Education
    `,
  },
  {
    name: "Junhan Zhang",
    photo: alumni5,
    description: `    
    Northeastern University, School of Public Policy and Urban Affairs
    `,
  },
  {
    name: "Yan Liang",
    photo: alumni6,
    description: `    
    Harvard Graduate School of Education 
    `,
  },
  {
    name: "Wei Chen",
    photo: alumni7,
    description: `    
    Harvard Graduate School of Education 
    `,
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

const TeamMemberModal = ({ member, open, handleClose, isAdvisory = false }) => {
  if (!member) return null;

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        <img src={member.photo} alt={member.name} style={{ width: "100%" }} />
        <Typography variant="h6" component="h2">
          {member.name}
        </Typography>
        {!isAdvisory && <Typography sx={{ mt: 2 }}>{member.title}</Typography>}
        <Typography
          sx={{ mt: 2 }}
          dangerouslySetInnerHTML={{ __html: member.description }}
        ></Typography>
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
        <PageTitle>Alumni</PageTitle>
        <Grid container spacing={5}>
          {alumni.map((member, idx) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={idx}>
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
          {alumni.map((member) => (
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
