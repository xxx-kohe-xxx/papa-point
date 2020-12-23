import { createContext } from 'react';

type FirebaseContextValue = {
  db: firebase.firestore.Firestore | null;
};

export const FirebaseContext = createContext<FirebaseContextValue>({
  db: null,
});

type TotalPointContextValue = {
  totalPoint: number;
  setTotalPoint: React.Dispatch<React.SetStateAction<number>> | null;
};

export const TotalPointContext = createContext<TotalPointContextValue>({
  totalPoint: 0,
  setTotalPoint: null,
});
