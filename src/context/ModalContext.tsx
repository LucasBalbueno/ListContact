import React, { createContext, useState, ReactNode } from "react";

interface ModalContextProps {
    isModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

const defaultValues = {
    isModalOpen: false,
    openModal: () => {},
    closeModal: () => {}
}

export const ModalContext = createContext<ModalContextProps>(defaultValues);

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
          {children}
        </ModalContext.Provider>
    );
}