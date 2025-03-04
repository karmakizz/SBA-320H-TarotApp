import { createContext, useState, useContext } from "react";

// Create a Context to hold the card visibility state
const CardContext = createContext();

// Provider component that will wrap around the app to provide context
export const CardProvider = ({ children }) => {
  const [showDetails, setShowDetails] = useState(false); // Managing the visibility state

  return (
    <CardContext.Provider value={{ showDetails, setShowDetails }}>
      {children}
    </CardContext.Provider>
  );
};

// Custom hook to use the context
export const useCardContext = () => {
  return useContext(CardContext);
};

export default CardContext;
// In this code snippet, we created a CardContext to hold the visibility state of the tarot card details. We then created a CardProvider component to wrap around the app and provide the context. Finally, we created a custom hook useCardContext to access the context in any component. This context will be used to manage the visibility state of the tarot card details in the CardDisplay component.