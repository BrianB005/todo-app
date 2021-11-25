import React from "react";
import styled from "styled-components";
import FlashMessage from "react-flash-message";
const Alert = ({ title }) => (
  <Wrapper>
    <FlashMessage duration={2000}> {title}</FlashMessage>
  </Wrapper>
);

const Wrapper = styled.div`
  position: absolute;
  background: blue;
`;

export default Alert;
