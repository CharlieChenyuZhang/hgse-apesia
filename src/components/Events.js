import * as React from "react";
import styled from "styled-components";
import ResponsiveApBar from "./ResponsiveAppBar";
import Footer from "./Footer";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

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

const Events = () => {
  return (
    <MainContainer>
      <ResponsiveApBar />
      <ContentContainer>
        <PageTitle>Events</PageTitle>

        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              Sun, Nov 19 Boston HGSE APESIA 2022 - Kickoff Meeting (Fall 2022 -
              11/19/2023)
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              Sat, May 20 Harvard University, Gutman Library 303 EDspark:
              Igniting the Next Big Idea in Education
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              Wed, Apr 12 Cambridge Envisioning the Future of Asian Education
              Foreseen the Opportunities and Challenges in 2030
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              Tue, Mar 07 Cambridge HGSE APESIA 2023 - General Meeting (Spring
              2023 - 3/7/2023)
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              Sat, Feb 25 Zoom Meeting HGSE APESIA 2023 - General Meeting
              (Spring 2023 - 2/25/2023)
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>
              Sat, Feb 18 Zoom Meeting HGSE APESIA 2023 - Kick-Off Event (Spring
              2023 - 2/18/2023)
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </ContentContainer>
      <Footer />
    </MainContainer>
  );
};

export default Events;
