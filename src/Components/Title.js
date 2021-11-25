import React from "react";
import styled from "styled-components";
const Title = () => {
  return (
    <Wrapper>
      <Text>
        You want to plan your day better and ensure effective time utilization?
        <br />
        This amazing app will help you do exactly that
      </Text>
      <h3>
        Manage your time better by outlining what you plan to do and marking
        them off when done.
      </h3>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 90vw;
  max-width: 600px;
  font-family: "Cookie", cursive;
  font-size: 23px;
  letter-spacing: 1.3px;
`;

const Text = styled.h2`
  color: white;
  h3 {
    color: white;
  }
`;

export default Title;
