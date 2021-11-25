import React, { useState } from "react";
import styled from "styled-components";
import ListItem from "./ListItem";
const TodoEvents = () => {
  const [listItems, setListItems] = useState([]);
  const [item, setItem] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item === "") return;
    const itemExists = listItems.find((listItem) => listItem.event === item);
    if (itemExists) return;

    setItem("");

    setListItems((prev) => {
      return [...prev, { event: item, id: new Date().getTime().toString() }];
    });
  };
  const handleChange = (e) => setItem(e.target.value);
  return (
    <Wrapper>
      <List>
        <Form onSubmit={handleSubmit}>
          <Input
            value={item}
            type="text"
            placeholder="Add a new Event to Learning Javascript"
            autoFocus
            onChange={handleChange}
          />
          <span>+</span>
        </Form>
        {listItems.length === 0 && (
          <h2 style={{ color: "lightseagreen", fontSize: 16 }}>
            Your Todo Events is currently empty!!.Add Events above.
          </h2>
        )}

        {listItems.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            setListItems={setListItems}
            listItems={listItems}
          ></ListItem>
        ))}
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #f6f6f6;
`;
const List = styled.ul`
  list-style-type: circle;
  padding: 13px 20px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  span {
    color: lightseagreen;
    font-weight: 900;
    font-size: 21px;
    background: white;
    padding: 2.5px 6px;
    cursor: pointer;
    border-left: 3px solid lightseagreen;
    &:hover {
      transform: scale(1.02);
    }
  }
`;
const Input = styled.input`
  border: none;
  border-bottom: 3px solid lightseagreen;
  transition: all 0.4s linear;
  padding: 6px;
  width: 80%;
  &:focus {
    outline: none;
    border-color: green;
  }
`;

export default TodoEvents;
