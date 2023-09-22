import { useState } from 'react'
import { IContact } from '../Contact.type';


type AddContactProps = {
    addNewContact : (newContact: IContact) =>void
}
const AddContact = ({addNewContact}: AddContactProps) => {
    const [contactName, setContactName] = useState('');
    const [contactImage, setContactImage] = useState('');
    const [contactPhone, setContactPhone] = useState('');

    const onContactNameChanged = (e:any) =>{
        setContactName(e.target.value);
    }
    const onContactImageChanged = (e:any) =>{
        setContactImage(e.target.value);
    }
    const onContactPhoneChanged = (e:any) =>{
        setContactPhone(e.target.value);
    }

    const handleAdd = () =>{
          const newContact: IContact = {
            name: contactName,
            image: contactImage,
            phone: contactPhone,
            id: Date.now(),
          };
          setContactName('');
          setContactImage('');
          setContactPhone('');
          addNewContact(newContact)
    }
  return (
    <>
    <h2>Add a new contact</h2>
    <input type='text' value={contactName} onChange={onContactNameChanged} placeholder='Name' />
    <input type='text' value={contactImage} onChange={onContactImageChanged} placeholder='Image' />
    <input type='number' value={contactPhone} onChange={onContactPhoneChanged} placeholder='Phone' />
    <button onClick={handleAdd}>Add</button>
    </>
  )
}

export default AddContact