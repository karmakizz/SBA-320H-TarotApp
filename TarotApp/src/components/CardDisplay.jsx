import { useState } from 'react'; // Importing useState for local component state

function CardDisplay({ cardData }) {
  const [showDetails, setShowDetails] = useState(false); // Local state to toggle visibility of the card details

  const handleCardClick = () => {
    setShowDetails(prev => !prev); // Toggle the visibility of card details on click
  };

  // Determine which image to show based on whether the card is flipped or not
  const imagePath = showDetails
    ? `tarot-images/${cardData.card.replace(/\s+of\s+/g, "Of").replace(/\s+/g, '')}.jpg`
    : "tarot-images/CardBacks.jpg";

  return (
    <div className="tarot-card" onClick={handleCardClick}> {/* OnClick will trigger the card's flip */}
      <h2 className="tarot-card-title">
        {/* Display card name or a prompt to click to reveal details */}
        {showDetails ? cardData.card : ""}
      </h2>
      <img className="card-image" src={imagePath} alt={cardData.card} />
      {showDetails && (  // Only show details if the card is flipped
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
