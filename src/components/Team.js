import React, { useState, useEffect } from "react";
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
import advisor0 from "../assets/advisors/0.png";
import advisor1 from "../assets/advisors/1.png";
import advisor2 from "../assets/advisors/2.png";
import advisor3 from "../assets/advisors/3.png";
import advisor4 from "../assets/advisors/4.png";
import advisor5 from "../assets/advisors/5.png";
import advisor6 from "../assets/advisors/6.png";
import advisor7 from "../assets/advisors/7.png";
import advisor8 from "../assets/advisors/8.png";
import advisor9 from "../assets/advisors/9.png";

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
const advisoryMembers = [
  {
    name: "Prof. Prashant Loyalka",
    photo: advisor0,
    description: `
    <ul>
    <li>Associate Professor at the Graduate School of Education at Stanford University</li>
    <li>Senior Fellow at the Freeman Spogli Institute for International Studies at Stanford University</li>
    </ul>
    `,
  },
  {
    name: "Prof. Hatch Thomas",
    photo: advisor1,
    description: `
    <ul>
    <li>Professor of Education at Columbia University </li>
    <li>Director of the National Center for Restructuring Education, Schools, and Teaching (NCREST)</li>
    </ul>
    `,
  },
  {
    name: "Prof. Jessica Peng ",
    photo: advisor2,
    description: `
    <ul>
    <li>Dean's Global Education Postdoctoral Fellow at Harvard University </li>
    <li>Cultural and linguistic anthropologist </li>
    </ul>
    `,
  },
  {
    name: "Mr. Douglas Clayton",
    photo: advisor3,
    description: `
    <ul>
    <li>Board Member at University of Pennsylvania</li>
    <li>Board Member at Luxembourg American Camber of Commerce</li>
    </ul>
    `,
  },
  {
    name: "Prof. Kunal Johar",
    photo: advisor4,
    description: `
    <ul>
    <li>Former US Department of Defense Technical Scientist</li>
    <li>Professor of Computer Engineering and Computational Molecular Biology at George Washington University</li>
    <li>Founder and Chief Technology Officer of Openwater</li>
    </ul>
    `,
  },
  {
    name: "Prof. Zhou Yu",
    photo: advisor5,
    description: `
    <ul>
    <li>Associate Professor at Columbia University </li>
    <li>Co-Founder at Articulate.AI</li>
    </ul>
    `,
  },
  {
    name: "Prof. Michael Thomas",
    photo: advisor6,
    description: `
    Professor at University of California, Riverside He has developed and customized educational solutions for multinational organizations such as the US Department of Homeland Security, the Ministry of Commerce of the People's Republic of China
    `,
  },
  {
    name: "Ms. Serene Wang",
    photo: advisor7,
    description: `
    National Chinese American Youth Federation, Ten Outstanding Youths of the US-China Public Diplomacy Association Former Columbia University and New York University Lecturer
    `,
  },
  {
    name: "Mr. Charles Liu",
    photo: advisor8,
    description: `
    <ul>
    <li>President of Harvard Venture Club </li>
    <li>H29 Capital CEO & Cofounder</li>
    <li>2022 Forbes 30U30</li>
    </ul>
    `,
  },
  {
    name: "Ms. Dou Dou",
    photo: advisor9,
    description: `
    <ul>
    <li>Founder and Chairperson of the Asian Society for Social and Emotional Learning at the Harvard Graduate School of Education</li>
    <li>CPCC Certified International Leadership Coach</li>
    <li>Guest Speaker at the 2019 Harvard China Education Forum</li>
    </ul>
    `,
  },
];

const teamMembers = [
  {
    name: "Lei Wu",
    title: "Co-President",
    photo: member10,
    description: `
    <ul>
    <li>Currently studying Educational Policy and Analysis at Harvard University.</li>
    <li>Co-founder of Leadium AI coaching and consulting, and Goconnect, collaborating with over thirty businesses & organizations, serving 30,000+ users.</li>
    <li>Vice President of the MIT Venture Capital Association (CHIEF).</li>
    </ul>
    `,
  },
  {
    name: "Anthemius Li",
    title: "Co-President",
    photo: member15,
    description: `
    <ul>
    <li>Master's in Educational Leadership, Organizations, and Entrepreneurship from Harvard University.</li>
    <li>Founder of Lingfeng Century Education Family Office.</li>
    <li>Executive Director of the Asia-Pacific Young Entrepreneurs Council and Chair of the International Education Committee, Advisor to the Harvard Political Economy Association, Vice-Chair of the Harvard Business and Entrepreneurship Alliance, Entrepreneur-in-Residence at the Harvard Innovation Lab.</li>
    </ul>
    `,
  },
  {
    name: "Manabu Nagaoka",
    title: "Executive Vice President",
    photo: member0,
    description: `
    <ul>
    <li>Currently studying Education Design Innovation and Technology at Harvard University.</li>
    <li>Vice President, General Manager, and Executive Producer at Sesame Street Studio, overseeing all operations in Japan, from theme parks to school and healthcare projects.</li>
    <li>Founder of a film boutique studio and intellectual property management company specializing in international collaborative productions and joint ventures.</li>
    </ul>`,
  },
  {
    name: "Evelyn Li",
    title: "Executive Vice President",
    photo: member1,
    description: `
    <ul>
    <li>Currently studying Educational Leadership, Organizations, and Entrepreneurship at Harvard University.</li>
    <li>Founder of CupHalfFull Education Consulting.</li>
    <li>Core member of the Harvard China Education Forum and the HGSE China Alumni Club (HACC).</li>
    </ul>
    `,
  },
  {
    name: "Swati Garg",
    title: "Treasurer Chair",
    photo: member9,
    description: `
    <ul>
    <li>MBA from MIT Sloan School of Management.</li>
    <li>Co-founder of Leadium AI coaching and consulting, Director of Tech Department at WorkSpan Tech.</li>
    <li>Senior Tech Manager at Mentor Graphics.</li>
    </ul>
    `,
  },
  {
    name: "Rainy Mao",
    title: "Secretary Chair",
    photo: member4,
    description: `
    <ul>
    <li>Currently studying for a Master's in Human Development and Education at Harvard University.</li>
    <li>Art Instructor at the Child Development Center, University of California, San Diego.</li>
    <li>Youth Development Counselor at Groundwork San Diego.</li>
    </ul>
    `,
  },
  {
    name: "Haoran Wu",
    title: "External Deputy President",
    photo: member12,
    description: `
    <ul>
    <li>Dual Master's in International Education Policy from Stanford University and Development Economics from Oxford University.</li>
    <li>Chief of Staff at Intelipro, responsible for group investment and major client relations.</li>
    <li>Co-founder of Stanford China Education Practice and Innovators Association (EPIC), Vice Chairman of U8 Global Elite Alliance, Project Lead for SVLC U30 at Silicon Valley Leadership Community.</li>
    </ul>
    `,
  },
  {
    name: "Zaher Ibrahim",
    title: "Public Relationship Dept. Chair",
    photo: member8,
    description: `
    <ul>
    <li>MBA from MIT Sloan School of Management.</li>
    <li>Co-founder of Leadium AI coaching and consulting.</li>
    <li>Regional Director at Leadership Circle.</li>
    </ul>
    `,
  },
  {
    name: "Connie Guo",
    title: "Internal Relationship Dept. Chair",
    photo: member11,
    description: `
    <ul>
    <li>Master's in Educational Leadership, Organizations, and Entrepreneurship from Harvard University.</li>
    <li>Founder of Ed Pathways Consulting, with over 60,000 followers.</li>
    <li>Research Assistant at Columbia University.</li>
    </ul>
    `,
  },
  {
    name: "Charlie Chenyu Zhang",
    title: "Sponsorship Chair",
    photo: member7,
    description: `
    <ul>
    <li>Bachelor's in Computer Mathematics and Data Science from the University of Toronto.</li>
    <li>Founder & President of GPTs.School, leading education renaissance with AR/VR and AI.</li>
    </ul>
    `,
  },
  {
    name: "Julie Liu",
    title: "Alumni Relationship Chair",
    photo: member13,
    description: `
    <ul>
    <li>Currently studying Human Development and Education at Harvard University.</li>
    <li>Specialist in behavioral intervention for children with Autism and ADHD.</li>
    <li>Research Intern at the Harvard Child Development Center.</li>
    </ul>
    `,
  },
  {
    name: "Zichen Sheng",
    title: "Alumni Relationship Chair",
    photo: member14,
    description: `
    <ul>
    <li>Master's in Educational Leadership, Organizations, and Entrepreneurship from Harvard University.</li>
    <li>Co-founder of RDEC, a pioneer in digital music education, leading the expansion to over 500 campuses, impacting over 100,000 children.</li>
    </ul>
    `,
  },
  {
    name: "William Feng",
    title: "Internal Deputy Vice President",
    photo: member3,
    description: `
    <ul>
    <li>Currently studying Educational Leadership, Organizations, and Entrepreneurship at Harvard University.</li>
    <li>Author of books on Chinese education, partner in K12 social science education and higher education consulting firm, reality show contestant in "The Strongest Brain", "The Wonderful World of Chinese Characters", and popular contestant in "Idiom World"; interviewed by "China Youth Daily".</li>
    <li>Vice-Chair of the Harvard Graduate Consulting Club.</li>
    </ul>
    `,
  },
  {
    name: "Suna Sun",
    title: "Marketing and Branding Chair",
    photo: member2,
    description: `
    <ul>
      <li>Currently studying Education Design Innovation and Technology at Harvard University.</li>
      <li>Social media blogger with over ten million views across platforms.</li>
      <li>Former intern at Coca-Cola and Tencent Marketing Department.</li>
    </ul>
    `,
  },
  {
    name: "Qian Liu",
    title: "Marketing and Communication Chair",
    photo: member5,
    description: `
    <ul>
    <li>Master's in Humanities and Arts from the University of Chicago.</li>
    <li>Co-founder & Writing Expert at Essayer LLC.</li>
    <li>Consulting Advisor at PrepEdu Consulting LLC.</li>
    </ul>
    `,
  },
  {
    name: "Yiting Ouyang",
    title: "Operation and Events Chair",
    photo: member6,
    description: `
    <ul>
    <li>Currently studying Education Design Innovation and Technology at Harvard University.</li>
    <li>Counselor at USYD (United States Youth Development Association).</li>
    <li>Has served for five consecutive years as the Department Head of Activities for the "Capable Youth" summer camp.</li>
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
  height: 300px;
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
        <PageTitle>Meet the Team</PageTitle>
        <Grid container spacing={5}>
          {teamMembers.map((member, idx) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={idx}>
              <CardHover
                onClick={() => handleCardClick(member)}
                className="member-card"
              >
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
        <PageTitle>Advisors</PageTitle>
        <Grid container spacing={5}>
          {advisoryMembers.map((member, idx) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={idx}>
              <CardHover
                onClick={() => handleCardClick(member)}
                className="member-card"
              >
                <CardMediaComponent
                  component="img"
                  image={member.photo}
                  alt={member.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {member.name}
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
          isAdvisory={true}
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

      <Footer />
    </MainContainer>
  );
};

export default TeamPage;
