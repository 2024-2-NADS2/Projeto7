import styled from 'styled-components';

const Container = styled.main`
    padding: 20px;
    background-color: #f9f9f9;
    color: #333;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
    color: #456757;
    margin-bottom: 20px;
`;

const Section = styled.section`
    max-width: 800px;
    margin-bottom: 40px;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Subtitle = styled.h2`
    color: #223f32;
    margin-bottom: 15px;
`;

const Paragraph = styled.p`
    line-height: 1.6;
    margin-bottom: 15px;
`;

const List = styled.ul`
    margin-left: 20px;
    margin-bottom: 15px;
`;

function Guia() {
    return (
        <Container>
            <Title>Guia Prático de Agricultura Urbana</Title>
            <Section>
                <Subtitle>1. Planejamento da Horta</Subtitle>
                <Paragraph>
                    Antes de começar, é essencial planejar sua horta. Escolha um local adequado e avalie as condições de luz solar.
                </Paragraph>
                <Subtitle>1.1 Escolha do Local</Subtitle>
                <List>
                    <li>Varandas e Sacadas: Utilize vasos ou jardineiras.</li>
                    <li>Jardins Comunitários: Participe de iniciativas locais.</li>
                    <li>Telhados: Instale um sistema de cultivo adequado.</li>
                </List>
                <Subtitle>1.2 Avaliação da Luz Solar</Subtitle>
                <Paragraph>
                    A maioria das plantas precisa de, pelo menos, 6 horas de sol por dia. Verifique a sombra de edifícios e árvores.
                </Paragraph>
            </Section>
            <Section>
                <Subtitle>2. Escolha das Plantas</Subtitle>
                <Paragraph>
                    Escolha as plantas que deseja cultivar com base no espaço disponível e nas condições climáticas.
                </Paragraph>
                <Subtitle>2.1 Tipos de Cultivos</Subtitle>
                <List>
                    <li>Verduras de Folhas: Alface, espinafre e rúcula.</li>
                    <li>Ervas Aromáticas: Manjericão, hortelã e coentro.</li>
                    <li>Vegetais: Tomates, pimentões e cenouras.</li>
                    <li>Frutas: Morangos e framboesas em vasos.</li>
                </List>
                <Subtitle>2.2 Considerações</Subtitle>
                <Paragraph>
                    Verifique a época de plantio para cada espécie e escolha aquelas que se adaptam ao clima da sua região.
                </Paragraph>
            </Section>
            <Section>
                <Subtitle>3. Preparação do Solo</Subtitle>
                <Paragraph>
                    O solo é fundamental para o sucesso da sua horta. Prepare o solo adequadamente.
                </Paragraph>
                <Subtitle>3.1 Tipos de Solo</Subtitle>
                <List>
                    <li>Solo de Jardim: Rico em nutrientes, ideal para a maioria das plantas.</li>
                    <li>Mistura de Vasos: Para vasos, use uma mistura de solo com perlita ou vermiculita.</li>
                </List>
                <Subtitle>3.2 Teste do Solo</Subtitle>
                <Paragraph>
                    Faça um teste de pH e nutrientes do solo para entender melhor o que é necessário para suas plantas.
                </Paragraph>
            </Section>
            <Section>
                <Subtitle>4. Cuidados com as Plantas</Subtitle>
                <Paragraph>
                    Mantenha suas plantas saudáveis com cuidados regulares.
                </Paragraph>
                <List>
                    <li>Rega: Regue de acordo com a necessidade de cada planta.</li>
                    <li>Adubação: Utilize adubos orgânicos para fornecer nutrientes.</li>
                    <li>Controle de Pragas: Monitore suas plantas e use métodos naturais de controle sempre que possível.</li>
                </List>
            </Section>
            <Section>
                <Subtitle>5. Colheita e Aproveitamento</Subtitle>
                <Paragraph>
                    Quando suas plantas estiverem prontas, é hora de colher! Aproveite os frutos do seu trabalho.
                </Paragraph>
                <List>
                    <li>Colha no momento certo para garantir o melhor sabor.</li>
                    <li>Armazene os alimentos corretamente para prolongar sua durabilidade.</li>
                </List>
            </Section>
        </Container>
    );
}

export default Guia;
