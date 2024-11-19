import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa'; 

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
    text-align: center; 
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
    gap: 20px; 
`;

const Link = styled(RouterLink)`
font-family: 'Poppins', sans-serif;
    font-weight: 545;
    font-size: 15px; 
    line-height: 1.4;
    letter-spacing: 0.5px;
    text-decoration: none;
    color: white;
    padding: 10px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

const RodapeInferior = styled.div`
    text-align: center;
    margin-top: 0;
    padding: 10px 0;
    background-color: #223f32d5;
`;

function Footer() {
    const handleLinkClick = () => {
        window.scrollTo(0, 0); 
    };
    return (
        <>
            <ConteudoRodape>
                <SecaoConteudo>
                    <H4>Links Rápidos</H4>
                    <Social>
                        <Link to='/' onClick={handleLinkClick}>Home</Link>
                        <Link to='/agricultura' onClick={handleLinkClick}>Agricultura</Link>
                        <Link to='/sobre' onClick={handleLinkClick}>Sobre Nós</Link>
                        <Link to='/fale-conosco' onClick={handleLinkClick}>Fale Conosco</Link>
                    </Social>
                </SecaoConteudo>
                <SecaoConteudo>
                    <H4>Conecte-se Conosco</H4>
                    <Social>
                        <Link href="https://facebook.com" target="_blank" onClick={handleLinkClick}>
                            <FaFacebook size={30} />
                        </Link>
                        <Link href="https://wa.me/seu-numero" target="_blank" onClick={handleLinkClick}>
                            <FaWhatsapp size={30} />
                        </Link>
                        <Link href="https://instagram.com" target="_blank" onClick={handleLinkClick}>
                            <FaInstagram size={30} />
                        </Link>
                    </Social>
                </SecaoConteudo>
            </ConteudoRodape>
            <RodapeInferior>
                <p>&copy; 2024 Grupo CKM. Todos os direitos reservados.</p>
            </RodapeInferior>
        </>
    );
}

export default Footer;
