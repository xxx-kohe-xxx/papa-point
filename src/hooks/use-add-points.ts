import { useContext } from 'react';
import { FirebaseContext } from 'contexts';

const useAddPoints = (point: number) => {
  const firebaseRef = useContext(FirebaseContext);
  const addPoint = async (): Promise<void> => {
    const { db } = firebaseRef;
    if (!db) throw new Error('Firestore is not initialized');
    const totalPointRef = db
      .collection('total_point')
      .doc('fTUC4zaz3LFEC5Wap1of');
    const totalPointDoc = await totalPointRef.get();
    const currentPoint: number = totalPointDoc.get('point');
    totalPointRef.update({ point: currentPoint + point });
  };

  return addPoint;
};

export default useAddPoints;
