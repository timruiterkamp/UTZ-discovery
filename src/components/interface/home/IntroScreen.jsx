import React, { Component } from "react";
import styled from "styled-components";
import themeConfig from "../../../theme/themeConfig";
import { setIntroMessageStatus } from "../../../store/reducers/data/DataActions";
import { connect } from "react-redux";

const IntroContainer = styled.section`
  width: 50vw;
  height: 60vh;
  max-width: 1000px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: 1s fadeIn forwards;
  z-index: 10000;
  background-color: white;
  padding: 1.5em;
  display: ${props => props.display};
  flex-wrap: wrap;

  @media (max-width: 960px) {
    width: 100vw;
    height: 100vh;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
const Title = styled.h1`
  font-size: 2.5em;
  color: ${themeConfig.color.grey};
  margin: 0;
  font-family: ${themeConfig.font.title};
  font-weight: 700;
  text-align: center;
  padding-top: 1em;
`;

const Text = styled.p`
  font-size: 1em;
  color: ${themeConfig.color.grey};
  margin: 1em auto;
  width: 50%;
  font-family: ${themeConfig.font.text};
  text-align: center;

  @media (max-width: 960px) {
    display: none;
  }
`;

const MobileText = styled(Text)`
  display: none;

  @media (max-width: 960px) {
    display: block;
    font-size: 1.25em;
  }
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ContainerItem = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  width: 220px;
  height: 55px;
  background-color: ${themeConfig.color.primary};
  color: ${themeConfig.color.secondary};
  border: 0;
  font-size: 1.25em;
  font-family: ${themeConfig.font.text};
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  transition: 0.3s ease-in-out;

  @media (max-width: 960px) {
    position: fixed;
    bottom: 2em;
  }

  :hover {
    background-color: ${themeConfig.color.secondary};
    color: white;
  }
`;

const Image = styled.img`
  width: 197px;
  height: 197px;
  margin: 0 auto;
`;

const SubTitle = styled.p`
  font-size: 1em;
  color: ${themeConfig.color.grey};
  margin: 0.5em auto 2em;
  width: 50%;
  font-family: ${themeConfig.font.text};
  text-align: center;

  @media (max-width: 960px) {
    display: none;
  }
`;
class IntroScreen extends Component {
  state = {
    read: false
  };
  clickHandle = () => {
    this.props.setIntroMessageStatus(true);
    this.setState({
      read: true
    });
  };
  render() {
    return (
      <IntroContainer display={this.state.read ? "none" : "block"}>
        <Title>Hello, Welcome!</Title>
        <MobileText>
          This website is meant to be viewed on desktop. This website is not
          responsive and the experience will not be the same. Please use this
          website on desktop
        </MobileText>
        <SubTitle>How does it work?</SubTitle>
        <ContentContainer>
          <ContainerItem>
            <Image src="/img/intro1.png" alt="move around" />
            <Text>Freely move around</Text>
          </ContainerItem>
          <ContainerItem>
            <Image src="/img/intro2.png" alt="select country" />
            <Text>Select the desired country</Text>
          </ContainerItem>
          <ContainerItem>
            <Image src="/img/intro3.png" alt="explore filter and compare" />
            <Text>Explore, filter and compare data!</Text>
          </ContainerItem>
        </ContentContainer>
        <Button onClick={this.clickHandle}>Got it!</Button>
      </IntroContainer>
    );
  }
}

const mapStateToProps = state => ({
  state: {
    introStatus: state.data.introStatus
  }
});

const actions = {
  setIntroMessageStatus
};

export default connect(mapStateToProps, actions)(IntroScreen);
