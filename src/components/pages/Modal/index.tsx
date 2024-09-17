import { Background, Container } from "./style"

import { useContext } from "react";
import { ModalContext } from "../../../context/ModalContext";

export const Modal = () => {
    const { isModalOpen, closeModal } = useContext(ModalContext);

    console.log(isModalOpen)
    
    const handleCloseModal = () => {
        closeModal();
        console.log(isModalOpen)
    }

    return (
        <Background>
            <Container>
                    <h3>Preencha os dados do contato</h3>
                {/* <div>
                </div> */}
                <form>
                    <div>
                        <label>Nome</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Sobrenone</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Telefone fixo</label>
                        <input type="number" />
                    </div>
                    <div>
                        <label>Telefone Móvel</label>
                        <input type="number" />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" />
                    </div>

                    <div className="buttonsForms">
                        <button className="buttonClose" onClick={handleCloseModal}>Sair</button>
                        <button className="buttonSave">Salvar</button>
                    </div>
                </form>
            </Container>
        </Background>
    )
}