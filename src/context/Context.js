import { createContext, useState } from "react";

const RatingContext = createContext({});

export function RatingContextProvider({ children }) {
    const [rating, setRating] = useState(0);

    return (
        <RatingContext.Provider value={{ rating, setRating }}>
            {children}
        </RatingContext.Provider>
    );
}

export default RatingContext;
