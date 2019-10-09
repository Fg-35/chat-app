import React from 'react';
import Contact from './component/Contact';

function App() {
  return (
    <div className="App">
      <div className = "Contact">
        <div className = "avatar">
          <Contact
            image ="https://www.nautiljon.com/images/perso/00/08/kirua_zoldyck_10080.jpg?1521322922"
          />
        </div>
        <div>
          {/* a mettre les name et online */}
        </div>
      </div>
    </div>
  );
}

export default App;
