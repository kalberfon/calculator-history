
const ACTION_TYPES = {
    ADD: "ADD_NEW_HISTORY",
    LIST: "LIST_HISTORY",
    INPUT_DIGIT: "INPUT_DIGIT",
}
const reducers = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD: {
            return {
                ...state, 
                histories: [state.histories, ...action.data]
            }
        }
        case ACTION_TYPES.LIST: {
            return { 
              ...state, 
              history: action.data 
            }
          }
          case ACTION_TYPES.INPUT_DIGIT: {
              return {
                  ...state,
                  input: state.input + action.data
              }
          }
        default: {
            return state;
        }
    }
}



export {
    reducers,
    ACTION_TYPES
}