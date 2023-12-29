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
    name: "Zichen Sheng",
    title: "Founder | Internal Deputy Vice President",
    photo: member14,
    description: `Zichen Sheng, based in Beijing, China, is a dedicated education professional and entrepreneur. A Harvard University graduate with a Master's in Education, Zichen co-founded RDEC in 2012, a pioneering digital music education company. As the Co-founder and Shareholder, he oversees the management of direct-sale and franchised campuses, achieving significant revenue growth and implementing innovative teaching methods. He has led the expansion of RDEC to over 500 campuses nationwide, impacting over 100,000 children through innovative music education methods.`,
  },
  {
    name: "Anthemius (Xiao) Li",
    title: "Founder | President",
    photo: member15,
    description: `
    <ul>
    <li>Harvard Graduate School of Education</li>
    <li>2021 Panel Speaker at Harvard China Education Symposum</li>
    <li>​CEO of Enlight Education</li>
    </ul>
    `,
  },
  {
    name: "Manabu Nagaoka",
    title: "EVP",
    photo: member0,
    description: `A seasoned executive with extensive management experiences in all areas of media industry including TV, Film, Music, Theater, Fashion, Advertising, Consumer Products, Theme Parks, Educational Media and Technologies. Currently, serves Sesame Workshop as VP General Manager and Executive Producer, and Head of EFL/SEL Global Business. An Ed.M candidate at Harvard.`,
  },
  {
    name: "Lei Wu",
    title: "President",
    photo: member10,
    description: `
    <ul>
    <li>Harvard Graduate School of Education - Education Policy and Analysis</li>
    <li>Co-founder of Leadium (AI Leadership Coaching), Co-founder of Go connect, Cooperated with over thirty enterprises & organizations, with over 30,000 users.</li>
    <li>Vice President of Community at MIT-Chief</li>
    <li>Developed a gourmet & event software, former project manager in an NGO,  former data strategist in higher education, former reviewer for policy journals, and former management consultant.</li>
    </ul>
    `,
  },
  {
    name: "Evelyn Li",
    title: "EVP",
    photo: member1,
    description: `I'm Evelyn Li, currently pursuing a master's degree in education leadership, Organizations, and Entrepreneurship (ELOE) at the Harvard Graduate School of Education. I hold a BA in Psychology, with a minor in Business Management from Cornell University. I hold positions on the Executive Board of the HGSE Alumni Community - China (HACC) and The Chinese Education Symposium (CES). Previously, I served as the Vice President of the Cornell Chinese Students and Scholars Association (CUCSSA). My academic and professional interests center around positive psychology, social-emotional learning, and mindfulness.`,
  },

  {
    name: "Zihan Sun",
    title: "Marketing Chair",
    photo: member2,
    description: `
    <ul>
      <li>HGSE LDIT24'</li>
      <li>Own Social Media Channel with 5 million+ views</li>
      <li>The Coca-Cola Company Marketing Internship</li>
      <li>Slogan: “A mysterious hole you need to explore”</li>
    </ul>
    `,
  },
  {
    name: "William Feng",
    title: "Internal Deputy Vice President",
    photo: member3,
    description: `William (Chenjunyi) Feng is a master's student in education leadership, organizations, & entrepreneurship. He has a strong background in economics, marketing, and communications, and gained experience in various creative endeavors, including participation in Chinese reality TV shows and delivering engaging bilingual stand-up comedy/improv performances. He also co-authored an educational book, reflecting his commitment to improving education for underprivileged children and higher education.`,
  },
  {
    name: "Rainy Mao",
    title: "Secretary Chair",
    photo: member4,
    description: `Rainy is presently undertaking her master's degree in Human Development and Education (HDE) at the Harvard Graduate School of Education. She earned her bachelor's degree with a major in psychology and a minor in educational studies at UC San Digo. With a background in early childhood education, Rainy brings two years of teaching experience to her academic pursuits. Her research studies and interests are centered around cognitive development, social-emotional learning, and multicultural education.`,
  },
  {
    name: "Qian Liu",
    title: "Marketing Chair",
    photo: member5,
    description: `Qian received her B.A. degree from Barnard College of Columbia University, majoring in Comparative Literature and Psychology. She also held a master degree in Humanities from University of Chicago, with a concentration on East Asian and Comparative Literature. She is an educational consultant and co-founder of Essayer LLC.`,
  },
  {
    name: "Yiting Ouyang",
    title: "Operation Chair",
    photo: member6,
    description: `I am a current Harvard Master of Education candidate, specializing in Learning Design, Innovation, and Technology. With a foundation in Psychology and Education, I also serve as a tutor at USYD and was affiliated with UMSU at UniMelb. Additionally, I've led activities at the Capable Teens summer camp for over 5 years.`,
  },
  {
    name: "Charlie Chenyu Zhang",
    title: "Sponsorship Chair",
    photo: member7,
    description: `Charlie has four years of experience working as a software engineer and two years of teaching experience in Computer Science. He is currently the founder of a startup called GPTs.School, which aims to bring about an educational renaissance using emerging technologies such as AR/VR and generative AI.`,
  },
  {
    name: "Zaher Ibrahim",
    title: "Public Relationship Deputy Chair",
    photo: member8,
    description: `
    <ul>
    <li>Your current school and program: Sloan Fellows MBA at MIT</li>
    <li>Two of your most highlighted personal/work experiences: Regional Director of Leadership Circle, Leadium Coaching and Consulting</li>
    <li>A one-sentence personal slogan: Show Up, Grow Up, Step Up</li>
    </ul>
    `,
  },
  {
    name: "Swati Garg",
    title: "Treasurer Chair",
    photo: member9,
    description: `With over 16 years of technology leadership experience across global markets and a current focus on an MBA at MIT Sloan, I am uniquely qualified to lead a startup. My tenure as Director of Engineering at WorkSpan and Senior Engineering Manager at Mentor Graphics showcases my ability to drive significant product quality improvements and revenue growth. My deep technical expertise, coupled with a strategic outlook honed through hands-on involvement in AI, Operations Management, and Financial Management, positions me perfectly to found and scale a startup, especially in innovative tech sectors.`,
  },
  {
    name: "Connie Guo",
    title: "Relationship Deputy Chair",
    photo: member11,
    description: `I'm Connie, a Harvard Education Leadership, Organizations, and Entrepreneurship master's graduate. As founder of Ed Pathways Consulting, I lead a team, creating 400+ education podcasts with 60K+ fans. A USC graduate in Public Relations and Law, I bring diverse experience in research from Columbia University and global marketing from 4A advertising companies.`,
  },
  {
    name: "Haoran Wu",
    title: "External Deputy President",
    photo: member12,
    description: `
    <ul>
    <li>Founder | External Deputy Vice President</li>
    <li>Stanford Graduate School of Education </li>
    <li>Vice President of U8 World Summit </li>
    <li>Vice President of Stanford China Students and Scholars Association</li>
    </ul>
    `,
  },
  {
    name: "Julie Liu",
    title: "Alumni Relationship Chair",
    photo: member13,
    description: `As a master's student in Human Development and Education at HGSE, I am currently interning at the Harvard Center on the Developing Child, focusing on program management and evaluation. Holding a Bachelor's Degree in Psychology from NYU, my professional experience includes working as a Behavioral Interventionist for children with Autism and ADHD and serving as an Educational Consultant in Shanghai for two years.`,
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
        <PageTitle>Meet the Team</PageTitle>
        <Grid container spacing={5}>
          {teamMembers.map((member, idx) => (
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
        <PageTitle>Advisors</PageTitle>
        <Grid container spacing={5}>
          {advisoryMembers.map((member, idx) => (
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
