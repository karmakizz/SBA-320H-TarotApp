import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tarotData, setTarotData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const apiKey = import.meta.env.VITE_TAROT_API_KEY; // Correct way in Vite

    const url = 'https://tarot-cards1.p.rapidapi.com/tarot/?minor=2&major=2';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': apiKey, // Uses hidden key
        'x-rapidapi-host': 'tarot-cards1.p.rapidapi.com'
      }
    };

    async function fetchTarotCards() {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result); // Got the data! 🎉
        setTarotData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTarotCards();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {tarotData && (
        <div>
          {/* Display tarot data here */}
          <pre>{JSON.stringify(tarotData, null, 2)}</pre> {/* pre tag to display JSON data */}
        </div>
      )}
    </>
  );
}

export default App;
