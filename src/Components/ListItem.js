import React from "react";
import styled from "styled-components";
import { FaEdit, FaTrash } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
const ListItem = ({
  item,
  setListItems,
  listItems,
  setItem,
  setEditing,
  setEditId,
  setCompletedId,
  setCompleted,
}) => {
  const { id, event, completed } = item;
  const handleClick = () => {
    const newList = listItems.filter((item) => item.id !== id);
    setListItems(newList);
  };

  const handleEdit = () => {
    setEditing(true);
    setEditId(id);
    const itemToUpdate = listItems.find((item) => item.id === id);
    setItem(itemToUpdate.event);
  };

  const handleCheck = () => {
    setCompletedId(id);
    setCompleted(true);
  };
  return (
    <Wrapper checked={completed} disabled={completed}>
      <h6>{event}</h6>
      <Buttons>
        <CheckIcon onClick={handleCheck}>
          <AiFillCheckCircle />
          <h6>Check</h6>
        </CheckIcon>
        <EditButton onClick={handleEdit}>
          <FaEdit />
          <h6>Edit</h6>
        </EditButton>
        <DeleteIcon onClick={handleClick}>
          <FaTrash />
          <h6>Delete</h6>
        </DeleteIcon>
      </Buttons>
    </Wrapper>
  );
};
const Wrapper = styled.li`
  font-size: 18px;
  padding: 5px 0;
  margin-left: 14px;
  display: flex;
  position: relative;
  margin: 0;
  justify-content: space-between;
  align-items: center;
  &::after {
    content: "";
    position: absolute;
    bottom: 16px;
    left: 6px;
    right: 0;
    height: 1px;
    background: lightseagreen;
    opacity: ${(props) => (props.checked === true ? 1 : 0)};
  }
  h6 {
    cursor: pointer;
    transition: all 0.3s linear;
    margin: 0 0 5px 5px;
    &:hover {
      color: lightseagreen;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
`;

const DeleteIcon = styled.button`
  cursor: pointer;
  font-size: 11px;
  border: none;
  color: red;
  background: transparent;
  transition: all 0.5s linear;
  position: relative;
  left: -3px;
  h6 {
    position: absolute;
    opacity: 0;
    left: 0;
  }
  &:hover {
    opacity: 0.8;
    h6 {
      opacity: 1;
    }
  }
`;

const EditButton = styled.button`
  cursor: pointer;
  font-size: 12px;
  color: green;
  border: none;
  background: transparent;
  position: relative;
  left: -3px;
  h6 {
    position: absolute;
    opacity: 0;
  }
  &:hover {
    opacity: 0.8;
    h6 {
      opacity: 1;
    }
  }
`;
const CheckIcon = styled.button`
  cursor: pointer;
  font-size: 15px;
  color: green;
  border: none;
  position: relative;
  background: transparent;
  h6 {
    position: absolute;
    left: -3px;
    opacity: 0;
  }
  &:hover {
    opacity: 0.8;
    h6 {
      opacity: 1;
    }
  }
`;
export default ListItem;
