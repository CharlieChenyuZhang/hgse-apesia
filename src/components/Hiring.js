import React from "react";
import styled from "styled-components";
import ResponsiveApBar from "./ResponsiveAppBar";
import Footer from "./Footer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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

function createData(name, number, tasks) {
  return { name, number, tasks };
}

const rows = [
  createData("External Deputy Department Member", 5, [
    "follow up and maintain relationships with off-campus organizations and businesses.",
    "develop resources and funding opportunities to support the organization's activities and programs.",
  ]),

  createData("Marketing and Branding Department Member", 5, [
    "develop and implement marketing strategies to increase the visibility and impact of the organization.",
    "manage social media accounts and create promotional materials such as tweets, posters, videos, etc.",
    "organize promotional events to increase student participation in the organization's activities.",
  ]),

  createData("Operation & Events Department Member", 5, [
    "planning, organizing and executing various activities of the student organization.",
    "coordinating team members to ensure smooth running of events.",
    "manage the budget for activities to ensure cost effectiveness.",
  ]),

  createData("Alumni Relationship Department Member", 5, [
    "establish and maintain contacts with alumni and organize alumni activities.",
    "develop alumni networks and promote exchanges and cooperation among alumni.",
  ]),
];

const Hiring = () => {
  return (
    <MainContainer>
      <ResponsiveApBar />
      <ContentContainer>
        <PageTitle>APESIA has started recruiting!</PageTitle>
        <b>Recruiting Population:</b>
        <br />
        Open globally, we are recruiting current students, scholars, and alumni
        of all Harvard colleges, as well as students and scholars of all major
        universities and colleges around the world, regardless of nationality.
        <br />
        <br />
        <b>Qualifications for Appointment:</b>
        <br />
        Passionate about APESIA, conscientious and practical, strong learning
        ability, willing to communicate and cooperate with others.
        <br />
        <br />
        <b>Recruit Information</b>
        <br />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Position</TableCell>
                <TableCell align="left">Number</TableCell>
                <TableCell align="left">Position Tasks</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.number}</TableCell>
                  <TableCell align="left">
                    <ol>
                      {row.tasks.map((each) => (
                        <li>{each}</li>
                      ))}
                    </ol>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <br />
        <b>Enrollment Method</b>
        <br />
        <b>Enrollment time:</b> 2024.01.09-2024.01.17
        <br />
        <br />
        <b>Recruitment Process:</b>
        <br />
        January 17th Submit application form by 11:59pm
        <br />
        January 17th - January 23rd Resume screening + online interviews
        <br />
        January 24th Inform the result by email.
        <br />
        <br />
        <b>Enrollment method:</b>
        <br />
        Click&nbsp;
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeO7mbS3tTMEk_5soBe47kV8HWp-SZcFEbFniz4nT4dl7oLeA/viewform?usp=pp_url"
          target="_blank"
        >
          this link
        </a>
        <br />
        <br />
        <br />
      </ContentContainer>
      <Footer />
    </MainContainer>
  );
};

export default Hiring;
