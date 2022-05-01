import { createContext, useState, useMemo, useReducer } from "react";

export const Context = createContext();

// Context.Provider
// Context.Consumer

const initialState = {
    items: [],
    editing: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setEditing":
      return {
        ...state,
        editing: false,
      };
    case "add":
      return {
        ...state,
        items: [
          ...state.items,
          { id: new Date().getTime(), text: action.payload.value },
        ],
      };
    case "remove":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState(null);
  const handleOnChange = (value) => setInputValue(value);
  const value = useMemo(() => {
      return {
          state,
          inputValue,
          dispatch,
          onChange: handleOnChange,
      };
  }, [state, inputValue]);

  return (
    <Context.Provider value={value}>{children}</Context.Provider>
  );
};

export default Provider;
