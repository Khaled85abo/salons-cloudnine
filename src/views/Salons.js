import React, {  useState} from 'react'

import data from '../data/salonsDataBase.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faSort } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { faStar} from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'




const Salons = () => {

  
  
    //assigning json file array to a variable 
    const salons = data;

    // creating varibales that refers to the lowest and heighst price
    const [lowest , setLowest] = useState(200);
    const [highest, setHeighst] = useState(1500);

    // creating a true, false variable to toggle the price input field appearance 
    const [showinput, setShowinput] = useState(false);

  
  

  // setting the lowest price variable to the value written in  the input field directly
  const changeLowestPrice = e => {
    setLowest(e.target.value);
  }


   // setting the heighst price variable to the value written in  the input field directly. However, in order to avoid a 
   // 0 value submittd when the user delete the number in input field, the value cann't be submitted if it's less than 320 which 
   //equals the lowest price in our json file, otherwise the value will be set to the highest price, which is what our user probably
   //want when deleting the value from the heighst price input. 
  const changeHeighstPrice = e => {
      if (e.target.value < 320){
          setHeighst(1500)
      } else {
        setHeighst(e.target.value);

      }
  }


  // toggle function to switch between true and false of the "showInput" variable that toggle the appearance and disappearance of  input fields
  const showSearch = () =>  {
    if(showinput){
      setShowinput(false)
    } else {
      setShowinput(true)
    }
   }
    
    return (
      <div className="mobile-view-div">
        <div className="second-layer-div">
          <div className="all-salons-div">
          
              <div className="upper-div">
              <FontAwesomeIcon icon={faChevronLeft} />
              <span>11år</span>
              <FontAwesomeIcon icon={faSort} />

              </div >
      
              <div className="price-dev">    

                <div className="price-text" onClick={showSearch}>          
                  <span>Pris {lowest} - {highest} kr</span>

                  {/* switching between an up and down arrow according to input appearance */}
                  <div >
                  {showinput == true ? <FontAwesomeIcon className="lightgreen" icon={faChevronUp} /> : <FontAwesomeIcon className="lightgreen" icon={faChevronDown} />}
                  </div>

                  
                </div>
                {/* assigning a differend classes according to the status of the "showInput" variable */}
                <div className={showinput == true ? "price-input-div-show price-input-div" : "price-input-div-hide price-input-div"}>
                  <input type='number' onChange={changeLowestPrice} placeholder='enter the lowest price'></input>
                  <input type='number' onChange={changeHeighstPrice} placeholder='enter the heighst price'></input>
                </div>
              </div>

      
                
              

            {/* maping throught the json array to get the matching objects according to the lowest and highest price inputs,
            if there is no input from the user the map will use the default values that equal the lowest and the highest prices 
            in json file, showing all the objects */}
            
              {salons.filter(salons => salons.price > lowest && salons.price < highest).map(filteredSalons =>(
                <div className="salons-div" key= {filteredSalons.id}>

                  <div className="time bold">
                    <span>12:00</span>
                  </div>
                  
                  <div className="salon-info">
                    <span className="bold">{filteredSalons.name}</span>
                    <div className='star'>
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={farStar} />
                      </div>
                    <span>{filteredSalons.street}</span>
                  </div>
                    <Link className='text-link link-section' to={`/salon/${filteredSalons.id}`}>
                      <div className="price-time">
                        <span className="bold">{filteredSalons.price} kr</span>
                        <span>30 mn</span>
                      </div>
                    </Link>
                    <p className="arrow-to-page">
                      <FontAwesomeIcon icon={faChevronRight} />
                    </p>
                </div>

              ))}
        
          </div>
        </div>
      </div>
    )
  }
   
  





export default Salons



