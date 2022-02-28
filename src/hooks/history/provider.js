import { createContext, useReducer } from "react";
import { reducers } from "./reducers";


const HistoryStateContext = createContext();
const HistoryDispatchContext = createContext();


const HistoryProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducers, {histories: [], input: ""})

    return (
        <HistoryStateContext.Provider value={state}>
            <HistoryDispatchContext.Provider value={dispatch}>
                {children}
            </HistoryDispatchContext.Provider>
        </HistoryStateContext.Provider>
    )
}

export {
    HistoryProvider,
    HistoryStateContext,
    HistoryDispatchContext
}