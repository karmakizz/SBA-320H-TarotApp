import { useState, useEffect } from 'react';
import './App.css';
import TarotDeck from './components/TarotDeck'; // Importing TarotDeck component to display tarot cards
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS for styling
import { CardProvider } from './contexts/CardContext'; // Importing CardProvider from CardContext to provide context for card details visibility

function App() {
  // State to hold the tarot data fetched from the API
  const [tarotData, setTarotData] = useState([]);
  
  // State to track the loading status of the tarot data
  const [isLoading, setIsLoading] = useState(true);
  
  // State to track any error that occurs during the API fetch
  const [error, setError] = useState(null);

  useEffect(() => {
    // Using the API key stored in environment variables
    const apiKey = import.meta.env.VITE_TAROT_API_KEY; 
    // Defining the API URL to fetch tarot card data
    const url = 'https://tarot-cards1.p.rapidapi.com/tarot/?amount=3';
    
    // Setting up the request options with headers containing the API key
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': 'tarot-cards1.p.rapidapi.com'
      }
    };

    // Fetching the tarot cards data
    const fetchTarotCards = async () => {
      try {
        // Sending the API request
        const response = await fetch(url, options);
        // Parsing the response as JSON
        const result = await response.json();
        // Storing the tarot data into the state
        setTarotData(result);
      } catch (error) {
        // Handling any errors that occur during the fetch process
        console.error("Error fetching tarot cards:", error);
        setError(error); // Updating the error state if an error occurs
      } finally {
        // Updating the loading state to false after the fetch process is complete
        setIsLoading(false);
      }
    };

    // Calling the fetch function to get tarot cards data
    fetchTarotCards();
  }, []); // Empty dependency array means the fetch runs once when the component mounts
console.log(tarotData);
  // If the data is still loading, display a loading message
  if (isLoading) return <div>Loading...</div>;

  // If an error occurred during the fetch, display an error message
  if (error) return <div>Error loading tarot cards!</div>;

  return (
    <div className="bg-dark text-light min-vh-100 d-flex flex-column align-items-center">
      {/* Header displaying the title of the tarot reading */}
      <h1 className="display-4 text-center mystic-heading">What is Your Fate?</h1>
      
      {/* Using CardProvider to wrap the TarotDeck and share the card context with it */}
      <CardProvider>
        {/* Passing the fetched tarot data as a prop to TarotDeck component */}
        <TarotDeck tarotData={tarotData} />
      </CardProvider>
    </div>
  );
}

export default App;
