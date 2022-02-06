import React from "react";

const DisplayDiv = ({ itemWithId }) => {
  if (itemWithId.length === 0) {
    return <h3>No todo</h3>;
  } else {
    return (
      <div>
        {itemWithId.map((item) => (
          <li key={item.id} style={{ listStyleType: "none" }}>
            <input type="checkbox" />
            <span>{item.toDoData}</span>
            <button>delete</button>
          </li>
        ))}
      </div>
    );
  }
};

export default DisplayDiv;
