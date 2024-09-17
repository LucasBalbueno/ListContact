import { Background, Container } from './style'

import { HeaderControls } from '../../HeaderControls';
import { Contacts } from '../../Contacts';

export const ListContact = () => {
    return(
        <>  
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