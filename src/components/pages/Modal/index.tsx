import { Background, Container } from "./style"

import { useContext, useState, FormEvent, ChangeEvent } from "react";
import { ModalContext } from "../../../context/ModalContext";

import { DataBase } from '../../../services/DataBaseService';
import { authInputs } from '../../../services/AuthInputsService';

export const Modal = () => {
    const { closeModal } = useContext(ModalContext);
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [landline, setLandLine] = useState('');
    const [mobilePhone, setMobilePhone] = useState('');
    const [email, setEmail] = useState('');
    const db = new DataBase();
    const auth = new authInputs();

    const handleCloseModal = () => {
        closeModal();
    }

    const handleFormSubmit = (event: FormEvent) => {
        event.preventDefault();
        const nameAuthentic = auth.authName(name);
        const lastNameAuthentic = auth.authLastName(lastName)
        const landLineAuthentic = auth.authLandLine(landline);
        const mobilePhoneAutentic = auth.authMobilePhone(mobilePhone);
        const emailAuthentic = auth.authEmail(email);

        if (nameAuthentic !== false && lastNameAuthentic !== false && landLineAuthentic !== false && mobilePhoneAutentic !== false && emailAuthentic !== false) {
            db.addContact(name, lastName, landline, mobilePhone, email);
            window.location.reload();
        }
    }

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }
    
    const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    }

    const handleLandLineChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLandLine(event.target.value);
    }

    const handleMobilePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMobilePhone(event.target.value);
    }

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    return (
        <Background>
            <Container>
                <h3>Preencha os dados do contato</h3>
                <form>
                    <div>
                        <label>Nome</label>
                        <input
                            type="text"
                            maxLength={30}
                            value={name}
                            onChange={handleNameChange}
                            />
                    </div>
                    <div>
                        <label>Sobrenone</label>
                        <input
                            type="text"
                            maxLength={30}
                            value={lastName}
                            onChange={handleLastNameChange}
                        />
                    </div>
                    <div>
                        <label>Telefone fixo</label>
                        <input
                            type="number"
                            value={landline}
                            onChange={handleLandLineChange}
                            />
                    </div>
                    <div>
                        <label>Telefone Móvel</label>
                        <input
                            type="number"
                            value={mobilePhone}
                            onChange={handleMobilePhoneChange}
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            maxLength={50}
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>

                    <div className="buttonsForms">
                        <button className="buttonClose" onClick={handleCloseModal}>Sair</button>
                        <button className="buttonSave" onClick={handleFormSubmit}>Salvar</button>
                    </div>
                </form>
            </Container>
            )
        </Background>
    )
}