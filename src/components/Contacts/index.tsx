import { Contact } from './style';
import { useState, useEffect, useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';
import { DataBase } from '../../services/DataBaseService';
import { ContactType } from '../../types/ContactType';
import { getOldInfos } from '../../services/EditService';

export const Contacts = () => {
    const { openModalEdit } = useContext(ModalContext);
    const db = new DataBase();

    const [ listContact, setListContact ] = useState<ContactType[]>([]);

    useEffect(() => {
        const data = db.getContacts()
        setListContact(data);
    }, [])

    const handleDeleButton = (id: number): void => {
        db.removeContact(id)
        const updatedContacts = listContact.filter(contact => contact.id !== id);
        setListContact(updatedContacts);
    }

    const handleEditButton = (contact: ContactType ): void => {
        openModalEdit();        
        getOldInfos(contact);
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
                            {contact.landLine}
                        </p>
                        <p>
                            <span>Telefone Móvel: </span>
                            {contact.mobilePhone}
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
                        <button onClick={() => handleEditButton(contact)}>Editar</button>
                        <button onClick={() => handleDeleButton(contact.id)}>Remover</button>
                    </div>
                </Contact>
                ))}
            </ul>
        </>
    )
}