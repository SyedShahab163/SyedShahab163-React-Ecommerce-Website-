import React from 'react';
import FeatureProduct from '../component/Feature';
import HeroSection from '../component/HeroSection';
import Services from "../component/Services"
import Truested from '../component/Truested';
const Home = () => {
  const data = {
    name : "Zaidi Store"
  }
  return (<> <HeroSection myData={data}/>
       <FeatureProduct/>
        <Services/> 
     <Truested/> 
     
    </>
  )
}


export default Home