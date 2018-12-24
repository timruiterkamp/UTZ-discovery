import React from "react";
import styled from "styled-components";
import themeConfig from "../../../theme/themeConfig";
import Loader from "react-loader-spinner";

const LoadingLayout = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${themeConfig.color.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LoadingTitle = styled.h1`
  font-family: ${themeConfig.font.title};
  color: ${themeConfig.color.secondary};
  font-size: 3em;
`;

export default function LoadingScreen(props) {
  return (
    <LoadingLayout className={props.hidden ? "hidden" : ""}>
      <LoadingTitle>UTZ Discovery</LoadingTitle>
      <Loader
        type="RevolvingDot"
        color={themeConfig.color.secondary}
        height="100"
        width="100"
      />
    </LoadingLayout>
  );
}
