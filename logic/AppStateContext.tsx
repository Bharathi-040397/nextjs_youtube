"use client"

import { createContext, useReducer, useContext } from 'react';
import { videos } from '@/utils/VideosData';

interface AppState {
  videos: Video[];
  selectedVideo: Video | null;
  modalOpen: boolean;
}

type Action =
  | { type: 'SELECT_VIDEO'; payload: Video | null }
  | { type: 'SET_MODAL_STATUS'; payload: boolean };

export interface Video{
  id: number,
  title: string,
  description: string,
  url: string,
  thumbnail: string
 }

interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}

const initialState: AppState = {
  videos,
  selectedVideo: null,
  modalOpen: false,
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'SELECT_VIDEO':
      return {
        ...state,
        selectedVideo: action.payload,
      };
    case 'SET_MODAL_STATUS':
      return {
        ...state,
        modalOpen: action.payload,
      };
    default:
      return state;
  }
};

export const AppProvider = ({ children }: {children: React.ReactNode}) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to access the app context
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
