import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';  // Corrigido para importar o 'Link' corretamente
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Container = styled.main`
    padding: 20px;
    background-color: #f0f4f8;
    color: #333;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
`;

const Title = styled.h1`
    color: #456757;
    margin-bottom: 20px;
    font-size: 2.5rem;
    text-align: center;
`;

const Section = styled.section`
    max-width: 400px;
    margin-bottom: 40px;
    padding: 30px;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Input = styled.input`
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;

    &:focus {
        border-color: #456757;
        outline: none;
        box-shadow: 0 0 5px rgba(69, 103, 87, 0.5);
    }
`;

const Button = styled.button`
    padding: 15px;
    background-color: #456757;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #3a5a49;
    }

    &:disabled {
        background-color: #b0c2b0;
        cursor: not-allowed;
    }
`;

const StyledLink = styled(Link)`  // Agora 'StyledLink' é corretamente definido com 'Link'
    text-decoration: none;
    color: #456757;  // Definindo a cor do link
    padding: 10px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { email, password };

    setIsLoading(true); // Ativa o carregamento

    try {
      const response = await fetch('http://localhost:3001/login', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setIsLoading(false);

      if (response.ok) {
        setIsLoggedIn(true); // Atualiza o estado de login
        navigate('/calculadora'); // Redireciona para a página protegida após o login
      } else {
        setMessage(result.error || 'Erro ao tentar fazer login');
      }
    } catch (error) {
      setIsLoading(false);
      setMessage('Usuário ou senha incorretos');
    }
  };

  return (
    <>
      <Header/>
      <Container>
        <Title>Login</Title>
        <Section>
          <Form onSubmit={handleSubmit}>
            <Input 
              type="email" 
              placeholder="E-mail" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
            <Input 
              type="password" 
              placeholder="Senha" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Carregando...' : 'Entrar'}
            </Button>
            <StyledLink to="/cadastro">Não possui conta? Cadastre-se</StyledLink>
          </Form>
          {message && <p>{message}</p>}
        </Section>
      </Container>
      <Footer/>
    </>
  );
}

export default Login;
