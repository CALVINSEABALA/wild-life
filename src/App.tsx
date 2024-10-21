import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/HomePage';
import { useState } from 'react';
import animalDataContext from './Utilities/context';

function App() {
  const [animalData, setAnimalData] = useState(undefined);
  const [animalName, setAnimalName] = useState('');
  const [isLoading, setIsLoading] = useState(true)
  const [active,setActive] = useState(false)

  return (
    <animalDataContext.Provider value={{ animalData, setAnimalData, animalName, setAnimalName,isLoading , setIsLoading, active, setActive }}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </animalDataContext.Provider>
  );
}

export default App;
