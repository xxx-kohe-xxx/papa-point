import { GiftList } from 'models/gift-list';
import { createContext } from 'react';

// Firebase
type FirebaseContextValue = {
  db: firebase.firestore.Firestore | null;
  storage: firebase.storage.Storage | null;
};
export const FirebaseContext = createContext<FirebaseContextValue>({
  db: null,
  storage: null,
});

// TotalPoint
type TotalPointContextValue = {
  totalPoint: number;
  setTotalPoint: React.Dispatch<React.SetStateAction<number>> | null;
};
export const TotalPointContext = createContext<TotalPointContextValue>({
  totalPoint: 0,
  setTotalPoint: null,
});

// GiftList
type GiftListContextValue = {
  giftList: GiftList;
  setGiftList: React.Dispatch<React.SetStateAction<GiftList>> | null;
};
export const GiftListContext = createContext<GiftListContextValue>({
  giftList: [],
  setGiftList: null,
});
