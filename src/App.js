import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact 
        name='Bessie Jacobs'
        avatar='https://randomuser.me/api/portraits/women/51.jpg'
        online={true}
        />
      <Contact
        name='Everett Sullivan'
        avatar='https://randomuser.me/api/portraits/men/76.jpg'
        online={false}
        />
      <Contact
        name='Beth Hernandez'
        avatar='https://randomuser.me/api/portraits/women/54.jpg'
        online={true}
      />

    </div>
  );
}

export default App;
