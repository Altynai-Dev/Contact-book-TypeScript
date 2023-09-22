type ContactCardProps = {
    id: number,
    name: string,
    image: string,
    phone: string,
    deleteContact: (id:number) =>void,
    getEditedObj: (id: number) => void
}
const ContactCard = ({id, name, image, phone, deleteContact, getEditedObj}: ContactCardProps) => {
  return (
    <div>
        <h3>{name}</h3>
        <img src={image} alt="image"/>
        <p>{phone}</p>
        <button onClick={()=>deleteContact(id)}>Delete</button>
        <button onClick={()=>getEditedObj(id)}>Edit</button>
    </div>
  )
}

export default ContactCard