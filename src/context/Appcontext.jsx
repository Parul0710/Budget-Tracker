import { createContext, useReducer } from "react";
import { v4 as uuidv4} from 'uuid';
const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
      case 'SET_BUDGET':
        return {
            ...state,
            budget: action.payload,
        };
    default:
      return state;
  }
};
const initialState = {
  budget: 5000,
  expenses: [
    { id: uuidv4(), name: "Shopping", cost: 1000 },
    { id: uuidv4(), name: "Grocery", cost: 2000 },
    { id: uuidv4(), name: "Vacations", cost: 1500 },
  ],
};

export const Appcontext = createContext();
export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <Appcontext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </Appcontext.Provider>
  );
};
