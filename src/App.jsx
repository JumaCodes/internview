import React from 'react';
import MatchList from './components/MatchList';
import data from './data'; // Your provided data

function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* <h1 className="text-2xl font-semibold mb-4">Tennis Matches</h1> */}
      <MatchList matches={data} />
    </div>
  );
}

export default App;
