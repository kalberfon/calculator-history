import { useContext } from "react"
import { HistoryStateContext, HistoryDispatchContext, HistoryProvider } from "./provider"
import { ACTION_TYPES } from "./reducers"

const useHistory = () => {
    const context = useContext(HistoryStateContext)
    if (!context) {
        throw new Error("necessario o provider de history")
    }
    return context;
}
const useAddDigitOnInput = (digit) => {
    const dispatch  = useDispatch();

    return {
        onDispatch: (data) => dispatch({type: ACTION_TYPES.INPUT_DIGIT, data: digit})
    };
}

const useDispatch = () => {
    const dispatch = useContext(HistoryDispatchContext)
    if (!dispatch) {
        throw new Error("necessario o provider de history")
    }
    return dispatch
}

export {
    useHistory,
    useDispatch,
    useAddDigitOnInput,
    HistoryProvider
}