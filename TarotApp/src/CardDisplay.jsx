import {useState} from 'react';
import cardData from './App.jsx';

function CardDisplay({cardData}) {
    const [isReversed, setIsReversed] = useState({});//wanting to show the cards reversed
    console.log("Received cardData",cardData);//making sure im accesing the array of data from the api
    return (
        <div>
        <h2>{cardData.name}</h2>
        <p>{cardData.meaning_up}</p>
        <p>{cardData.meaning_rev}</p>
        <button onClick={() => setIsReversed(!isReversed)}>
            {isReversed ? 'Reversed' : 'Upright'}
        </button>
        </div>
    );
    }

export default CardDisplay;