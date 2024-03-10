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
  width: 100%;
  max-width: 800px;
  align-items: center;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const H2Header = styled.h2`
  font-size: 24px;
  color: #333;
  margin: 20px 0;
`;

// SubH2Header
const SubH2Header = styled.h3`
  font-size: 20px;
  color: #666;
  margin-bottom: 15px;
`;

// Text
const Text = styled.p`
  color: #444;
  line-height: 1.5;
`;

// Section
const Section = styled.section`
  margin-bottom: 30px;
`;

// Link
const Link = styled.a`
  color: #0077cc;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

// List
const List = styled.ul`
  list-style-position: inside;
`;

// ListItem
const ListItem = styled.li`
  color: #444;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  width: 100%; /* This makes the container fill the entire width of the viewport */
`;

const Events = () => {
  return (
    <MainContainer>
      <ResponsiveApBar />
      <ContentContainer>
        <Header name={"Events"} />
        <Container>
          <EventImage src={event5} />
        </Container>
        <H2Header>Time & Location</H2Header>
        May 20, 2023, 10:00 AM – 4:30 PM Harvard University, Gutman Library 303,
        13 Appian Way, Cambridge, MA 02138
        <H2Header>About the event</H2Header>
        The competition is open to high school and college applicants,
        addressing educational inequities through innovation. Welcome to the
        EDspark: A Search for the Next Big Idea in Education! This competition
        aims to empower future education thought leaders by calling for bright
        minds in education business planning and innovative course design. We
        are looking for innovative and creative ideas that address educational
        inequities and positively impact the world of education. The competition
        is open to high school and college students with a passion for education
        and a desire to make a difference in their communities.
        <br />
        <br />
        If you have a unique idea for a business venture that could help improve
        education or an innovative course design that could benefit students and
        teachers alike, we want to hear from you. This is your chance to
        showcase your talents, develop your skills, and make a real difference
        in education. So, if you're a bright and ambitious student passionate
        about education, we invite you to join us in this exciting competition.
        Let's work together to create a brighter future for all students,
        regardless of their background or circumstances. We will have three
        categories of contestants: middle school, high school, and college
        teams. If you would like to participate, please register as a contestant
        by signing up here:{" "}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfWiNGKveih1CcjvyXiS8Xz3p95D8KfTSOww1chUtmndrJ3_Q/viewform"
          target="_blank"
        >
          Application Link
        </a>
        <H2Header>Event Schedule</H2Header>
        <div>10:00-10:30 AM: Reception</div>
        <div>10:30-10:50 AM: Opening Speech</div>
        <div>11:00 AM-12:00 PM: Expert Panel Speech</div>
        <div>12:00-12:45 PM: Lunch</div>
        <div>12:45-1:00 PM: Competition Introduction</div>
        <div>1:00-2:00 PM: Pitch Competition</div>
        <div>2:00-3:00 PM: Teaching Competition</div>
        <div>3:00-3:15 PM: Break</div>
        <div>3:15-3:45 PM: Award Announcement & Competition Closing</div>
        <div>3:45-4:30 PM: Networking Session</div>
        <H2Header>Our Criteria</H2Header>
        Innovation: We're looking for creative and unique ideas that address
        educational inequities in new and effective ways. Impact: Your idea
        should have the potential to make a positive impact in the world of
        education, whether it's by improving access, increasing equity, or
        enhancing the quality of education.
        <br />
        <br />
        Feasibility: Your idea should be feasible in terms of resources, time,
        and implementation. It should be realistic and able to be carried out
        within a reasonable timeframe. Sustainability: Your idea should have the
        potential to be sustainable over the long term. It should be financially
        viable and able to be implemented and maintained over time.
        <br />
        <br />
        Scalability: Your idea should have the potential to be scaled up or
        replicated in different settings, communities, or contexts.
        <br />
        <br />
        Clarity: Your idea should be clearly articulated and easy to understand.
        It should be presented in a clear and concise manner, with a focus on
        the key elements of the idea.
        <br />
        <br />
        Relevance: Your idea should be relevant to the theme of the competition,
        which is addressing educational inequities through innovation.
        Originality: Your idea should be original and not previously submitted
        to any other competition or program. Presentation: Your idea should be
        presented in a professional and engaging manner, with attention to
        detail, clarity, and coherence. Teamwork: If you are submitting a team
        project, we will also consider the level of collaboration and teamwork
        demonstrated in your submission.
        <H2Header>Applicant Requirements</H2Header> High school and college
        students who are currently enrolled in an accredited educational
        institution are eligible to apply. Applicants should have a genuine
        passion for education and a desire to make a positive impact in the
        field. Applicants must be able to demonstrate their idea through a
        dynamic educational community, such as through a video presentation,
        written proposal, or other appropriate means. Applicants should have a
        strong understanding of the educational inequities they are addressing
        and a clear plan for how their idea will help to mitigate these
        inequities. Applicants should be able to work independently and as part
        of a team, as the competition may involve collaboration with other
        participants. Applicants should be able to attend any required meetings
        or events associated with the competition, either in person or
        virtually. Applicants should have access to the necessary technology and
        resources to develop and present their idea. Applicants should not have
        submitted the same idea to any other competition or program and should
        be willing to sign a declaration to this effect.
        <H2Header>Work Submission</H2Header>
        Business plan or lesson plan submissions can be presented in person at
        our event or submitted as a pitch deck to{" "}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfWiNGKveih1CcjvyXiS8Xz3p95D8KfTSOww1chUtmndrJ3_Q/viewform"
          target="_blank"
        >
          Application Link
        </a>{" "}
        if you are unable to attend in person. Virtual attendance will be
        available for those who cannot attend in person.
        <br />
        <br />
        Contestants' business idea pitches and teaching demonstrations can be
        presented as an 8-minute in-person presentation at our event. Virtual
        attendance will also be available for those who cannot attend in person.
        <br />
        <br />
        All submissions should be made by the stated deadline of May 18th, 2023,
        and adhere to any specific guidelines or requirements provided by the
        competition organizers. Submissions should be original, innovative, and
        relevant to the competition theme of addressing educational inequities
        through innovation. Presentations and submissions should be clear,
        well-organized, and engaging and should demonstrate a strong
        understanding of the educational issues being addressed. All submissions
        should be free of any plagiarism or intellectual property violations and
        should be the original work of the applicant or team submitting the
        work.
        <br />
        <br />
        The competition organizers reserve the right to disqualify any
        submission that does not meet the criteria or guidelines of the
        competition, or that is deemed inappropriate or offensive in any way.
        <br />
        <br />
        All applicants will receive confirmation of their submission, and
        finalists will be notified of their status and invited to attend the
        final event, where winners will be announced. Education Participators
        and Innovators of China at Stanford and Harvard Graduate School of
        <br />
        <br />
        Education Asian Pacific Education Student International Association
        organize the event. Special thanks to the curriculum and evaluation
        rubric designer Serene Wang
        <br />
        <br />
      </ContentContainer>
      <Footer />
    </MainContainer>
  );
};

export default Events;
