import React from "react";
import "./POTD.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import galaxypic from './images/galaxy-pic.svg';

const POTD = () => {
  return (
    <div className="POTD-container">
      <div className="POTD-title">Picture Of The Day</div>
      <div className="POTD-wrapper">
        <img src={galaxypic} alt="" className="galaxy-pic" />
        <div className="POTD-text-wrapper">
          <div className="Date-title">Choose The Date</div>
          <div className="date-input">
            <Form.Group className="mb-3" controlId="Date">
              <Form.Control
                type="date"
                placeholder="Select Your Date"
                className="custom-input"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </div>
          <div className="pic-description">
            Lorem ipsum dolor sit amet, consectetur adipisc Lorem ipsum dolor
            sit amet, consectetur adipiscLorem ipsum dolor sit amet, consectetur
            adipiscLorem ipsum dolor sit amet, consectetur adipisc Lorem ipsum
            dolor sit amet, consectetur adipisc Lorem ipsum dolor sit amet,
            consectetur Lorem ipsum dolor sit amet, consectetur adipisc Lorem
            ipsum dolor sit amet, consectetur adipiscLorem ipsum dolor sit amet,
            consectetur adipiscLorem ipsum dolor sit amet, consectetur adipisc
            Lorem ipsum dolor sit amet, consectetur adipisc Lorem ipsum dolor
            sit amet, consectetur dolor sit amet, consectetur adipiscLorem ipsum dolor sit amet,
            consectetur adipiscLorem ipsum dolor sit amet, consectetur adipisc
            Lorem ipsum dolor sit amet, consectetur adipisc Lorem ipsum dolor
            sit amet, consectetur
          </div>
        </div>
      </div>
    </div>
  );
};

export default POTD;
