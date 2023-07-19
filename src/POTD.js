import React, { useState } from "react";
import axios from "axios";
import "./POTD.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

const POTD = () => {
  const [date, setDate] = useState("");
  const [picData, setPicData] = useState(null);

  const fetchPicOfTheDay = async () => {
    const response = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=SxNAsbFbGe2X6cTOR5Ee0t0cf5V9WCnbQ3cNXj55&date=${date}`
    );
    setPicData(response.data);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPicOfTheDay();
  };

  return (
    <div className="POTD-container">
      <div className="POTD-title">Picture Of The Day</div>
      <div className="POTD-wrapper">
        {picData && (
          <img src={picData.url} alt={picData.title} className="generated-pic" />
        )}
        <div className="POTD-text-wrapper">
          <div className="Date-title">Choose The Date</div>
          <div className="date-input">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="Date">
                <Form.Control
                  type="date"
                  placeholder="Select Your Date"
                  className="custom-input"
                  value={date}
                  onChange={handleDateChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Search
              </Button>
            </Form>
          </div>
          {picData && (
            <div className="pic-description">
              <h2 className="pic-title">{picData.title}</h2>
              <p>{picData.explanation}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default POTD;
