import React from 'react';
import Tabs from './Component/Tabs';
import './App.css'
// import './Component/Tabs.css'

const App = () => {
  const tabs = [
    {
      label: 'About Me',
      content: (
        <div>
          <h2 className='h2'>About Me</h2>
          <p className='p'>This is the About Me section.</p>
        </div>
      ),
    },
    {
      label: 'Projects',
      content: (
        <div>
          <h2 className='h2'>Projects</h2>
          <p className='p'>This is the Projects section.</p>
        </div>
      ),
    },
    {
      label: 'Contact',
      content: (
        <div>
          <h2 className='h2'>Contact</h2>
          <p className='p'>This is the Contact section.</p>
        </div>
      ),
    },
  ];

  return (
    <div className="App">
      <h1>My Portfolio</h1>
      <Tabs  tabs={tabs} />
    </div>
  );
};

export default App;
