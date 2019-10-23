import React from 'react';
// import Contact from './component/Contact';
import ContactList from './component/ContactList';

function App() {
  return (
    <div className="App">
      {/* <div className = "avatar">
          <Contact
            avatar ="https://static1.comicvine.com/uploads/original/11126/111264158/5124228-0d8ba1057dfcd1025f24fbfbe34e3b66.jpg"
            name = "Kurapika"
            online = {false}
          />
      </div>
      <div className ="avatar">
          <Contact
            avatar ="https://www.nautiljon.com/images/perso/00/08/kirua_zoldyck_10080.jpg?1521322922"
            name = "Kirua"
            online= {true}
          />
      </div>
      <div className = "avatar">
          <Contact
            avatar ="https://media.comicbook.com/2018/06/gon-hxh-1114823-1280x0.jpeg"
            name = "Gon"
            online= {true}
          />
      </div> */}
      <ContactList  />

    </div>
  );
}

export default App;
