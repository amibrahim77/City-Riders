import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import Map from '../Map';


import vehicalData from '../Vehical Data/vehicalData.json'
import './RiderData.css'



const RiderData = () => {
    let { id } = useParams();
    
    let vehicalSingleData = vehicalData.filter(vehicalDetails=>vehicalDetails.id == id);
   const {picture,vehicalType,From,To} =vehicalSingleData[0];


  
    return (
        <div className='d-flex container mt-5'>
         
         <div style={{backgroundColor:'rgba(72, 52, 212,0.3)',height:'350px',width:'30%', borderRadius:'10px'}}>
         <code>Travling with </code>
         <img src={picture} width='25%' />
            <div>
                <h5 style={{marginTop:'25px'}}>Pick From</h5>
                <select id="vehicals">
                <option value={From[0]}>{From[0]}</option>
                <option value={From[1]}>{From[1]}</option>
                <option value={From[2]}>{From[2]}</option>
                <option value={From[3]}>{From[3]}</option>
                <option value={From[4]}>{From[4]}</option>             
                </select>
            </div>
            <div>
            <h5 style={{marginTop:'25px'}}>Pick To</h5>
            <select id="vehicals">
               
                <option value={To[1]}>{To[1]}</option>
                <option value={To[2]}>{To[2]}</option>
                <option value={To[3]}>{To[3]}</option>
                <option value={To[0]}>{To[0]}</option>
                <option value={To[4]}>{To[4]}</option>             
                </select>
            </div>
            <div style={{marginTop:'25px'}}>
                <Button>Search</Button>
            
            </div>

         </div>
         <div>
        
         <div id="map">
              <Map></Map>
         </div>
         </div>
        
        </div>
    );
};

export default RiderData;