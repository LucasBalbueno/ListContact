import { Contact } from './style';

import { useState, useEffect } from 'react';
import { DataBase, ContactTypes } from '../../services/DataBaseService';

export const Contacts = () => {
    const db = new DataBase();

    const [ listContact, setListContact ] = useState<ContactTypes[]>([]);

    useEffect(() => {
        const data = db.getContacts()
        setListContact(data);
    }, [])

    const handleDeleButton = (id: number): void => {
        db.removeContact(id)
        const updatedContacts = listContact.filter(contact => contact.id !== id);
        setListContact(updatedContacts);
    }

    const handleEditButton = () => {

    }

    return (
        <>
            <ul>
                {listContact.map((contact) => (
                    <Contact key={contact.id}>
                    <div>
                        <h2>{`${contact.name} ${contact.lastName}`}</h2>
                        <p>
                            <span>Telefone Fixo: </span>
                            {contact.landline}
                        </p>
                        <p>
                            <span>Telefone Móvel: </span>
                            {contact.mobilephone}
                        </p>
                        <p>
                            <span>Email: </span>
                            {contact.email}
                        </p>
                    </div>
                    <div>
                        <p>
                            <span>Última alteração: </span>
                            {contact.date}
                        </p>
                    </div>

                    <div>
                        <button onClick={handleEditButton}>Editar</button>
                        <button onClick={() => handleDeleButton(contact.id)}>Remover</button>
                    </div>
                </Contact>
                ))}
            </ul>
        </>
    )
}