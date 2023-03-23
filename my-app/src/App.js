import React from 'react';
import Header from './components/Header';
import data from './data';
import './css/App.css';
import Entry from './components/Entry';

function App() {
  const entries = data.map((item) => {
    return <Entry
      key={item.startDate}
      {...item}
    />
  })
  return (
    <div className="App">
      <Header />
      {entries}
    </div>
  );
}

export default App;
