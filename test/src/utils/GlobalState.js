import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_POLL,
  REMOVE_POLL,
  UPDATE_POLLS,
  ADD_POLL,
  ADD_FAVORITE,
  UPDATE_FAVORITES,
  REMOVE_FAVORITE,
  LOADING
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENT_POLL:
      return {
        ...state,
        currentPoll: action.poll,
        loading: false
      };

    case UPDATE_POLLS:
      return {
        ...state,
        polls: [...action.polls],
        loading: false
      };

    case ADD_POLL:
      return {
        ...state,
        polls: [action.poll, ...state.poll],
        loading: false
      };

    case REMOVE_POLL:
      return {
        ...state,
        polls: state.polls.filter((poll) => {
          return poll._id !== action._id;
        })
      };

    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [action.poll, ...state.favorites],
        loading: false
      };

    case UPDATE_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites],
        loading: false
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((poll) => {
          return poll._id !== action._id;
        })
      };

    case LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    polls: [],
    currentPoll: {
      _id: 0,
      title: "",
      body: "",
      author: ""
    },
    favorites: [],
    loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
