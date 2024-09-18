import React, { createContext, useState, ReactNode } from 'react';
// import { ContactTypes } from '../services/DataBaseService';

interface ModalContextProps {
    isModalOpen: boolean;
    isEditing: boolean;
    openModal: () => void;
    closeModal: () => void;
    openModalEdit: () => void;
    closeModalEdit: () => void;
    // setEditingContact: (contact: ContactTypes | null) => void;
    // editingContact: ContactTypes | null;
}

const defaultValues: ModalContextProps = {
    isModalOpen: false,
    isEditing: false,
    openModal: () => {},
    closeModal: () => {},
    openModalEdit: () => {},
    closeModalEdit: () => {},
    // setEditingContact: () => {},
    // editingContact: null,
};

export const ModalContext = createContext<ModalContextProps>(defaultValues);

interface ModalProviderProps {
    children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    // const [editingContact, setEditingContact] = useState<ContactTypes | null>(null);

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