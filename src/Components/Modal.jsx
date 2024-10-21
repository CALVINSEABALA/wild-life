import { useContext, useState } from "react";
import { fetchData } from "../Utilities/services";
import animalDataContext from "../Utilities/context";



export  const Modal = () => {
  
  
  const {setAnimalData} = useContext(animalDataContext);
  const [animalName, setAnimalName] = useState('')

    const setData = async()=>{
      
        let animalData = await fetchData(animalName);
 
        setAnimalName(animalName)
        setAnimalData(animalData)
    }


    return(
      <div className="mt-36 bg-white w-[40%] h-[50%] justify-center align-middle items-center  rounded-2xl opacity-[0.90] border-b-4  shadow-glass">
      <div className="m-5 p-5 justify-items-center  items-center text-center">
      <p className="text-center font-semibold font-mono">Please enter the animal species</p>
      <input className="text-center mt-5 items-center justify-items-center rounded-xl  border-2 border-blue-400 " placeholder="E.g Lion" value={animalName} onChange={(e)=>setAnimalName(e.target.value)}/>
      
      </div>
      <div className="m-5 p-5 justify-items-center  items-center text-center">
      <button className="bg-blue-400 w-20 align-middle justify-center text-center rounded-xl  border-2 border-blue-400 " onClick={setData}>Search</button>
      </div>
    
    

      </div>
    )
};