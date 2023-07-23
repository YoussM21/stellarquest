import React from 'react';
import { Link } from 'react-router-dom';


const PageNotFound = () => {
    return (  
        <div className="error-text-container">
            <h1>404 - Oops! Page Not Found</h1>
            <p>Unfortunalety the page you are looking for does not exist.</p>
            <Link to="/">Go back to the home page</Link>
        </div>
    );
}
 
export default PageNotFound;