

 export  const fetchData = async(animalName) => {
    try {
        const cacheItems = localStorage.getItem(animalName);
        if (cacheItems) {
           
            return cacheItems; 
        }

        const response = await fetch(`https://api.api-ninjas.com/v1/animals?name=${animalName}`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'X-Api-Key':'uMnr7cntwdm/IPrNGLB4DA==pLl14fVS5CLBexyn',
          },
      });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json(); 
       
        localStorage.setItem(animalName, JSON.stringify(data));
    
        
        return JSON.stringify(data);
    } catch (error) {
        console.error(error);
    }
}

export const saveFavorite = (animalData) => {

    localStorage.setItem('Favourite', JSON.stringify(animalData));
    alert('Favourite Saved')
}
