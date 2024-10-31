import styled from "styled-components";

const Escrita = styled.div`
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Escrita2 = styled.nav`
    display: flex;
    align-items: center;
    width: 100%;
    padding-left: 200px;

    @media (max-width: 768px) {
        padding-left: 0;
        flex-direction: column;
        align-items: flex-start;
    }
`;

const Texto = styled.h1`
    color: #456757;
    font-family: 'Playfair Display', serif;
    font-size: 44px;
    margin-left: 0; /* Posição padrão */
    
    /* Estilo adicional para "LEIA TAMBÉM" */
    &:nth-child(2) {
        margin-left: 300px; /* Altere a margem conforme necessário */
    }

    @media (max-width: 768px) {
        margin-left: 0;
        font-size: 32px;
    }
`;

const Linha = styled.div`
    height: 2px;
    background-color: #456757;
    width: 100%;
    margin-top: 10px;
`;

const Container = styled.div`
    @media (max-width: 768px) {
        display: none; /* Oculta o componente em telas menores */
    }
`;

function Info() {
    return (
        <Container>
            <Escrita>
                <Escrita2>
                    <Texto>DESTAQUES</Texto>
                    <Texto>LEIA TAMBÉM</Texto>
                </Escrita2>
            </Escrita>
            <Linha />
        </Container>
    );
}

export default Info;
