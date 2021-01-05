import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = { isSearchOpen: false };

const defaultStore = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        ...state,
        isSearchOpen: !state.isSearchOpen,
      };
    default:
      return state;
  }
};

export const store = createStore(defaultStore, composeWithDevTools());
