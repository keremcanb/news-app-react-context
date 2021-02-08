import { useContext, useReducer, createContext } from 'react';
import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from '../types';
import reducer from '../reducers/sidebar';

const SidebarContext = createContext();

const initialState = {
  sidebar: false
};

export const UtilsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: OPEN_SIDEBAR });
  };

  const closeSidebar = () => {
    dispatch({ type: CLOSE_SIDEBAR });
  };

  return <SidebarContext.Provider value={{ ...state, openSidebar, closeSidebar }}>{children}</SidebarContext.Provider>;
};

export const useSidebarContext = () => useContext(SidebarContext);
