/* Firestoreのgift_listコレクションへレコードを登録する */
import { useContext } from 'react';
import { FirebaseContext, GiftListContext } from 'contexts';
import randomString from 'util/randomString';
import { Gift, GiftList } from 'models/gift-list';
import { collectionName } from '../constants';

const useResisterGiftList = () => {
  const { giftList, setGiftList } = useContext(GiftListContext);
  if (!setGiftList) throw new Error('setGiftList is null');
  const { db } = useContext(FirebaseContext);
  if (!db) throw new Error('Firestore is not initialized');

  const registerGift = async (name: string, points: number, dlUrl: string) => {
    const registerDoc = `shota-${randomString}`;

    await db.collection(collectionName.giftList).doc(registerDoc).set({
      name,
      exchange_point: points,
      pic: dlUrl,
      status: false,
    });
    await db
      .collection(collectionName.giftList)
      .doc(registerDoc)
      .get()
      .then((doc) => {
        const data = doc.data();
        const gift: Gift[] = [
          {
            id: doc.id,
            exchangePoint: data?.exchange_point,
            pic: data?.pic,
            status: data?.status,
          },
        ];
        const addGift: GiftList = [...giftList, ...gift];
        setGiftList(addGift);
      });
  };

  return registerGift;
};

export default useResisterGiftList;
