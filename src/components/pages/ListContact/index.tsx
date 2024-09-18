import { Background, Container } from './style'

import { useContext } from 'react';
import { ModalContext } from '../../../context/ModalContext';

import { HeaderControls } from '../../HeaderControls';
import { Contacts } from '../../Contacts';
import { Modal } from '../Modal';
import { ModalEdit } from '../ModalEdit';

export const ListContact = () => {
    const { isModalOpen, isEditing } = useContext(ModalContext);

    return (
        <>
            {isModalOpen && (<Modal />)}
            {isEditing && (<ModalEdit />)}
            <Background>
                <h1>Sua lista de contatos</h1>
                <Container>
                    <HeaderControls />
                    <Contacts />
                </Container>
            </Background>
        </>
    )
}