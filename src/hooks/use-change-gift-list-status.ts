/* Firebaseのgift_listコレクションにアクセスし,statusフィールドを交換済み(true)に変更する */
import { FirebaseContext, TotalPointContext } from 'contexts';
import { useContext } from 'react';
import { collectionName } from '../constants';

const useChangeGiftListStatus = (exchangePoint: number, docId: string) => {
  const { totalPoint, setTotalPoint } = useContext(TotalPointContext);
  if (!setTotalPoint) throw new Error('setTotalPoint is null');
  const { db } = useContext(FirebaseContext);
  if (!db) throw new Error('Firestore is not initialized');

  const changeStatus = async () => {
    const shouldExchange = window.confirm('交換しますか？');
    if (!shouldExchange) return;
    await db
      .collection(collectionName.giftList)
      .doc(docId)
      .update({ status: true });
    // todo ↓そのうちContextAPI使ってuseUpdateTotalPointと共通化する
    const point = totalPoint - exchangePoint;
    console.log(point);
    await db
      .collection(collectionName.totalPoint)
      .doc('shota')
      .update({ point });
    setTotalPoint(point);
  };

  return changeStatus;
};

export default useChangeGiftListStatus;
