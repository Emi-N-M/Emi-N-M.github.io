import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed.js';
import Widgets from './Widgets.js';
import './App.css';

function App() {
  return (
    //BEM
    <div className="App">

        {/* {Sidebar} */}
        <Sidebar />
        {/* {Feed} */}
        <Feed />
        {/* {Widgets} */}
        <Widgets />

    </div>
  );
}

export default App;
