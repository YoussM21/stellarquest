import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./BookingFrom.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const destinations = [
  "Moon",
  "Mars",
  "Saturn",
  "Jupiter",
  "Pluto",
  "Mercury",
  "Venus",
  "Uranus",
  "Neptune",
];

function BookingForm() {
  const [destination, setDestination] = useState("");
  const [departurePlace, setDeparturePlace] = useState("");
  const [tripDate, setTripDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengerCount, setPassengerCount] = useState(1);

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleDeparturePlaceChange = (event) => {
    setDeparturePlace(event.target.value);
  };

  const handleTripDateChange = (event) => {
    setTripDate(event.target.value);
  };

  const handleReturnDateChange = (event) => {
    setReturnDate(event.target.value);
  };

  const handlePassengerIncrement = () => {
    setPassengerCount((prevCount) => prevCount + 1);
  };

  const handlePassengerDecrement = () => {
    if (passengerCount > 1) {
      setPassengerCount((prevCount) => prevCount - 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit} className="booking-form">
      <Form.Group className="mb-32" controlId="destination">
        <Form.Label>Destination</Form.Label>
        <Form.Select
          value={destination}
          onChange={handleDestinationChange}
          className="custom-select"
        >
          <option value="">Select destination...</option>
          {destinations.map((destination) => (
            <option key={destination} value={destination}>
              {destination}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-32" controlId="departurePlace">
        <Form.Label>Departure Place</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter departure place"
          value={departurePlace}
          onChange={handleDeparturePlaceChange}
          className="custom-input"
        />
      </Form.Group>

      <Form.Group className="mb-32" controlId="tripDate">
        <Form.Label>Trip Date</Form.Label>
        <Form.Control
          type="date"
          placeholder="Select trip date"
          value={tripDate}
          onChange={handleTripDateChange}
          className="custom-input"
        />
      </Form.Group>

      <Form.Group className="mb-32" controlId="returnDate">
        <Form.Label>Return Date</Form.Label>
        <Form.Control
          type="date"
          placeholder="Select return date"
          value={returnDate}
          onChange={handleReturnDateChange}
          className="custom-input"
        />
      </Form.Group>

      <Form.Group className="mb-32" controlId="passengerCount">
        <Form.Label className="passenger-label">Passengers</Form.Label>
        <div className="input-container">
          <Form.Control
            type="number"
            min="1"
            value={passengerCount}
            readOnly
            className="custom-input passenger-count"
          />
          <Button
            variant="outline-primary"
            size="sm"
            onClick={handlePassengerDecrement}
            className="minus-button"
          >
            -
          </Button>
          <Button
            variant="outline-primary"
            size="sm"
            onClick={handlePassengerIncrement}
            className="plus-button"
          >
            +
          </Button>
        </div>
      </Form.Group>
      <Link to="/PageNotFound">
        <Button className="bookflight" variant="primary" type="submit">
          Book Flight
        </Button>
      </Link>
    </Form>
  );
}

export default BookingForm;
