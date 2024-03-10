import React from "react";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import hgseBuilding from "../assets/hgse-building.png";
import backgroundVideo from "../assets/Tour-page-high-res.mp4";

const BREAK_POINT = "1200px";

const MainContainer = styled.div`
  height: 100%;
`;

const ImageOverlayContainer = styled.div`
  position: relative;
  text-align: center;
  margin-top: 70px;
`;

const ImageWithOverlay = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ResponsiveTypography = styled(Typography)`
  font-size: 4rem;
  color: white;
  margin: 20px;
  text-align: center;
`;

export default function Header(props) {
  const { name } = props;
  return (
    <MainContainer>
      <ImageOverlayContainer>
        <video
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "300px", objectFit: "cover" }}
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Overlay>
          <ResponsiveTypography
            variant="h3"
            component="div"
            sx={{
              mr: 2,
              fontFamily: "Roboto",
              textDecoration: "none",
            }}
          >
            <b>{name}</b>
          </ResponsiveTypography>
        </Overlay>
      </ImageOverlayContainer>
    </MainContainer>
  );
}
