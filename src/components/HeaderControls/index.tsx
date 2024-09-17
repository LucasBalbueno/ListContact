import { useContext } from "react";
import { ModalContext } from '../../context/ModalContext';

import { Container } from "./style";

export const HeaderControls = () => {
    const { isModalOpen, openModal } = useContext(ModalContext);

    console.log(isModalOpen)
    
    const handleOpenModal = () => {
        openModal();
    }

    return (
        <>
            <Container>
                <div>
                    <input type="search" />
                    <button>Pesquisar</button>
                </div>

                <div>
                    <button onClick={handleOpenModal}>Adicionar</button>
                    <button>Limpar lista</button>
                </div>
            </Container>
        </>
    )
}