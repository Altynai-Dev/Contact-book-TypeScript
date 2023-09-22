import { useState, useEffect } from 'react';
import './App.css';
import { IContact } from './components/Contact.type';
import ContactCard from './components/ContactCard/ContactCard';
import AddContact from './components/AddContact/AddContact';
import EditContact from './components/EditContact/EditContact';

function App() {
  const [contactList, setContactList] = useState([] as IContact[]);
  const [editedObj, setEditedObj] = useState<null | IContact>(null);

  useEffect(() => {
    console.log(contactList, 'useeffct');
    
  }, [contactList])

  const addNewContact = (data: IContact) =>{
    setContactList([...contactList, data])
  }

  const deleteContact = (id: number) =>{
    setContactList(contactList.filter((contact) => contact.id !== id));
  }

  const saveChanges = (editedContact: IContact) => {
    let newContacts = [...contactList];
    newContacts = newContacts.map((contact) => {
      if(contact.id === editedContact.id) {
        return editedContact
      } else {
        return contact
      }
    })

    console.log(newContacts, 'newwwwwwww');
    
    setContactList(newContacts)
    console.log(contactList, 'contactListtttttttttt');
    
    setEditedObj(null)
  }

  const getEditedObj = (id: number) => {
    let oneObj = contactList.find((contact) => contact.id === id);
    console.log(oneObj);
    
    setEditedObj(oneObj!);
  }

  console.log(editedObj, 'editedObj');
  

  return (
    <div className="App">
      <h1>Contact Book CRUD TypeScript</h1>
      <AddContact addNewContact={addNewContact} />
      {
        contactList.map((contact)=>(
        <ContactCard 
        key={contact.id}
          id={contact.id} 
          name={contact.name} 
          image={contact.image} 
          phone={contact.phone} 
          deleteContact={deleteContact} 
          getEditedObj={getEditedObj} />))
      }
      {
        editedObj ? (
          <EditContact editedContact={editedObj} saveChanges={saveChanges} />
        ) : null
      }
    </div>
  );
}

export default App;
