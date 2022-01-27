import React from "react";
import Button from "../shared/Button";
import RatingSelect from "./RatingSelect";
import Card from "../shared/Card";
import { useState } from "react";

const Form = ({ addFeedback }) => {
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    if (reviewText === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (reviewText !== "" && reviewText.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Text must be at least 10 characters");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setReviewText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviewText.trim().length >= 10) {
      const newFeedback = {
        text: reviewText,
        rating: rating,
      };
      setReviewText("");
      addFeedback(newFeedback);
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h4>How would you rate our service?</h4>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={reviewText}
          ></input>
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default Form;
