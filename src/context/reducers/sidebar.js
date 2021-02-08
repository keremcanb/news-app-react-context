import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from '../types';

const SidebarReducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case OPEN_SIDEBAR:
      return { ...state, sidebar: true };
    case CLOSE_SIDEBAR:
      return { ...state, sidebar: false };
    default:
      throw new Error(`no mathching "${type}" action type`);
  }
};

export default SidebarReducer;
