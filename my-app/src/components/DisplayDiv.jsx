import React from "react";

const DisplayDiv = ({ toDoItem }) => {
  if (toDoItem.length === 0) {
    return <h3>You don't have any thing to do</h3>;
  } else {
    return (
      <div>
        {toDoItem.map((item) => (
          <ul>
            <li>{item}</li>
          </ul>
        ))}
      </div>
    );
  }
};

export default DisplayDiv;
