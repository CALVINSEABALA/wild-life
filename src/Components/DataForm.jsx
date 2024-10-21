import  { useContext } from 'react';
import animalDataContext from '../Utilities/context';
import { saveFavorite } from '../Utilities/services';

const DataForm = ({ row }) => {
    const {  setActive } = useContext(animalDataContext);
    const back =() =>{
        setActive(false)
    }
    const save=() =>{
        saveFavorite(row.characteristics)
    }
    return (
        <div className="mt-36 bg-white w-[40%] h-auto justify-center items-center rounded-2xl opacity-[0.90] border-b-4 shadow-glass">
            <div className="m-5 p-5 text-center">
                <p className="text-xl font-semibold font-mono">{row.common_name} Data</p>
                
                {Object.entries(row.characteristics).map(([key, value]) => (
                    <div key={key} className="m-5 flex justify-between">
                        <p className="font-semibold">{key}:</p>
                        <p>{value}</p>
                    </div>
                ))}
            </div>

            <div className='flex justify-center mb-5'>
                <div className="m-2">
                    <button className="bg-blue-400 w-20 rounded-xl border-2 border-blue-400"  onClick={save}>Save</button>
                </div>
                <div className="m-2">
                    <button className="bg-red-400 w-20 rounded-xl border-2 border-red-400" onClick={back}>Back</button>
                </div>
            </div>
        </div>
    );
};

export default DataForm;
