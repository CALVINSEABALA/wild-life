import Lottie from 'lottie-react';
import  { useContext } from 'react'
import logo from '../Assets/lotties/logo.json';
import animalDataContext from '../Utilities/context';



const logoStyle = {
    height: 100,
    width: 100,
    marginTop: 1,
    paddingTop: 1,
  };
 

const Header = () => {
    const {setAnimalData} = useContext(animalDataContext);
    const setData = async()=>{
      
  
        setAnimalData(undefined)
    }
  return (
    <div className='fixed z-50 w-screen  p-3 px-4 md:p-6 md:px-16 flex justify-between'>
             <div className='w-auto'>
             <Lottie loop={true} animationData={logo} style={logoStyle} />
            </div>
            <div className='w-auto'>
            <button className="bg-deepBlue  w-20   rounded-xl  border-2 border-blue-200 text-[#fff] " onClick={setData}>Search</button>
            </div>
    </div>
  )
}

export default Header