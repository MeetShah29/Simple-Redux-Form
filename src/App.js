import React, { Fragment } from 'react';
import './App.css';
import showResults from './results/showResults'
import Testform from './Testform/Testform';

function App() {
  return (
    <div className="App">
      <Fragment>
      <Testform onSubmit={showResults} />
     
      </Fragment>
    </div>
  );
}

export default App;
