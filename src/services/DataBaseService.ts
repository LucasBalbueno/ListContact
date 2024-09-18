import { format } from 'date-fns-tz';

export interface ContactTypes {
    id: number;
    name: string;
    lastName: string,
    landline: string,
    mobilephone: string,
    email: string;
    date: string;
}

export class DataBase {
    constructor() {
        const id = localStorage.getItem('id');
        
        if (id === null) {
            localStorage.setItem('id', '0');
        }
    }

    private nextID () {
        const id = parseInt(localStorage.getItem('id') || '0', 10);
        const newId = id + 1;
        localStorage.setItem('id', newId.toString());
        return newId;
    }

    private getFormattedDate() {
        const dateDefault = new Date();
        const date = format(dateDefault, 'dd/MM/yyyy');
        return date;
    }

    getContacts(): ContactTypes[] {
        const contacts = localStorage.getItem('contacts');
        return contacts ? JSON.parse(contacts) : [];
    }

    addContact(name: string, lastName: string, landline: string, mobilephone: string, email: string): void {
        const id = this.nextID();
        const date = this.getFormattedDate();

        const contact: ContactTypes = { id, name, lastName, landline, mobilephone, email, date };
        const contactsList = this.getContacts();
        contactsList.push(contact);
        localStorage.setItem('contacts', JSON.stringify(contactsList));
    }

    removeContact(id: number): void {
        let contacts = this.getContacts();
        contacts = contacts.filter(contact => contact.id !== id);
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }

    clearDataBase(): void {
        localStorage.clear();
        localStorage.setItem('id', '0');
    }
}