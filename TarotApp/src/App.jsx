import { useState, useEffect } from 'react';
import './App.css';
import TarotDeck from './components/TarotDeck';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [tarotData, setTarotData] = useState([]); // Tarot cards data
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const apiKey = import.meta.env.VITE_TAROT_API_KEY; // API key
    const url = 'https://tarot-cards1.p.rapidapi.com/tarot/?amount=3'; // API URL
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': 'tarot-cards1.p.rapidapi.com'
      }
    };

    const fetchTarotCards = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setTarotData(result);
      } catch (error) {
        console.error("Error fetching tarot cards:", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTarotCards();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading tarot cards!</div>;

  return (
    <div className="bg-dark text-light min-vh-100 d-flex flex-column align-items-center">
      <h1 className="display-4 text-center mystic-heading">What is Your Fate?</h1>
      <TarotDeck tarotData={tarotData} />
    </div>
  );
}

export default App;
