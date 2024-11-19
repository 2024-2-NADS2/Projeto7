import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import LogoProjeto from '../assets/logo.png';


const Cabecalho = styled.div`
    height: 70px;
    background-color: #456757;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
`;

const Menu = styled.nav`
    display: flex;
    width: 100%;
    align-items: center;
`;

const MenuEsquerda = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px; 
`;

const Logo = styled.img`
    height: 70px;
    width: 100px; 
   
`;

const MenuCentro = styled.ul`
    font-weight: bold;
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    justify-content: center;
    flex-grow: 1;
    align-items: center;
`;

const StyledLink = styled(RouterLink)`
    text-decoration: none;
    color: white;
    padding: 10px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

const MenuDireita = styled.div`
  
    font-weight: bold;
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    justify-content: center;   
    align-items: center;
`;


function Header() {
    return (
        <Cabecalho>
            <Menu>
                <MenuEsquerda>
                    <Logo src={LogoProjeto} alt="Logo" />
                </MenuEsquerda>
                <MenuCentro>
                    <li>
                        <StyledLink to="/">Home</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/agricultura">Agricultura</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/sobre">Sobre Nós</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/fale-conosco">Fale Conosco</StyledLink>
                    </li>
                </MenuCentro>
                <MenuDireita>
                    <StyledLink to="/login">Entre/Cadastre-se</StyledLink>
                </MenuDireita>
            </Menu>
        </Cabecalho>
    );
}

export default Header;
