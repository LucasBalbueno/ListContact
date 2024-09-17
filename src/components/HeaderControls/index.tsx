import { Container } from "./style";

export const HeaderControls = () => {
    return (
        <>
            <Container>
                <div>
                    <input type="search" />
                    <button>Pesquisar</button>
                </div>

                <div>
                    <button>Adicionar</button>
                    <button>Limpar lista</button>
                </div>
            </Container>
        </>
    )
}