import React from 'react'
import { Link, useParams } from "react-router-dom";

import data from '../data/salonsDataBase.json'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import { faClock as farClock } from '@fortawesome/free-regular-svg-icons'


 const Salon = ({}) => {

    //assigning json file array to a variable 
   const salons = data;
    // assigning url params object to a variable
    const salonId = useParams()

 



    return (
      <div className="mobile-view-div">
        <div className="second-layer-div">



            {/* Looping throught the json file array. choosing only the object with the equal id number*/}
              {salons.filter(salons => salons.id == salonId.id).map(filteredSalons =>(

          <div >

            <div className="img-section">
              <Link className='text-link back-arrow' to={`/`}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </Link>
              <div  className='star'>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={farStar} />
              </div>
              <img src={filteredSalons.img} alt={filteredSalons.name}/>
              <h2>{filteredSalons.name}</h2>
              <FontAwesomeIcon className="heart" icon={farHeart} />


            </div>

            <div className="info-schema">
                  <h4 className="info">Info</h4>
                  <h4 className="Schema">Schema</h4>
            </div>

            <div className="info-section">

              <div>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>{filteredSalons.street}, {filteredSalons.city_address}</span>
              </div>
              <div>
                <FontAwesomeIcon icon={farClock} />
                <span>Öppet till {filteredSalons.oppenuntil} idag</span>
                <FontAwesomeIcon className="open-hours-arrow" icon={faChevronDown} />

              </div>
              <div>
                <FontAwesomeIcon icon={faPhoneAlt} />
                <span>{filteredSalons.telephon}</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faGlobe} />
                <span>{filteredSalons.website}</span>
                </div>

                <p>{filteredSalons.description}</p>


              </div>

             </div>

          ))
  
          }

          </div>
      </div>
    )
}

export default Salon