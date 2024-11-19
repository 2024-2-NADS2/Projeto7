import styled from 'styled-components';


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

const LinhaAgricultura = styled.div`
    height: 2px;
    background-color: #456757;
    width: 100%;
`;

const Subtitle = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 1.5;
    letter-spacing: 1px;
`;

const Section = styled.section`
    background-color: rgba(255, 255, 255, 0.9);
    width: 100%;
    max-width: 1200px;
    margin: 30px 0;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    text-align: left;
`;

const SectionTitle = styled.h2`
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
    color: #456757;
    padding-left: 20px;
`;

const TextHighlight = styled.span`
    font-weight: bold;
    color: #456757;
`;

function Guia() {
    
    return (
        <Container>
            <Header>
                <Title>Guia Prático de Agricultura Urbana</Title>
                <Subtitle>Transformando espaços urbanos em áreas verdes e produtivas</Subtitle>
            </Header>

            <Section>
                <SectionTitle>O Que é a Agricultura Urbana?</SectionTitle>
                <SectionText>
                    A <TextHighlight>agricultura urbana</TextHighlight> é a prática de cultivar alimentos dentro das cidades, seja em pequenos jardins de varandas, hortas em telhados, ou até mesmo em áreas públicas ou privadas transformadas em espaços produtivos. Com o aumento da urbanização e o desafio de suprir a demanda por alimentos frescos e sustentáveis, a agricultura urbana surge como uma solução criativa, capaz de combater a insegurança alimentar, reduzir a pegada de carbono e promover um ambiente mais saudável.
                </SectionText>
                <SectionText>
                    A vantagem da agricultura urbana está no seu alcance – não é necessário possuir grandes espaços ou áreas rurais para começar. Com o uso de <TextHighlight>tecnologias inovadoras</TextHighlight>, como jardins verticais e hidroponia, qualquer pessoa pode transformar um pequeno espaço, como uma varanda ou até mesmo um escritório, em um ponto de cultivo de alimentos frescos.
                </SectionText>              
            </Section>

            <LinhaAgricultura />

            <Section>
                <SectionTitle>Benefícios da Agricultura Urbana</SectionTitle>
                <SectionText>
                    Os benefícios da agricultura urbana vão muito além da produção de alimentos frescos. Ela tem o poder de transformar comunidades, melhorar a saúde pública, e até mesmo colaborar para a regeneração urbana. Vamos explorar alguns dos principais impactos dessa prática:
                </SectionText>
                <List>
                    <li><strong>Segurança Alimentar:</strong> A agricultura urbana pode aumentar o acesso a alimentos frescos e nutritivos em áreas urbanas, especialmente em bairros onde o acesso a mercados de alimentos saudáveis é limitado.</li>
                    <li><strong>Sustentabilidade Ambiental:</strong> Ao cultivar alimentos localmente, reduz-se a emissão de carbono associada ao transporte e armazenamento de alimentos. Além disso, práticas como compostagem ajudam a diminuir a quantidade de resíduos orgânicos enviados aos aterros sanitários.</li>
                    <li><strong>Saúde e Bem-estar:</strong> O cultivo de alimentos reduz o uso de pesticidas e produtos químicos, proporcionando alimentos mais saudáveis. Além disso, a jardinagem tem sido associada à redução do estresse e melhora da saúde mental.</li>
                    <li><strong>Fortalecimento da Comunidade:</strong> Hortas comunitárias criam espaços de convivência onde os vizinhos se conectam e colaboram, fortalecendo os laços sociais e promovendo o espírito de coletividade.</li>
                </List>
            </Section>

            <LinhaAgricultura />

            <Section>
                <SectionTitle>Técnicas Populares para Agricultura Urbana</SectionTitle>
                <SectionText>
                    Se você está pensando em começar a cultivar em sua casa ou no seu bairro, existem várias técnicas de cultivo adaptadas ao ambiente urbano. Essas técnicas são perfeitas para quem tem pouco espaço, mas deseja produzir alimentos de forma eficiente e sustentável.
                </SectionText>
                <List>
                    <li><strong>Horta Vertical:</strong> Utiliza estruturas verticais, como prateleiras ou paredes, para cultivar plantas em camadas, maximizando o uso de pequenos espaços.</li>
                    <li><strong>Hidroponia:</strong> Técnica que utiliza água ao invés de solo para cultivar plantas. Perfeita para quem tem pouco espaço ou quer cultivar dentro de casa, a hidroponia permite um crescimento rápido e eficiente.</li>
                    <li><strong>Compostagem:</strong> Transformar resíduos orgânicos em adubo natural é uma excelente forma de enriquecer o solo e fechar o ciclo de produção dos alimentos. Além disso, a compostagem ajuda a reduzir a quantidade de lixo enviado aos aterros.</li>
                    <li><strong>Jardins em Contêineres:</strong> Usar potes, caixas e recipientes para cultivar plantas em pequenos espaços, como varandas ou janelas. Essa técnica é versátil e pode ser aplicada em praticamente qualquer ambiente urbano.</li>
                </List>
              
            </Section>

            <LinhaAgricultura />

            <Section>
                <SectionTitle>Ferramentas e Materiais Essenciais</SectionTitle>
                <SectionText>
                    Para garantir que sua jornada de cultivo urbano seja bem-sucedida, é fundamental ter os materiais e ferramentas adequadas. Aqui estão alguns dos itens essenciais para começar:
                </SectionText>
                <List>
                    <li><strong>Vasos e Contêineres:</strong> Escolher os recipientes certos é fundamental para garantir que as plantas cresçam saudáveis. Certifique-se de que os vasos tenham boa drenagem.</li>
                    <li><strong>Solo e Substrato:</strong> A escolha do substrato adequado depende do tipo de planta que você deseja cultivar. Certifique-se de usar solo bem drenado e rico em nutrientes.</li>
                    <li><strong>Sementes ou Mudas:</strong> Escolher sementes de qualidade ou mudas saudáveis garante uma colheita produtiva e sem doenças.</li>
                    <li><strong>Ferramentas de Jardinagem:</strong> Ter ferramentas adequadas, como pás, tesouras de poda, e regadores, facilitará o trabalho e aumentará sua eficiência no cultivo.</li>
                    <li><strong>Sistemas de Irrigação:</strong> Um bom sistema de irrigação, como gotejamento, pode economizar água e garantir que as plantas recebam a quantidade certa de hidratação.</li>
                </List>
            </Section>

            <LinhaAgricultura />

            <Section>
                <SectionTitle>Dicas para Iniciantes</SectionTitle>
                <SectionText>
                    Se você está começando sua jornada na agricultura urbana, é importante saber por onde começar. Uma boa dica é começar pequeno e ir crescendo aos poucos. Não se preocupe se você não tem experiência – qualquer um pode começar, basta entender as necessidades básicas das plantas e ter paciência. Primeiramente, escolha um local que receba ao menos 4-6 horas de luz solar direta por dia. Isso é essencial para que suas plantas cresçam de forma saudável.
                </SectionText>
                <SectionText>
                    Ao escolher as plantas, opte por aquelas mais fáceis de cultivar, como ervas e alfaces. Elas são ótimas para quem está começando. Também é importante não exagerar na rega – muitas plantas sofrem com o excesso de água. Verifique o tipo de solo e ajuste conforme necessário. Outro ponto importante é ficar atento às mudanças sazonais e como elas afetam suas plantas. O cultivo urbano é uma ótima maneira de aprender, então, se algo não der certo, não desanime – ajuste suas práticas e continue experimentando. Com o tempo, você vai adquirir experiência e entender o que funciona melhor para o seu espaço e suas plantas.
                </SectionText>
            </Section>
        </Container>
    );
}

export default Guia;
