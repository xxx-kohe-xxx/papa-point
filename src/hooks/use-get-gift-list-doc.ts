/* Firestoreのgift_listコレクションにアクセスしてDocumentを取得する */
import { FirebaseContext } from 'contexts';
import { useContext } from 'react';
import { collectionName } from '../constants';
import { Gift, GiftList } from '../models/gift-list';

const useGetGiftListDoc: () => Promise<GiftList> = () => {
  const { db } = useContext(FirebaseContext);
  if (!db) throw new Error('Firestore is not initialized');

  const giftList = db
    .collection(collectionName.giftList)
    .get()
    .then((querySnapshot) => {
      const response: GiftList = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const gift: Gift = {
          id: doc.id,
          exchangePoint: data.exchange_point,
          pic: data.pic,
          status: data.status,
        };
        response.push(gift);
      });

      return response;
    });

  return giftList;
};

export default useGetGiftListDoc;
