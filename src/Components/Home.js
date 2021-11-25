import React from "react";
import styled from "styled-components";
import TodoList from "./TodoList";
// import TodoEvents from "./TodoEvents";
import Title from "./Title";
const Home = () => {
  return (
    <Wrapper>
      <Title />
      <ContentWrappper>
        <TodoList />
        {/* <TodoEvents /> */}
      </ContentWrappper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: lightseagreen;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const ContentWrappper = styled.div`
  display: flex;
  width: 90vw;
  gap: 60px;
  max-width: 600px;
  margin: 0 auto;
`;

export default Home;
