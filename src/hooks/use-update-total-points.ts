import { useContext } from 'react';
import { FirebaseContext, TotalPointContext } from 'contexts';
import { collectionName } from '../constants';

const useUpdateTotalPoints: (addPoint: number) => () => Promise<void> = (
  addPoint: number,
) => {
  const { totalPoint, setTotalPoint } = useContext(TotalPointContext);
  if (!setTotalPoint) throw new Error('setTotalPoint is null');
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
