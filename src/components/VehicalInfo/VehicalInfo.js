import React from 'react';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Vehicalinfo.css'


const VehicalInfo = (props) => {
   
    const {id,picture,From,vehicalType} = props.data;
   
    return (
        <div className='col-md-3'>
           <div className='d-flex  align-items-center flex-column resDiv' style={{height:'350px', weight: '500px', backgroundColor:'yellow', borderRadius:'10px' , boxShadow:'5px 19px 98px -53px rgba(0,0,0,0.69)'}}>
               <div>
                   <img src={picture} className='imgResponsive' alt={vehicalType}/>
               </div>
          <div style={{marginTop:'10%'}}>
          
  
      <Button
              as={Link}
              to={`/Vehical/${id}`}
              style={{ borderRadius: "5",backgroundColor:'red',border:'0px', borderRadius:'10px', padding:'5px 15px' }}
              
            >
                
              {vehicalType}
            </Button>
          </div>
           </div>
        </div>
    );
};

export default VehicalInfo;