import { Background, Container } from './style'

import { useContext } from 'react';
import { ModalContext } from '../../../context/ModalContext';

import { HeaderControls } from '../../HeaderControls';
import { Contacts } from '../../Contacts';
import { Modal } from '../Modal';

export const ListContact = () => {
    const { isModalOpen } = useContext(ModalContext);

    return (
        <>
            {isModalOpen && (<Modal />)}
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