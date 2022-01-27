import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import Form from "./components/Form";
import Feedbacklist from "./components/Feedbacklist";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const addFeedbackHandler = (newFeedback) => {
    // setFeedback([newFeedback,...])
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <>
      <Header />
      <div className="container">
        <Form addFeedback={addFeedbackHandler} />
        <FeedbackStats feedback={feedback} />
        <Feedbacklist feedback={feedback} handleDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;
