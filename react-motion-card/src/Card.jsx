import React from "react";
import { Motion, spring } from "react-motion";
import styled from "styled-components";

const FancyTitle = () => {
  return (
    <Motion defaultStyle={{ left: -100 }} style={{ left: spring(10) }}>
      {(val) => (
        <h1 style={{ position: "absolute", ...val }}>
          Hello!{" "}
          <span role="img" aria-label="Hand wave">
            👋
          </span>
        </h1>
      )}
    </Motion>
  );
};

const CardWrapper = styled.div`
  background: #fff;
  max-width: 500px;
  margin: 2rem auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  transform: ${(props) => `scale(${props.scale})`};
`;

const FooterWrapper = styled.div`
  border-top: 2px solid #f7f7f7;
  padding: 1rem 0;
  text-align: center;
`;

const HeaderWrapper = styled.div`
  background-image: url("/palm-trees.jpg");
  min-height: 150px;
  color: white;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  background-size: 100%;
  background-position: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 1rem;
`;

const MainWrapper = styled.div`
  padding: 1rem;
`;

const Button = styled.button`
  background-image: linear-gradient(to bottom, #fff, #f3f3f3);
  border-radius: 8px;
  letter-spacing: 1px;
  padding: 10px 20px;
  margin: 0 0.45rem;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  &:active {
    background: #eee;
  }
`;

const Header = ({ title }) => {
  return (
    <HeaderWrapper>
      <h1>{title}</h1>
    </HeaderWrapper>
  );
};

const Main = ({ content }) => {
  return (
    <MainWrapper>
      <p>{content}</p>
    </MainWrapper>
  );
};

const Footer = () => {
  return (
    <FooterWrapper>
      <Button>View</Button>
      <Button>Save for later</Button>
    </FooterWrapper>
  );
};

const Card = ({ scale, title, content }) => {
  // const { scale, title, content } = this.props;
  return (
    <CardWrapper scale={scale}>
      <Header title={title} />
      <Main content={content} />
      <Footer />
    </CardWrapper>
  );
};

Card.defaultProps = {
  title: "My card title",
  content: "Bacon ipsum dolor amet pork chop pork shoulder.",
};

export default Card;
