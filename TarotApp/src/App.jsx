import { useState, useEffect } from 'react';
import './App.css';
import CardDisplay from './CardDisplay';


function App() {
  const [tarotData, setTarotData] = useState([]); // Initialize with an empty array
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track errors

  useEffect(() => {
    const apiKey = import.meta.env.VITE_TAROT_API_KEY; // Correct way to access Vite environment variable

    const url = 'https://tarot-cards1.p.rapidapi.com/tarot/?amount=3'; // API URL
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': apiKey,//Uses hidden api key
        'x-rapidapi-host': 'tarot-cards1.p.rapidapi.com'
      }
    };

    // Function to fetch tarot cards data
    const fetchTarotCards = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log("API Response:", result); // Log the full response to check the structure
        setTarotData(result);
      } catch (error) {
        console.error("Error fetching tarot cards:", error);
      } finally {
        setIsLoading(false);
      }
    };
    

    fetchTarotCards(); // Call the function to fetch data
  }, []); // Empty dependency array means this effect runs only once when the component mounts
 
  return (
    <div className="tarot-container">
      {isLoading && <p className="loading-text">Loading...</p>}
      {error && <p className="error-text">Error: {error}</p>}
      {tarotData.length > 0 && (
       
       <>
         <h1 className="tarot-heading">What Is Your Fate?</h1>
          <div className="card-container">
            {tarotData.map((card, index) => (
              <CardDisplay key={index} cardData={card} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
