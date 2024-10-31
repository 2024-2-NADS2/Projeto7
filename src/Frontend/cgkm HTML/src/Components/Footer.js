import styled from 'styled-components'

const ConteudoRodape = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 100%;
    margin: 0 auto;
    background: #456757;
    color: white;
    padding: 40px 20px;
    position: relative;
`;

const SecaoConteudo = styled.div`
    flex: 1;
    margin: 20px;
    min-width: 200px;
    position: relative;
    text-align: center; /* Centraliza o conteúdo dentro da seção */
`;

const H4 = styled.h4`
    margin-bottom: 15px;
    border-bottom: 2px solid #223f32d5;
    padding-bottom: 10px;
    transition: color 0.3s;
`;

const Social = styled.div`
    display: flex;
    justify-content: center;
`;

const Link = styled.a`
    margin: 0 10px;
`;

const RodapeInferior = styled.div`
    text-align: center;
    margin-top: 0;
    padding: 10px 0;
    background-color: #223f32d5;
`;

function Footer() {
    return (
        <>
            <ConteudoRodape>
                <SecaoConteudo>
                    <H4>Links Rápidos</H4>
                    <Social>
                        <Link>Agricultura</Link>
                        <Link>Home</Link>
                        <Link>Sobre Nós</Link>
                        <Link>Fale Conosco</Link>
                    </Social>
                </SecaoConteudo>
                <SecaoConteudo>
                    <H4>Conecte-se Conosco</H4>
                    <Social>
                        <Link>Facebook</Link>
                        <Link>Instagram</Link>
                        <Link>Whatsapp</Link>
                    </Social>
                </SecaoConteudo>
            </ConteudoRodape>
            <RodapeInferior>
                <p>&copy; 2024 Grupo CKM. Todos os direitos reservados.</p>
            </RodapeInferior>
        </>
    )
}

export default Footer;
