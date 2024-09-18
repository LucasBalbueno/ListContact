import { Background, Container } from "../Modal/style"
import { useContext, useState, FormEvent, ChangeEvent } from "react";
import { ModalContext } from "../../../context/ModalContext";
import { authInputs } from "../../../services/AuthInputsService";
import { getNewInfos, updateListContact } from '../../../services/EditService'

export const ModalEdit = () => {
    const { closeModalEdit } = useContext(ModalContext);
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [landline, setLandLine] = useState('');
    const [mobilePhone, setMobilePhone] = useState('');
    const [email, setEmail] = useState('');

    const auth = new authInputs();

    const handleCloseModalEdit = () => {
        closeModalEdit()
    }
    
    const handleSaveEdits = (event: FormEvent) => {
        event.preventDefault();

        let landLineAuthentic;
        let mobilePhoneAuthentic;
        let emailAuthentic;

        if(landline !== '') {
            landLineAuthentic = auth.authLandLine(landline);
        }

        if(mobilePhone !== '') {
            mobilePhoneAuthentic = auth.authMobilePhone(mobilePhone);
        }

        if(email !== '') {
            emailAuthentic = auth.authEmail(email);
        }

        if (landLineAuthentic !== false && mobilePhoneAuthentic !== false && emailAuthentic !== false) {
            getNewInfos(name, lastName, landline, mobilePhone, email)
            updateListContact()
            closeModalEdit()
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
                <h3>Edite os dados do contato</h3>
                <p>Preencha apenas os campos que quiser alterar.</p>
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
                        <button className="buttonClose" onClick={handleCloseModalEdit}>Sair</button>
                        <button className="buttonSave" onClick={handleSaveEdits}>Salvar</button>
                    </div>
                </form>
            </Container>
            )
        </Background>
    )
}