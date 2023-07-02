import React from 'react';
import './ImagesGroup.css'
import deathstar from './images/deathstar.svg'
import interior1 from './images/interior1.svg'
import interior2 from './images/interior2.svg'

const ImagesGroup = () => {
    return ( 
        <div className="image-container">
        <div className="interiors">
          <img src={interior1} alt="interior1" className="interior1" />
          <img src={interior2} alt="interior2" className="interior2" />
        </div>
        <div className="deathstar">
          <img src={deathstar} alt="DeathStar" className="deathstare1" />
        </div>
      </div>
     );
}
 
export default ImagesGroup;