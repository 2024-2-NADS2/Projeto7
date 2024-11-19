import React from 'react';
import styled from 'styled-components';
import LogoCompleta from '../assets/logocompleta.png';  // Imagem já existente
import Ods2 from '../assets/ods2.png'
import Ods12 from'../assets/ods12.jpg'
import LogoOng from'../assets/LogoOng.png'


const Container = styled.div`
    font-family: 'Poppins', sans-serif;
    font-weight: 545;
    font-size: 20px;
    line-height: 1.5;
    letter-spacing: 1.5px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
`;

const Header = styled.header`
    width: 100%;
    text-align: center;
`;

const Title = styled.h1`
    color: #456757;
    font-size: 2.5rem;
    font-weight: bold;
`;

const Subtitle = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 1.5;
    letter-spacing: 1px;
`;

const Description = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 545;
    line-height: 1.5;
    letter-spacing: 1px;
    text-align: center;
    margin-bottom: 10px;
`;

const ContentSection = styled.section`
    display: flex;
    align-items: flex-start;
    margin: 20px 0;
    gap: 20px;
    width: 100%;
`;

const TextSection = styled.div`
    flex: 1;
`;

const SectionTitle = styled.h3`
    color: #456757;
    font-size: 1.8rem;
    margin-bottom: 10px;
`;

const SectionText = styled.p`
    font-size: 1.1rem;
    line-height: 1.6;
    color: #333;
`;

const List = styled.ul`
    font-size: 1.1rem;
    line-height: 1.6;
    color: #333;
    padding-left: 20px;
`;

const ListItem = styled.li`
    margin-bottom: 10px;
    color: #456757;
`;

const ImageContainer = styled.div`
    flex: 1;
    max-width: 400px;
`;

const Image = styled.img`
    filter: invert(45%) sepia(60%) saturate(400%) hue-rotate(80deg) brightness(30%);
    width: 100%;
    height: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 100px;
`;

const LinhaAgricultura = styled.div`
    height: 2px;
    background-color: #456757;
    width: 100%;
    margin-top: 10px;
`;


const SubTitleSection = styled.h3`
    font-size: 2rem;
    color: #456757;
    text-align: center;
    margin-bottom: 40px;
`;

const ThreeColumnsSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    margin-top: 40px;
`;

const Column = styled.div`
    width: 100%;
`;

const ColumnTitle = styled.h3`
    color: #456757;
    font-size: 1.8rem;
    margin-bottom: 10px;
`;

const ColumnText = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 545;
    line-height: 1.5;
    letter-spacing: 1px;
    margin-bottom: 20px;
`;

const Link = styled.a`
    font-weight: bold;
    color: black;
    text-decoration: none;

    &:hover {
        text-decoration: none; 
    }
`;

const ImageRows = styled.div`
  display: flex;  
    justify-content: center; 
    align-items: center; 
    gap: 10px;  
    width: 100%;
`;

const ImageColumns = styled.div`
flex: 1;
max-width: 15%;
`;

const Imagem = styled.img`
     width: 100%;
    height: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 100px;
`;

const ImagemOng = styled.img `
    width: 100%;
    max-width: 700px;
    height: 255px;
    border: none;
`;
function SobreNos() {
    return (
        <Container>
            <Header>
                <Title>CultivAção: Plantando o Futuro, Transformando Realidades</Title>
                <Subtitle>Bem-vindo ao CultivAção!</Subtitle>
            </Header>
            <Description>
                Somos um grupo movido pelo desejo de fazer a diferença e transformar as cidades em espaços mais humanos e sustentáveis. A agricultura urbana é nossa ferramenta para reconectar pessoas à natureza e enfrentar desafios contemporâneos, como a insegurança alimentar e o desperdício de recursos. Para nós, cultivar é um ato de transformação de espaços, hábitos e comunidades.
            </Description>

            <LinhaAgricultura />

            <ContentSection>
                <TextSection>
                    <SectionTitle>Nossa Missão e Objetivo</SectionTitle>
                    <SectionText>
                        Queremos inspirar e empoderar cidadãos a cultivar alimentos próximos ao consumidor, mostrando que pequenas ações cotidianas podem gerar impactos globais. Alinhamos nossas iniciativas aos ODS 2 - Fome Zero e Agricultura Sustentável e ODS 12 - Consumo e Produção Responsáveis, contribuindo para a construção de uma cidade mais justa, produtiva e sustentável. Além disso, nosso site oferece uma ferramenta exclusiva: uma calculadora de rendimento da horta urbana que ajudará os usuários a planejar seus cultivos e maximizar a produção, mostrando o impacto positivo que cada plantação pode gerar.
                    </SectionText>

                    <SectionTitle>Impacto e Visão do Futuro</SectionTitle>
                    <SectionText>
                        Com o CultivAção, imaginamos um futuro onde cada espaço urbano se torna produtivo - quintais, varandas, telhados e terrenos baldios podem ser transformados em hortas. E isso é só o começo. A expansão do projeto trará:
                    </SectionText>
                    <List>
                        <ListItem>Educação ambiental nas escolas e centros comunitários, formando cidadãos conscientes.</ListItem>
                        <ListItem>Parcerias com governos, ONGs e empresas para integrar a agricultura urbana às políticas públicas e à economia local.</ListItem>
                        <ListItem>Uma rede colaborativa de agricultores urbanos, incentivando trocas de conhecimento e a venda direta de alimentos.</ListItem>
                    </List>

                    <SectionTitle>Necessidade Para os Próximos Passos</SectionTitle>
                    <List>
                        <ListItem><strong>Recursos Financeiros:</strong> Precisamos de financiamento para expandir a plataforma e as hortas.</ListItem>
                        <ListItem><strong>Tempo e Pessoas:</strong> Novos colaboradores e voluntários são essenciais para ampliar o impacto.</ListItem>
                        <ListItem><strong>Parcerias:</strong> Procuramos aliados para viabilizar mais espaços de cultivo e desenvolvimento de materiais educativos.</ListItem>
                    </List>
                </TextSection>

                <ImageContainer>
                    <Image src={LogoCompleta} alt="Imagem sobre nós" />
                </ImageContainer>
            </ContentSection>

            <LinhaAgricultura />

            <SubTitleSection>Parceria Transformadora: CultivAção & Cidades Sem Fome</SubTitleSection>

            <ImageRows>
                    <ImageColumns>
                        <ImagemOng src={LogoOng} alt="Ods 2" />
                    </ImageColumns>                   
            </ImageRows>

            <ThreeColumnsSection>
                <Column>
                    <ColumnTitle>Cidades sem fome</ColumnTitle>
                    <ColumnText>                        
                        Cidades Sem Fome é uma organização de destaque no Brasil que revitaliza espaços urbanos ociosos, transformando-os em hortas comunitárias e produtivas. Com mais de 700 hortas implementadas na cidade de  São Paulo, a ONG já beneficiou milhares de pessoas, gerando impacto em áreas como segurança alimentar, saúde e educação ambiental.
                    </ColumnText>
                    
                </Column>
                <Column>
                    <ColumnTitle>Impactos e Resultados</ColumnTitle>
                    <ColumnText>                       
                        +5 toneladas de alimentos por mês: Em algumas áreas, a ONG consegue produzir grandes quantidades de hortaliças orgânicas.
                        Educação e inclusão: Hortas comunitárias são usadas como ferramenta de ensino em escolas, promovendo o aprendizado sobre sustentabilidade desde cedo.
                        Revitalização de espaços abandonados: Zonas que antes eram criadouros de mosquitos e áreas de risco se transformaram em locais produtivos e seguros​.
                    </ColumnText>
                   
                </Column>
                <Column>
                    <ColumnTitle>Por Que essa Parceria Importa?</ColumnTitle>
                    <ColumnText>
                    Ao colaborar com a Cidades Sem Fome, o CultivAção alinha-se com uma iniciativa que já demonstrou ser eficaz. Essa parceria reforça nosso compromisso com práticas sustentáveis e amplia a capacidade de transformar vidas em comunidades urbanas.
                    </ColumnText>
                </Column>
                <Column>
                    <ColumnTitle>Link</ColumnTitle>
                    <ColumnText>                   
                    Quer saber mais sobre como a Cidades Sem Fome está mudando a realidade de muitas famílias e comunidades urbanas? Acesse o site oficial para entender como você pode ajudar a transformar ainda mais vidas.
                    <br />
                    <Link href="https://cidadessemfome.org/pt_br/" target="_blank" rel="noopener noreferrer">
                    Clique aqui para saber mais!
                    </Link>
                    </ColumnText>
                    <LinhaAgricultura />
                </Column>
            </ThreeColumnsSection>

            <SubTitleSection>Nosso Compromisso com os Objetivos de Desenvolvimento Sustentável (ODS)</SubTitleSection>
            <Description>No CultivAção, acreditamos que a agricultura urbana é uma ferramenta essencial para enfrentar os desafios globais da sustentabilidade. Estamos alinhados com os Objetivos de Desenvolvimento Sustentável (ODS) da ONU, particularmente com o ODS 2 (Fome Zero e Agricultura Sustentável) e o ODS 12 (Consumo e Produção Responsáveis).</Description>
            <ImageRows>
                    <ImageColumns>
                        <Imagem src={Ods2} alt="Ods 2" />
                    </ImageColumns>
                    <ImageColumns>
                        <Imagem src={Ods12} alt="Ods 12" />
                    </ImageColumns>
            </ImageRows>
        </Container>   
    );
}

export default SobreNos;
