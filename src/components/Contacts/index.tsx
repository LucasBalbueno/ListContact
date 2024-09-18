import { Contact } from './style';

import { useState, useEffect } from 'react';
import { DataBase, ContactTypes } from '../../services/DataBaseService';

export const Contacts = () => {
    const db = new DataBase();

    const [ listContact, setListContact ] = useState<ContactTypes[]>([]);

    useEffect(() => {
        const data = db.getContacts()
        setListContact(data);
    }, [listContact])

    console.log(listContact)

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
                        <button>Editar</button>
                        <button>Remover</button>
                    </div>
                </Contact>
                ))}
            </ul>
        </>
    )
}

{/* <Contact>
                    <div>
                        <h2>Nome Sobrenome do contato</h2>
                        <p>
                            <span>Telefone Fixo: </span>
                            51 991518045
                        </p>
                        <p>
                            <span>Telefone Móvel: </span>
                            51 991518045
                        </p>
                        <p>
                            <span>Email: </span>
                            balbuenolucas04@gmail.com
                        </p>
                    </div>
                    <div>
                        <p>
                            <span>Última alteração: </span>
                            17/09/2024
                        </p>
                    </div>
                    <div>
                        <button>Editar</button>
                        <button>Remover</button>
                    </div>
                </Contact> */}