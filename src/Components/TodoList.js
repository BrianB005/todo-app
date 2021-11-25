import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import Alert from "./Alert";
import ListItem from "./ListItem";

const TodoList = () => {
  const [listItems, setListItems] = useState(
    localStorage.getItem("todoItems")
      ? JSON.parse(localStorage.getItem("todoItems"))
      : []
  );
  console.log(listItems);
  const [item, setItem] = useState("");
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState("");
  const [completed, setCompleted] = useState(false);
  const [completedId, setCompletedId] = useState("");
  const completedTasks = listItems.filter(
    (listItem) => listItem.completed === true
  );
  useEffect(() => {
    if (completed) {
      let newList = [
        listItems.map((listItem) => {
          if (listItem.id === completedId) {
            return { ...listItem, completed: true };
          }
          return listItem;
        }),
      ];

      setListItems(...newList);
    }
    // eslint-disable-next-line
  }, [completed, completedId]);
  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(listItems));
  }, [listItems]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      const editedItem = listItems.find((listItem) => listItem.id === editId);

      if (editedItem && item !== "") {
        let newList = [
          listItems.map((listItem) => {
            if (listItem.id === editId) {
              return { ...listItem, event: item };
            }
            return listItem;
          }),
        ];
        setListItems(...newList);
        setEditing(false);

        setItem("");
      } else if (item === "") {
        alert("You have not made any changes.");
      }
    } else if (!editing) {
      if (item === "") return;
      const itemExists = listItems.find((listItem) => listItem.event === item);
      if (itemExists) return;

      setItem("");

      setListItems((prev) => {
        return [
          ...prev,
          {
            event: item,
            completed: false,
            id: new Date().getTime().toString(),
          },
        ];
      });
    }
  };
  const handleChange = (e) => setItem(e.target.value);
  const clearDone = () => {
    const newList = listItems.filter(
      (listItem) => listItem.completed === false
    );
    setListItems(newList);
  };
  return (
    <Wrapper>
      <List>
        <Form onSubmit={handleSubmit}>
          <Input
            value={item}
            type="text"
            placeholder="Add a new Todo Item"
            autoFocus
            onChange={handleChange}
          />
          <button>+</button>
        </Form>
        {listItems.length === 0 && (
          <h2 style={{ color: "lightseagreen", fontSize: 16 }}>
            Your Todo List is currently empty!!.Add Events above.
          </h2>
        )}

        {listItems.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            setListItems={setListItems}
            listItems={listItems}
            setItem={setItem}
            setEditing={setEditing}
            setEditId={setEditId}
            completed={completed}
            setCompleted={setCompleted}
            setCompletedId={setCompletedId}
          ></ListItem>
        ))}
      </List>
      {completedTasks.length > 0 && (
        <Button onClick={clearDone}>Clear done</Button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: lightgray;
  min-width: 300px;
`;
const List = styled.ul`
  list-style-type: circle;
  padding: 13px 20px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  button {
    color: lightseagreen;
    font-weight: 900;
    font-size: 21px;
    background: white;
    border: none;
    padding: 0px 6px;
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
const Button = styled.button`
  padding: 6px 12px;
  border: 2px solid lightseagreen;
  transition: all 0.4s linear;
  display: flex;
  margin-left: 100px;
  &:hover {
    background: lightseagreen;
    outline: none;
  }
`;
export default TodoList;
