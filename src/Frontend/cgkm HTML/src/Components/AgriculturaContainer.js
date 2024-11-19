import React from 'react';
import styled from 'styled-components';
import jardinagem from '../assets/jardinagem.png'
import jardinagem3 from '../assets/jardinagem3.webp'
import jardinagem4 from '../assets/jardinagem4.jpeg'

const TituloAgricultura = styled.h1`
    color: #456757;
    font-size: 2rem;
    margin: 0; 
`;

const FundoTituloAgricultura = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center; 
    padding: 10px 20px; 
    background-color: #BAD4C8;
    max-width: fit-content; 
    border-radius: 5px;
    margin: 0 auto 40px;
`;

const SecaoImagemTextoAgricultura = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 40px;
`;

const ImagemAgricultura = styled.img`
    height: 400px;
    width: 50%;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TextoAgricultura = styled.div`
    font-family: 'Poppins', sans-serif;
    font-weight: 545; 
    font-size: 17px; 
    line-height: 1.5;
    letter-spacing: 1.5px;
    width: 50%;
    margin-left: 20px;
`;

const LinhaAgricultura = styled.div`
    height: 2px;
    background-color: #456757;
    width: 100%;
    margin-top: 10px;
`;

const Container = styled.div`
    padding: 40px;
    max-width: 1200px;
    margin: auto;
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
`;

const Subtitulo = styled.h2`
    color: #456757;
    margin-top: 40px;
    font-size: 1.8rem;
`;

const Paragrafo = styled.p`  
    margin: 20px 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 545; 
    font-size: 17px; 
    line-height: 1.5;
    letter-spacing: 1.5px;  
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

const RetanguloVerde = styled.div`
    background-color: #BAD4C8;
    padding: 20px;
    border-radius: 8px;
    margin-top: 20px;
`;

const TituloRetangulo = styled.h3`
    color: #456757;
    margin-top: 40px;
    font-size: 1.8rem;
`;

const TextoRetangulo = styled.p`
    font-family: 'Poppins', sans-serif;
    font-weight: 545; 
    font-size: 17px; 
    line-height: 1.5;
    letter-spacing: 1.5px;
    margin-bottom: 10px;
`;

const ImagensContainer = styled.div`
    display: flex;
    gap: 20px;
`;

const ImagemPequena = styled.img`
    width: 47%;  
    height: 400px; 
    object-fit: cover; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-right: 4%; 
    &:last-child {
        margin-right: 0;
    }
`;

const SecaoInspiradores = styled.div`
    margin-top: 40px;
`;

function Agricultura() {
    
    return (
        <Container>
            <FundoTituloAgricultura>
                <TituloAgricultura>Agricultura Urbana</TituloAgricultura>
            </FundoTituloAgricultura>

            <SecaoImagemTextoAgricultura>
                <ImagemAgricultura src={jardinagem3} />
                <TextoAgricultura>                  
                    A agricultura urbana transforma espaços ociosos das cidades em refúgios produtivos e sustentáveis. Hortas comunitárias, jardins verticais e plantações em telhados são exemplos dessa prática que promove não apenas alimentos frescos e saudáveis, mas também um novo estilo de vida. A agricultura urbana vai além da produção de alimentos, promovendo um estilo de vida mais saudável e sustentável. Ela aproxima as pessoas do cultivo e incentiva hábitos conscientes. Pode ser implementada em diversos espaços, como terrenos baldios, quintais, varandas ou áreas públicas, adaptando-se a diferentes realidades e oferecendo soluções criativas para desafios urbanos, como falta de espaço e uso excessivo de recursos naturais.
                </TextoAgricultura>
            </SecaoImagemTextoAgricultura>

            <LinhaAgricultura />

            <RetanguloVerde>
                <TituloRetangulo>Inovações Tecnológicas</TituloRetangulo>
                <TextoRetangulo>
                    Tecnologias como hidroponia e sistemas verticais estão transformando a agricultura urbana, tornando-a mais eficiente e adaptada às necessidades das cidades modernas.
                </TextoRetangulo>
                <ImagensContainer>
                    <ImagemPequena src={jardinagem4} />
                    <ImagemPequena src={jardinagem} />
                </ImagensContainer>
            </RetanguloVerde>

            <LinhaAgricultura />

            <SecaoInspiradores>
                <Subtitulo>Exemplos Inspiradores</Subtitulo>
                <Paragrafo>
                Cidades como São Paulo e Nova York lideram projetos de hortas urbanas, aproveitando terraços e espaços subutilizados. Em São Paulo, hortas no topo de prédios fornecem alimentos frescos para funcionários e ajudam a mitigar o impacto climático. Essas iniciativas demonstram que, com criatividade e empenho, é possível transformar a paisagem urbana e gerar um impacto positivo duradouro.
                </Paragrafo>             
            </SecaoInspiradores>

            <LinhaAgricultura />

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
