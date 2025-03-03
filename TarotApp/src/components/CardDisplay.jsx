import { useState } from 'react';

function CardDisplay({ cardData }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped((prev) => !prev); // Toggle card flip
  };

  const imagePath = isFlipped
    ? `/tarot-images/${cardData.card.replace(/\s+of\s+/g, "Of").replace(/\s+/g, '')}.jpg`
    : "/tarot-images/CardBacks.jpg";

  return (
    <div className="tarot-card" onClick={handleCardClick}>
      <h2 className="tarot-card-title">
        {isFlipped ? cardData.card : "Click to reveal your fate"}
      </h2>
      <img className="card-image" src={imagePath} alt={cardData.card} />
      {isFlipped && (
        <>
          <p className="card-meaning">
            <strong>Meaning:</strong> {cardData.meaning}
          </p>
          <p className="card-prediction">
            <strong>Prediction:</strong> {cardData.prediction}
          </p>
        </>
      )}
    </div>
  );
}

export default CardDisplay;

//This is the component that displays each individual tarot card. It will receive a single card's data as props and handle the card flip logic.