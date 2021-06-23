import React from 'react';
import vehicalData from '../Vehical Data/vehicalData.json'
import { useEffect, useState } from 'react';
import VehicalInfo from '../VehicalInfo/VehicalInfo';

const Home = () => {
    const [vehicals, setVehicals] = useState([]);
    const [purchasedPlayer, setPurchasedPlayer] = useState([]);
  
    useEffect(() => {
      setVehicals(vehicalData);
    }, []);
    return (
        <div className='container'>
            <section className='row' style={{marginTop:'15%'}}>
{vehicals.map(vehical=> <VehicalInfo 
 key={vehical.id}
 data={vehical}
></VehicalInfo>)}
</section>
        </div>
    );
};

export default Home;