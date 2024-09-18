import { useContext } from "react";
import { ModalContext } from '../../context/ModalContext';
import { Container } from "./style";
import { DataBase } from "../../services/DataBaseService";

export const HeaderControls = () => {
    const { openModal } = useContext(ModalContext);
    const db = new DataBase();
    
    const handleOpenModal = () => {
        openModal();
    }

    const handleResetList = () => {
        db.clearDataBase()
        window.location.reload();
    }

    return (
        <>
            <Container>
                <div>
                    <button className="buttonAdd" onClick={handleOpenModal}>Adicionar</button>
                    <button className="buttonReset" onClick={handleResetList}>Limpar lista</button>
                </div>
            </Container>
        </>
    )
}