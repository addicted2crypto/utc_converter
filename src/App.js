import React from 'react';
import './App.css';
import UtcConverter from './components/converter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p className='flex flex-center'> Automatically convert from UTC.
        </p>
         <div className='utcApp'>
          <UtcConverter />
        </div>
      </header>
    </div>
  );
}

export default App;
