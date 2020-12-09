import { useContext } from 'react';
import { FirebaseContext } from 'contexts';
import { collectionName } from '../constants';

const useUpdateTotalPoints = (
  addPoint: number,
  totalPoint: number,
  setTotalPoint: (value: number) => void,
) => {
  const { db } = useContext(FirebaseContext);
  if (!db) throw new Error('Firestore is not initialized');
  const point = totalPoint + addPoint;

  const updatePoint = async (): Promise<void> => {
    db.collection(collectionName.totalPoint).doc('shota').update({ point });
    setTotalPoint(point);
  };

  return updatePoint;
};

export default useUpdateTotalPoints;
