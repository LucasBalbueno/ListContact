export class authInputs {
    authName (name: string): string | boolean {
        const nameAuthentic = name.trim();
        if (nameAuthentic.length <= 0) {
            alert("Nome inválido!");
            return false;
        }
        return nameAuthentic;
    }

    authLastName (lastName: string): string | boolean {
        const lastNameAuthentic = lastName.trim();
        if (lastNameAuthentic.length <= 0) {
            alert('Sobrenome inválido!');
            return false;
        }
        return lastNameAuthentic;
    }

    authLandLine (landLine: string): string | boolean {
        const landLineAuthentic = /^\d{8}$/.test(landLine);
        if (landLineAuthentic === false) {
            alert("Telefone fixo inválido! O telefone fixo deve conter exatamente 8 dígitos.");
            return false;
        }
        return landLine;
    }
    
    authMobilePhone (mobilePhone: string): string | boolean {
        const mobilePhoneAuthentic = /^\d{11}$/.test(mobilePhone);
        if (mobilePhoneAuthentic === false) {
            alert("Telefone móvel inválido! O telefone móvel deve conter exatamente 11 dígitos, incluindo o DDD. Por favor, verifique se inseriu o DDD local.");
            return false;
        }
        return mobilePhone;
    }
    
    authEmail (email: string): string | boolean {
        const emailAuthentic = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (emailAuthentic === false) {
            alert("Email inválido! O email deve conter um formato válido, incluindo o caractere '@' e um domínio, como 'exemplo@dominio.com'.")
            return false
        }
        return email;
    }
}