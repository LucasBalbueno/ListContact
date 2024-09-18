import { Background, Container } from "./style"

import { useContext, useState, FormEvent, ChangeEvent } from "react";
import { ModalContext } from "../../../context/ModalContext";

import { DataBase } from '../../../services/DataBaseService';

export const Modal = () => {
    const { closeModal } = useContext(ModalContext);
    const [ name, setName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ landline, setLandLine ] = useState('');
    const [ mobilePhone, setMobilePhone ] = useState('');
    const [ email, setEmail ] = useState('');
    const db = new DataBase();
    
    const handleCloseModal = () => {
        closeModal();
    }

    const handleFormSubmit = (event: FormEvent) => {
        event.preventDefault();

        db.addContact(name, lastName, landline, mobilePhone, email);
        window.location.reload();
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
                        value={name}
                        onChange={handleNameChange}
                        />
                    </div>
                    <div>
                        <label>Sobrenone</label>
                        <input
                        type="text"
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
        </Background>
    )
}