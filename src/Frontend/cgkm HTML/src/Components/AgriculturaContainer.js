import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 40px;
    max-width: 1200px;
    margin: auto;
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
`;

const Titulo = styled.h1`
    color: #456757;
    text-align: center;
    font-size: 2.5rem;
`;

const Subtitulo = styled.h2`
    color: #456757;
    margin-top: 40px;
    font-size: 1.8rem;
`;

const Paragrafo = styled.p`
    line-height: 1.8;
    margin: 20px 0;
    font-size: 16px;
    color: #555;
`;

const Lista = styled.ul`
    margin: 20px 0;
    padding-left: 20px;
`;

const ListaItem = styled.li`
    margin-bottom: 10px;
`;

const Imagem = styled.img`
    width: 100%;
    max-width: 600px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 20px 0;
`;

const Quote = styled.blockquote`
    font-style: italic;
    margin: 20px 0;
    padding: 10px;
    border-left: 4px solid #456757;
    background-color: #eef8ee;
`;

const VideoContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 40px 0;
`;

const Video = styled.iframe`
    width: 100%;
    max-width: 600px;
    height: 315px;
    border: none;
`;



function Agricultura() {
    return (
        <Container>
            <Titulo>Agricultura Urbana</Titulo>
            <Paragrafo>
                A agricultura urbana é uma prática que envolve o cultivo de plantas e a criação de animais em áreas urbanas. Com o aumento da urbanização e o crescimento da população, essa prática se torna cada vez mais importante para garantir a segurança alimentar e promover a sustentabilidade nas cidades.
            </Paragrafo>
            
            <Subtitulo>Benefícios da Agricultura Urbana</Subtitulo>
            <Paragrafo>
                A agricultura urbana traz diversos benefícios, entre eles:
            </Paragrafo>
            <Lista>
                <ListaItem>Produção de alimentos frescos e saudáveis.</ListaItem>
                <ListaItem>Redução da pegada de carbono.</ListaItem>
                <ListaItem>Melhoria da qualidade do ar e da biodiversidade urbana.</ListaItem>
                <ListaItem>Fortalecimento da comunidade através da participação em projetos de hortas comunitárias.</ListaItem>
                <ListaItem>Geração de emprego e renda em áreas urbanas.</ListaItem>
            </Lista>
            <Imagem src="https://example.com/imagem-agricultura-urbana.jpg" alt="Agricultura Urbana" />
            
            <Subtitulo>Tecnologia na Agricultura Urbana</Subtitulo>
            <Paragrafo>
                A tecnologia desempenha um papel crucial na agricultura urbana. Inovações como a hidroponia, aquaponia e o uso de drones para monitoramento de culturas estão transformando a forma como os alimentos são cultivados nas cidades.
            </Paragrafo>
            <Quote>
                "A tecnologia pode ser a chave para uma agricultura urbana mais eficiente e sustentável."
            </Quote>
            <Paragrafo>
                Além disso, aplicativos de gerenciamento e plataformas de compartilhamento de recursos têm facilitado o acesso a informações e ferramentas para os agricultores urbanos, promovendo uma abordagem mais eficiente e sustentável.
            </Paragrafo>

            <Subtitulo>Exemplos de Práticas Sustentáveis</Subtitulo>
            <Lista>
                <ListaItem>Uso de compostagem para fertilizar o solo.</ListaItem>
                <ListaItem>Captação de água da chuva para irrigação.</ListaItem>
                <ListaItem>Cultivo de plantas nativas para promover a biodiversidade.</ListaItem>
                <ListaItem>Implementação de sistemas de cultivo vertical para maximizar o espaço.</ListaItem>
            </Lista>

            <Subtitulo>Aprenda Mais com Este Vídeo</Subtitulo>
            <VideoContainer>
                <Video
                    src="https://www.youtube.com/embed/example-video"
                    title="Agricultura Urbana"
                    allowFullScreen
                />
            </VideoContainer>

           
        </Container>
    );
}

export default Agricultura;
