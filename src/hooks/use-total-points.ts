import { useEffect, useState } from 'react';

const API =
  'https://asia-northeast1-papa-point-app.cloudfunctions.net/totalPoints';

const useTotalPoints = () => {
  const [totalPoints, setTotalPoints] = useState<number>();

  useEffect(() => {
    (async () => {
      const response = await fetch(API).then((res) => res.json());
      setTotalPoints(response.data[0].point);
    })();
  });

  return totalPoints;
};

export default useTotalPoints;
