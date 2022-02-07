import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Label } from "./styles/Label.styled";
import { List } from "./styles/List.styled";

const DisplayDiv = ({ itemWithId, onDelete, onCheck }) => {
  if (itemWithId.length === 0) {
    return <h3>No todo</h3>;
  } else {
    return (
      <div>
        {itemWithId.map((item) => {
          if (item.checked) {
            return (
              <List key={item.id}>
                <input
                  type="checkbox"
                  style={{ height: "24px", width: "24px" }}
                  checked
                  onClick={() => {
                    onCheck(item.id);
                  }}
                />
                <Label>
                  <strike>{item.toDoData}</strike>
                </Label>
                {/* {item.checked ? item.toDoData.strike() : item.toDoData} */}
                <span
                  onClick={() => {
                    onDelete(item.id);
                  }}
                >
                  <FaTrashAlt style={{ color: "#6a8ec8" }} />
                </span>
              </List>
            );
          } else {
            return (
              <List key={item.id}>
                <input
                  type="checkbox"
                  style={{ height: "24px", width: "24px" }}
                  onClick={() => {
                    onCheck(item.id);
                  }}
                />
                <Label>{item.toDoData}</Label>
                {/* {item.checked ? item.toDoData.strike() : item.toDoData} */}
                <span
                  onClick={() => {
                    onDelete(item.id);
                  }}
                >
                  <FaTrashAlt style={{ color: "#6a8ec8" }} />
                </span>
              </List>
            );
          }
        })}
      </div>
    );
  }
};

export default DisplayDiv;
