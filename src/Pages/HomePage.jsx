import  {useContext, useEffect } from 'react';

import Lottie from 'lottie-react';
import loader from '../Assets/lotties/loader.json';

import Table from '../Components/Table';
import background from '../Assets/elephants.jpg';

import Header from '../Components/Header';
import animalDataContext from '../Utilities/context';
import { Modal } from '../Components/Modal';


const HomePage = () => {



  const {isLoading, setIsLoading, animalData} = useContext(animalDataContext);

 







  
useEffect(() => {
 
  const timer = setTimeout(() => {
      setIsLoading(false); 
  }, 5000);

  return () => clearTimeout(timer); 
}, [setIsLoading, animalData]);
 
 
  
  const style = {
    height: 300,
    width: 300,
    marginTop: 10,
    paddingTop: 10,
  };


  return (
    
    <div className="h-screen w-screen  flex items-center justify-center" style={{ background: '#edf2f7' }}>
 
      {isLoading? (
     
        <div className='w-full h-[100vh] mt-32  md:mt-10   p-5 flex flex-col items-center '>
        <Lottie loop={true} animationData={loader} style={style} />
        <p className='text-lg font-bold -mt-20 font-[poppins] text-gray-700'>Please Wait...</p>
      </div>

      ) : (
        <div
        className="contenair bg-cover min-h-screen w-full flex justify-center"
        style={{
                backgroundImage: `url(${background})`,
                opacity: 0.9,
                

                
        }}
      >
            
      <Header/>
          <div className='w-screen relative m-2 p-2 flex flex-col items-center'>
          
         
        
         {
          animalData === undefined? (
            <Modal/>
          ):(<Table/>)
         }
       
        </div>
          </div>
      )}
    </div>
  );
};

export default HomePage;
