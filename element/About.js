import HeroSection from '../component/HeroSection'
import { useProductContext } from '../Context/ContextProduct'

const About = () => {
  const {myName} =  useProductContext();
  const data = {
    name : "Zaidi Ecommerce Website",
  }
  return ( <>
     {myName}
   <HeroSection myData={data}/></>
    // <div>About
    //     <h1> 786110</h1>
    // </div>
  )
}

export default About