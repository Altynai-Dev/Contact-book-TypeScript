import { useState } from 'react'
import { IContact } from '../Contact.type';

type EditContactProps = {
    editedContact: IContact,
    saveChanges: (data: IContact)=>void
}


const EditContact = ({editedContact, saveChanges}:EditContactProps) => {
    const [editedContactName, setEditedContactName] = useState<string>(editedContact.name);
    const [editedContactImage, setEditedContactImage] = useState<string>(editedContact.image);
    const [editedContactPhone, setEditedContactPhone] = useState<string>(editedContact.phone);
 
    
    const onContactNameChanged = (e:any) =>{
        setEditedContactName(e.target.value);
    }
    const onContactImageChanged = (e:any) =>{
        setEditedContactImage(e.target.value);
    }
    const onContactPhoneChanged = (e:any) =>{
        setEditedContactPhone(e.target.value);
    }

    console.log(editedContact, 'editContact');
    

    const editContact = (e:any) =>{
        const data: IContact = {
            id: editedContact.id,
            name: editedContactName,
            image: editedContactImage,
            phone: editedContactPhone
        }
        saveChanges(data)
        setEditedContactName('')
        setEditedContactImage('')
        setEditedContactPhone('')
    }
  return (
    <>
    <h3>Edit Contact</h3>
    <input type="text" placeholder='Edit Name' value={editedContactName} onChange={onContactNameChanged} />
    <br></br>
    <input type="text" placeholder='Edit Image' value={editedContactImage} onChange={onContactImageChanged}/>
    <br></br>
    <input type="number" placeholder='Edit Phone' value={editedContactPhone} onChange={onContactPhoneChanged}/>
    <br></br>
    <button onClick={editContact}>Save</button>
    </>
  )
}

export default EditContact