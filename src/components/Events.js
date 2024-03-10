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
import event1 from "../assets/events/apesiaevent-1.png";
import event2 from "../assets/events/apesiaevent-2.png";
import event3 from "../assets/events/apesiaevent-3.png";
import event4 from "../assets/events/apesiaevent-4.png";
import event5 from "../assets/events/apesiaevent-5.png";
import event6 from "../assets/events/apesiaevent-6.png";
import Header from "./Header";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

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

const Spacer = styled.div`
  padding: 5rem 0;
`;

const EventImage = styled.img`
  width: 50%;
  max-width: 500px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const Events = () => {
  const navigate = useNavigate(); // Hook to get the navigate function

  return (
    <MainContainer>
      <ResponsiveApBar />
      <ContentContainer>
        <Header name={"Events"} />
        <Spacer />

        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              Sun, Nov 19 Boston HGSE APESIA 2022 - Kickoff Meeting (Fall 2022 -
              11/19/2023)
              <div className="img-container">
                <EventImage src={event6} />
              </div>
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
              <div className="img-container">
                <EventImage src={event5} />
                <Button
                  variant="contained"
                  onClick={() => navigate("/edspark2023")}
                  sx={{
                    my: 2,
                    display: "block",
                    fontWeight: 700,
                    marginLeft: "auto",
                  }}
                >
                  {"Learn more"}
                </Button>
              </div>
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
              <div className="img-container">
                <EventImage src={event4} />
              </div>
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
              <div className="img-container">
                <EventImage src={event3} />
              </div>
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
              <div className="img-container">
                <EventImage src={event2} />
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>
              Sat, Feb 18 Zoom Meeting HGSE APESIA 2023 - Kick-Off Event (Spring
              2023 - 2/18/2023)
              <div className="img-container">
                <EventImage src={event1} />
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </ContentContainer>
      <Footer />
    </MainContainer>
  );
};

export default Events;
