// eslint-disable-next-line no-use-before-define
import React, { FC, useState } from 'react';
import useGetTotalPoint from 'hooks/use-get-total-points';
import { TotalPointContext } from './contexts';

const TotalPointApp: FC = ({ children }) => {
  const getCurrentPoint = useGetTotalPoint();
  const [totalPoint, setTotalPoint] = useState(0);
  const currentPoint = async () => {
    getCurrentPoint.then((point) => setTotalPoint(point));
  };
  currentPoint();

  return (
    <TotalPointContext.Provider value={{ totalPoint, setTotalPoint }}>
      {children}
    </TotalPointContext.Provider>
  );
};

export default TotalPointApp;
