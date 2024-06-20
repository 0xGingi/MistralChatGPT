import { defaultAPIEndpoint, codestralAPIEndpoint } from '@constants/auth';
import { StoreSlice } from './store';

export interface AuthSlice {
  apiKey?: string;
  codestralApiKey?: string;
  apiEndpoint: string;
  firstVisit: boolean;
  setApiKey: (apiKey: string) => void;
  setCodestralApiKey: (apiKey: string) => void;
  setApiEndpoint: (apiEndpoint: string) => void;
  setFirstVisit: (firstVisit: boolean) => void;
}

export const createAuthSlice: StoreSlice<AuthSlice> = (set, get) => ({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY || undefined,
  codestralApiKey: localStorage.getItem('codestralApiKey') || undefined,
  apiEndpoint: defaultAPIEndpoint,
  firstVisit: true,
  setApiKey: (apiKey: string) => {
    set((prev: AuthSlice) => ({
      ...prev,
      apiKey: apiKey,
    }));
    localStorage.setItem('apiKey', apiKey); // Save to local storage
  },
  setCodestralApiKey: (apiKey: string) => {
    set((prev: AuthSlice) => ({
      ...prev,
      codestralApiKey: apiKey,
    }));
    localStorage.setItem('codestralApiKey', apiKey); // Save to local storage
  },
  setApiEndpoint: (apiEndpoint: string) => {
    set((prev: AuthSlice) => ({
      ...prev,
      apiEndpoint: apiEndpoint,
    }));
  },
  setFirstVisit: (firstVisit: boolean) => {
    set((prev: AuthSlice) => ({
      ...prev,
      firstVisit: firstVisit,
    }));
  },
});