import { useState } from 'react';

function CardDisplay({ cardData }) {
  const [isReversed, setIsReversed] = useState(false); // Track if the card is reversed or not
  const [isFlipped, setIsFlipped] = useState(false); // Track if the card is flipped

  const handleCardClick = () => {
    setIsFlipped(!isFlipped); // Toggle the card flip on click
  };

  const imagePath = isFlipped
    ? `/tarot-images/${cardData.card.replace(/\s+of\s+/g, "Of").replace(/\s+/g, '')}.jpg` // Show the card image when flipped
    : "/tarot-images/CardBacks.jpg"; // Show the back of the card when not flipped

  return (
    <div className="card" onClick={handleCardClick}>
    <h2 className="card-title">{isFlipped ? cardData.card : "Click to reveal your fate"}</h2>
    <img className="card-image" src={imagePath} alt={cardData.card} />
    {isFlipped && (
      <>
        <p className="card-meaning"><strong>Meaning:</strong> {cardData.meaning}</p>
        <p className="card-prediction"><strong>Prediction:</strong> {cardData.prediction}</p>
      </>
    )}
  </div>
  
  );
}

export default CardDisplay;
