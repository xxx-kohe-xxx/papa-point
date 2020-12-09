/* FirestoreのTotal_Pointコレクションにアクセスして現在の合計ポイントを取得する */
import { FirebaseContext } from 'contexts';
import { useContext } from 'react';
import { collectionName } from '../constants';

const useGetTotalPoint = () => {
  const { db } = useContext(FirebaseContext);
  if (!db) throw new Error('Firestore is not initialized');

  const currentPoint: Promise<number> = db
    .collection(collectionName.totalPoint)
    .doc('shota')
    .get()
    .then((result) => result.get('point'));

  return currentPoint;
};

export default useGetTotalPoint;
