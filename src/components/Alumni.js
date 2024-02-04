import React, { useState } from "react";
import styled from "styled-components";
import ResponsiveApBar from "./ResponsiveAppBar";
import Footer from "./Footer";
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
import alumni8 from "../assets/teams/15.png";
import alumni9 from "../assets/teams/12.png";
import alumni10 from "../assets/teams/14.png";

const BREAK_POINT = "1200px";

const MainContainer = styled.div`
  height: 100%;
  min-height: 100vh;
`;

const alumni = [
  {
    name: "Anthemius Li",
    title: "President",
    photo: alumni8,
    description: `
      <ul>
      <li>Master's in Educational Leadership, Organizations, and Entrepreneurship from Harvard University.</li>
      <li>Founder of Lingfeng Century Education Family Office.</li>
      <li>Executive Director of the Asia-Pacific Young Entrepreneurs Council and Chair of the International Education Committee, Advisor to the Harvard Political Economy Association, Vice-Chair of the Harvard Business and Entrepreneurship Alliance, Entrepreneur-in-Residence at the Harvard Innovation Lab.</li>
      </ul>
      `,
  },
  {
    name: "Gulnaz Kordanova",
    title: "Vice President",
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
    title: "Vice President",
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
    title: "Public Relationship Chair",
    photo: alumni2,
    description: `
    Harvard Kennedy School 
    `,
  },
  {
    name: "Sona Das",
    title: "India Head",
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
    title: "Co-President",
    photo: alumni4,
    description: `    
    Harvard Graduate School of Education
    `,
  },
  {
    name: "Junhan Zhang",
    title: "Public Relationship Chair",
    photo: alumni5,
    description: `    
    Northeastern University, School of Public Policy and Urban Affairs
    `,
  },
  {
    name: "Yan Liang",
    title: "Secretary",
    photo: alumni6,
    description: `    
    Harvard Graduate School of Education 
    `,
  },
  {
    name: "Wei Chen",
    title: "Secretary",
    photo: alumni7,
    description: `    
    Harvard Graduate School of Education 
    `,
  },
  {
    name: "Haoran Wu",
    title: "External Deputy Vice President",
    photo: alumni9,
    description: `
    <ul>
    <li>Dual Master's in International Education Policy from Stanford University and Development Economics from Oxford University.</li>
    <li>Chief of Staff at Intelipro, responsible for group investment and major client relations.</li>
    <li>Co-founder of Stanford China Education Practice and Innovators Association (EPIC), Vice Chairman of U8 Global Elite Alliance, Project Lead for SVLC U30 at Silicon Valley Leadership Community.</li>
    </ul>
    `,
  },
  {
    name: "Zichen Sheng",
    title: "Internal Deputy Vice President",
    photo: alumni10,
    description: `
    <ul>
    <li>Master's in Educational Leadership, Organizations, and Entrepreneurship from Harvard University.</li>
    <li>Co-founder of RDEC, a pioneer in digital music education, leading the expansion to over 500 campuses, impacting over 100,000 children.</li>
    </ul>
    `,
  },
];

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

const SecondaryPageTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem 0;
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
        <SecondaryPageTitle>E-Board Members 2023 - 2024</SecondaryPageTitle>
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

      <Footer />
    </MainContainer>
  );
};

export default TeamPage;
