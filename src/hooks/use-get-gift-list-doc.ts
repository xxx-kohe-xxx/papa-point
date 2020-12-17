/* Firestoreのgift_listコレクションにアクセスしてDocumentを取得する */
import { FirebaseContext } from 'contexts';
import { useContext, useState } from 'react';
import { collectionName } from '../constants';
import { Gift, GiftList } from '../models/gift-list';

const useGetGiftListDoc: GiftList = () => {
  const [giftList, setGiftList] = useState<GiftList>([]);
  const { db } = useContext(FirebaseContext);
  if (!db) throw new Error('Firestore is not initialized');

  db.collection(collectionName.giftList)
    .get()
    .then((querySnapshot) => {
      const response: GiftList = [];
      querySnapshot.forEach((doc) => {
        doc.data();
        // const data = doc.data();
        // const gift: Gift = {
        //   id: doc.id,
        //   exchangePoint: data.exchange_point,
        //   pic: data.pic,
        // };
        // response.push(gift);
        // response.;
      });

      setGiftList(response);
    });

  // return giftList;
};

// const useGetGiftListDoc: (setGiftList: (giftList: GiftList) => void) => void = (
//   setGiftList,
// ) => {
//   const { db } = useContext(FirebaseContext);
//   if (!db) throw new Error('Firestore is not initialized');

//   db.collection(collectionName.giftList)
//     .get()
//     .then((querySnapshot) => {
//       const response: GiftList = [];
//       querySnapshot.forEach((doc) => {
//         const data = doc.data();
//         const gift: Gift = {
//           id: doc.id,
//           exchangePoint: data.exchange_point,
//           pic: data.pic,
//         };
//         response.push(gift);
//       });

//       setGiftList(response);
//     });
// };

export default useGetGiftListDoc;
