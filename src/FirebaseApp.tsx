// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

import { FirebaseContext } from './contexts';

const FirebaseApp: FC = ({ children }) => {
  const db = firebase.firestore();
  const storage = firebase.storage();

  return (
    <FirebaseContext.Provider value={{ db, storage }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseApp;
