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

const Paragrafo = styled.p`
    line-height: 1.8;
    margin: 20px 0;
    font-size: 16px;
    color: #555;
`;

const Subtitulo = styled.h2`
    color: #456757;
    margin-top: 40px;
    font-size: 1.8rem;
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

const Footer = styled.footer`
    text-align: center;
    padding: 20px;
    background-color: #456757;
    color: white;
    margin-top: 40px;
`;

function SobreNos() {
    return (
        <Container>
            <Titulo>Sobre Nós</Titulo>
            <Paragrafo>
                Somos uma empresa criada na faculdade FECAP, com o intuito de mostrar como é fácil e benéfico ter uma plantação em casa e em diversos lugares urbanos. Acreditamos que a agricultura urbana não é apenas uma tendência, mas uma necessidade crescente para a sustentabilidade das cidades.
            </Paragrafo>
            
            <Subtitulo>Nossa Missão</Subtitulo>
            <Paragrafo>
                Nossa missão é democratizar o acesso à agricultura urbana, fornecendo informações, recursos e ferramentas para que todos possam cultivar seus próprios alimentos. Queremos transformar espaços urbanos em áreas produtivas, promovendo a saúde, o bem-estar e a conexão com a natureza.
            </Paragrafo>

            <Subtitulo>Por que Agricultura Urbana?</Subtitulo>
            <Paragrafo>
                A agricultura urbana oferece uma série de benefícios, incluindo:
            </Paragrafo>
            <Lista>
                <ListaItem>Produção de alimentos frescos e saudáveis.</ListaItem>
                <ListaItem>Redução do desperdício e da pegada de carbono.</ListaItem>
                <ListaItem>Melhoria da qualidade do ar e do ambiente urbano.</ListaItem>
                <ListaItem>Fortalecimento das comunidades locais através de hortas comunitárias.</ListaItem>
                <ListaItem>Aumento do conhecimento sobre alimentação e saúde.</ListaItem>
            </Lista>

            <Subtitulo>Nosso Compromisso</Subtitulo>
            <Paragrafo>
                Estamos comprometidos em educar e inspirar as pessoas a cultivar seus próprios alimentos. Acreditamos que todos, independentemente do espaço que têm, podem plantar e colher. Nossa equipe é dedicada a fornecer conteúdo útil, workshops e suporte contínuo para ajudar nossos usuários em suas jornadas de cultivo.
            </Paragrafo>
            
            <Quote>
                "Cultivar é mais do que plantar; é cuidar da saúde, da comunidade e do futuro do nosso planeta."
            </Quote>

            <Subtitulo>Junte-se a Nós!</Subtitulo>
            <Paragrafo>
                Convidamos você a se juntar a nós nessa missão. Explore nosso site, aprenda sobre agricultura urbana e comece a sua própria jornada de cultivo. Cada planta cultivada é um passo em direção a um mundo mais sustentável.
            </Paragrafo>

            <Imagem src="https://example.com/imagem-sobre-nos.jpg" alt="Agricultura Urbana" />

         
        </Container>
    );
}

export default SobreNos;
