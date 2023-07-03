import React from 'react';
import BookingForm from './BookingForm';
import TripDestinations from './TripDestinations';
import "./Destinations.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Destinations = () => {
    return ( 
        <div className="content-destinations">
         <div className="page-header">Book You Trip Today</div>
           <BookingForm />
           <TripDestinations />
        </div>
     );
}
 
export default Destinations;