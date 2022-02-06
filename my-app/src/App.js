import "./App.css";
import DisplayDiv from "./components/DisplayDiv";
import Form from "./components/Form";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [search, setSearch] = useState("");
  const [itemWithId, setItemWithId] = useState(
    JSON.parse(localStorage.getItem("ToDoWithId"))
      ? JSON.parse(localStorage.getItem("ToDoWithId"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("ToDoWithId", JSON.stringify(itemWithId));
  }, [itemWithId]);

  const addToDoItemhandler = (newData) => {
    const Data = {
      id: uuidv4(),
      toDoData: newData,
    };
    setItemWithId([Data, ...itemWithId]);
  };

  const first = itemWithId.filter((item) =>
    item.toDoData.toLowerCase().includes(search.toLowerCase())
  );

  const onDelete = (itemId) => {
    console.log(itemId);

    const updatedTodo = itemWithId.filter((item) => item.id !== itemId);
    console.log("updated list:", updatedTodo);
    setItemWithId(updatedTodo);
  };

  return (
    <div>
      <Header />
      <ToastContainer />
      <Form addToDoItem={addToDoItemhandler} />
      <SearchBox search={search} setSearch={setSearch} />
      <DisplayDiv itemWithId={first} onDelete={onDelete} />
    </div>
  );
}

export default App;
