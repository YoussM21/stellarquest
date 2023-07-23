import React from 'react';
import FaqAccordion from './FaqAccordion';
import "./Help.css"

const Help = () => {
    return ( 
        <div className="help-container">
            <div className="help-title">Help Support</div>
            <div className="faq-section">
                <div className="faq-title">Frequently Asked Questions</div>
                    <FaqAccordion className="accordion2"></FaqAccordion>
            </div>
        </div>
     );
}
 
export default Help;