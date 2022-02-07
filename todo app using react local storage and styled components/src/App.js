import DisplayDiv from "./components/DisplayDiv";
import Form from "./components/Form";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global";

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
      checked: false,
    };
    setItemWithId([Data, ...itemWithId]);
  };

  const first = itemWithId.filter((item) =>
    item.toDoData.toLowerCase().includes(search.toLowerCase())
  );

  const onDelete = (itemId) => {
    const updatedTodo = itemWithId.filter((item) => item.id !== itemId);
    setItemWithId(updatedTodo);
  };

  const handleCheck = (id) => {
    const updatedCheck = itemWithId.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItemWithId(updatedCheck);
  };

  return (
    <>
      <GlobalStyles />
      <Header />
      <Container>
        <Form addToDoItem={addToDoItemhandler} />
        <SearchBox search={search} setSearch={setSearch} />
        <DisplayDiv
          itemWithId={first}
          onDelete={onDelete}
          onCheck={handleCheck}
        />
      </Container>
      <ToastContainer />
    </>
  );
}

export default App;
