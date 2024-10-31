import styled from "styled-components";
import Calculadora from "../assets/calculadora.png";
import Figura2Img from "../assets/df501a1b-d809-4e1b-bce6-20d61a63c790.jpeg";
import { Link as RouterLink } from "react-router-dom";

const ContainerPrinc = styled.main`
  display: flex;
  flex-direction: column;
`;

const ContainerCont = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ContentWraper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LinhaConteudo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
    align-items: center;
  }
`;

const Conteudo = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  padding: 20px;
  width: 300px;
  margin-left: 40px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

const Link = styled(RouterLink)`
  background-color: #456757;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  font-size: 14px;
`;

const SaibaMais = styled(RouterLink)`
  background-color: #456757;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
`;

const Retangulo = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  padding: 20px;
  width: 300px;
  margin-left: 20px;
  height: 658px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

const CalculadoraImage = styled.img`
  border-radius: 5px;
`;

const Retangulo2 = styled.div`
  background-color: #bad4c85b;
  border: 1px solid #ccc;
  padding: 20px;
  width: 500px;
  height: 658px;
  margin-right: 40px;
  margin-bottom: 20px;
  margin-left: 40px;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

const LinhaReta = styled.div`
  height: 2px;
  background-color: #456757;
  width: 100%;
  max-width: 500px;
  margin: 20px auto;
`;

const Figura2Styled = styled.img`
  width: 350px;
  height: 320px;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

function MainContainer() {
  return (
    <ContainerPrinc>
      <ContainerCont>
        <ContentWraper>
          <LinhaConteudo>
            <Conteudo>
              <h4>Guia prático de agricultura urbana</h4>
              <p>
                A agricultura urbana é uma tendência crescente devido à expansão
                populacional por todo o globo. Segundo dados da ONU, 55% da
                população mundial estão concentrados nos centros urbanos, e esse
                índice deve chegar a 70% até 2050.
              </p>
              <SaibaMais to="/guia-pratico">Saiba mais</SaibaMais>{" "}
              {/* Altere a rota para onde quiser */}
            </Conteudo>
            <Conteudo>
              <h4>Entenda sobre as fazendas urbanas</h4>
              <p>
                Atualmente a agricultura urbana é praticada por cerca de 800
                milhões de pessoas no mundo, segundo a Organização das Nações
                Unidas para a Alimentação e a Agricultura (FAO). O mercado
                global de fazendas urbanas movimentou US$ 236 bilhões em 2023,
                com os jardins comunitários correspondendo à maior parte deste
                montante.
              </p>
              <Link to="/agricultura">Saiba mais</Link>
            </Conteudo>
          </LinhaConteudo>
          <Retangulo>
            <h4>
              Descubra o verdadeiro potencial da sua horta urbana com a nossa
              Calculadora de Rendimento!
            </h4>
            <CalculadoraImage src={Calculadora} alt="Calculadora" />
            <p>
              Saiba de forma rápida e prática quanto você pode colher, otimizar
              seus recursos e aumentar sua produtividade.
              <br />
              Cultivar alimentos frescos e saudáveis nunca foi tão fácil.
              Transforme seu espaço urbano em uma verdadeira fonte de renda
              sustentável. Experimente agora e colha o seu futuro verde!
            </p>
            <Link to="/cadastro">Clique aqui!</Link>{" "}
            {/* Altere a rota para onde quiser */}
          </Retangulo>
          <Retangulo2>
            <h3>Importância da agricultura urbana</h3>
            <LinhaReta />
            <p>
              A agricultura urbana transforma espaços nas cidades em áreas
              produtivas, oferecendo alimentos frescos e de qualidade. Ela
              contribui para a segurança alimentar, reduz a pegada de carbono e
              melhora o ambiente urbano. Além disso, promove a educação
              ambiental e fortalece a comunidade social.
            </p>
            <br />
            <Figura2Styled src={Figura2Img} alt="Figura 2" />
          </Retangulo2>
        </ContentWraper>
      </ContainerCont>
    </ContainerPrinc>
  );
}

export default MainContainer;
