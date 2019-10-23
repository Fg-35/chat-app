import React from 'react';
import Contact from './Contact';
const contact = [
    {
        avatar : "https://static1.comicvine.com/uploads/original/11126/111264158/5124228-0d8ba1057dfcd1025f24fbfbe34e3b66.jpg",
        name : "Kurapika",
        status : false,
    },
    {
        avatar : "https://www.nautiljon.com/images/perso/00/08/kirua_zoldyck_10080.jpg?1521322922",
        name : "Kirua",
        status : true, 
    },
    {
        avatar : "https://media.comicbook.com/2018/06/gon-hxh-1114823-1280x0.jpeg",
        name : "Gon",
        status : true, 
    },
    {
        avatar : "https://www.nautiljon.com/images/perso/00/84/leorio_148.jpg",
        name : "Leorio",
        status : true, 
    },
    {
        avatar : "https://i.ytimg.com/vi/De_M7Tfvs6M/hqdefault.jpg",
        name : "Hisoka",
        status : false, 
    }
];

const ContactList = () => (
    <div>
      {contact.map(item => (
        <Contact avatar={item.avatar} name={item.name} status={item.status}/>
      ))}
    </div>
);  



export default ContactList;