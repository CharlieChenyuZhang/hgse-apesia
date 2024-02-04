import React from "react";
import styled from "styled-components";
import apesiaLogo from "../assets/apesia-logo.png";

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

const EmailLink = styled.a`
  color: inherit; /* Optional: ensures the link color matches your text color */
  text-decoration: none; /* Optional: removes the underline from the link */
`;

const Footer = () => {
  return (
    <>
      <Banner>
        We build education diversity, equity, and inclusion for all learners
      </Banner>

      <BottomImageTextContainer>
        <BottomImageContainer>
          <img src={apesiaLogo} alt="APESIA logo" style={{ height: "80px" }} />
        </BottomImageContainer>

        <BottomTextContainer>
          The Harvard Graduate School of Education and/or shield are trademarks
          of the President and Fellows of Harvard College and are used by
          permission of Harvard University.
        </BottomTextContainer>

        <BottomTextContainer>
          <EmailLink href="mailto:harvardgseapesia@gmail.com" target="_blank">
            harvardgseapesia@gmail.com
          </EmailLink>
        </BottomTextContainer>
      </BottomImageTextContainer>
    </>
  );
};

export default Footer;
