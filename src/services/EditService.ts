import { DataBase } from './DataBaseService'

import { editContactType } from '../types/editContact'

const db = new DataBase;
let oldInfos: editContactType | null;
let newInfos: Partial<editContactType> | null;

export const getOldInfos = (contact: editContactType): void => {
    oldInfos = contact;
}

export const getNewInfos = (name: string, lastName: string, landLine: string, mobilePhone: string, email: string): void => {
    const editInfos: Partial<editContactType> = {
        name: name,
        lastName: lastName,
        landLine: landLine,
        mobilePhone: mobilePhone,
        email: email
    }

    newInfos =  editInfos;
}

export const updateListContact = () => {
    if (newInfos === null) {
        throw new Error('Informações velhas vazias');
        return
    }
    
    if (oldInfos === null) {
        throw new Error('Informações antigas vazias');
        return
    }

    const id = oldInfos.id;
    const name = newInfos.name === '' ? oldInfos.name : newInfos.name;
    const lastName = newInfos.lastName === '' ? oldInfos.lastName : newInfos.lastName;
    const landLine = newInfos.landLine === '' ? oldInfos.landLine : newInfos.landLine;
    const mobilePhone = newInfos.mobilePhone === '' ? oldInfos.mobilePhone : newInfos.mobilePhone;
    const email = newInfos.email === '' ? oldInfos.email : newInfos.email;

    db.removeContact(id);

    // O REACT AVISA QUE ESSES VALORES PODEM SER NULL, MOMENTANEAMENTE COLOCAMOS O ! E DEPOIS DAS VERIFICAÇÕES ESTAREM SALVAS A GENTE RETIRA
    // TIRAR O !
    db.addContact(name!, lastName!, landLine!, mobilePhone!, email!)
    window.location.reload();
}
