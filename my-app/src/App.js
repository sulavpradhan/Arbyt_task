import "./App.css";
import DisplayDiv from "./components/DisplayDiv";
import Form from "./components/Form";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [toDoItem, setToDoItem] = useState([]);
  const [search, setSearch] = useState("");

  const addToDoItemhandler = (newData) => {
    setToDoItem([newData, ...toDoItem]);
  };

  return (
    <div>
      <Header />
      <ToastContainer />
      <Form addToDoItem={addToDoItemhandler} />
      <SearchBox search={search} setSearch={setSearch} />
      <DisplayDiv
        toDoItem={toDoItem.filter((item) =>
          item.toLowerCase().includes(search.toLowerCase())
        )}
      />
    </div>
  );
}

export default App;
