import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BookingForm from "./BookingForm";
import TripDestinations from "./TripDestinations";
import "./Destinations.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Destinations = () => {
  const location = useLocation();

  useEffect(() => {
    const section = new URLSearchParams(location.search).get("section");
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="content-destinations">
      <div className="page-header" id="bookingform">
        Book You Trip Today
      </div>
      <BookingForm />
      <div id="planetDestinations">
        <TripDestinations />
      </div>
    </div>
  );
};

export default Destinations;
