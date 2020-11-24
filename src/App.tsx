// eslint-disable-next-line no-use-before-define
import React from 'react';
import './App.css';
import { TotalPointsDisplay } from 'components/TotalPointsDisplay';
import { AddPoints } from 'components/AddPoints';

const App = () => (
  <>
    <TotalPointsDisplay />
    <AddPoints />
  </>
);

export default App;
