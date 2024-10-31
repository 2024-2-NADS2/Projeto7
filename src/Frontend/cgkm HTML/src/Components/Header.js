import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom'; // Importando Link como RouterLink
import CountryIcon1 from '../assets/brasil.png';
import CountryIcon2 from '../assets/eua.png';

const Cabecalho = styled.div`
    height: 70px;
    background-color: #456757;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`;

const Menu = styled.nav`
    display: flex;
    width: 100%;
    align-items: center; /* Alinha verticalmente os itens do menu */
`;

const MenuEsquerda = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.img`
    height: 50px;
    margin-right: 20px;
`;

const MenuCentro = styled.ul`
    font-weight: bold;
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    justify-content: center;
    flex-grow: 1;
    align-items: center; /* Alinha verticalmente os itens no centro */
`;

const StyledLink = styled(RouterLink)` // Renomeando para evitar conflito
    text-decoration: none;
    color: white;
    padding: 10px;
    cursor: pointer;

    &:hover {
        text-decoration: underline; // Sublinha ao passar o mouse
    }
`;

const MenuDireita = styled.div`
    display: flex;
    align-items: center;
`;

const CountryIcon = styled.img`
    width: 25px;
    height: 25px;
    margin-left: 10px;
    border-radius: 5px;
    cursor: pointer;
`;

function Header() {
    return (
        <Cabecalho>
            <Menu>
                <MenuEsquerda>
                    {/* Aqui você pode adicionar o logo se necessário */}
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
                    <CountryIcon src={CountryIcon1} alt="Idioma 1" />
                    <CountryIcon src={CountryIcon2} alt="Idioma 2" />
                </MenuDireita>
            </Menu>
        </Cabecalho>
    );
}

export default Header;
