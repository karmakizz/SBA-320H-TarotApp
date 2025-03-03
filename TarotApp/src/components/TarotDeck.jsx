import CardDisplay from './CardDisplay'; // Card display component

function TarotDeck({ tarotData }) {
  return (
    <div className="tarot-container">
      {tarotData.map((card, index) => (
        <CardDisplay key={index} cardData={card} />
      ))}
    </div>
  );
}

export default TarotDeck;

//This component can receive the tarotData from App.jsx as a prop.It will then map over the data and render a CardDisplay for each tarot card.