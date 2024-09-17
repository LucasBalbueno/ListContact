import { Contact } from './style';

export const Contacts = () => {
    return (
        <>
            <ul>
                <Contact>
                    <div>
                        <h2>Nome Sobrenome do contato</h2>
                        <p>
                            <span>Telefone Fixo: </span>
                            51 991518045
                        </p>
                        <p>
                            <span>Telefone Móvel: </span>
                            51 991518045
                        </p>
                        <p>
                            <span>Email: </span>
                            balbuenolucas04@gmail.com
                        </p>
                    </div>
                    <div>
                        <p>
                            <span>Última alteração: </span>
                            17/09/2024
                        </p>
                    </div>
                    <div>
                        <button>Editar</button>
                        <button>Remover</button>
                    </div>
                </Contact>
            </ul>
        </>
    )
}