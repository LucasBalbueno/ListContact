import React, { createContext, useState, ReactNode } from 'react';

const defaultValues = {
    isModalOpen: false,
    isEditing: false,
    openModal: () => {},
    closeModal: () => {},
    openModalEdit: () => {},
    closeModalEdit: () => {},
};

type ModalContextProps = typeof defaultValues;

export const ModalContext = createContext<ModalContextProps>(defaultValues);

interface ModalProviderProps {
    children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openModalEdit = () => {
        setIsEditing(true);
        openModal();
    };

    const closeModalEdit = () => {
        setIsEditing(false);
        closeModal();
    };

    return (
        <ModalContext.Provider value={{ isModalOpen, isEditing, openModal, closeModal, openModalEdit, closeModalEdit }}>
            {children}
        </ModalContext.Provider>
    );
};