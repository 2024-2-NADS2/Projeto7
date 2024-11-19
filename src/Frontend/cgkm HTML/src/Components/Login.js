import { useState } from 'react';
import styled from 'styled-components';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

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

const Message = styled.p`
    color: ${props => (props.type === 'error' ? '#e74c3c' : '#27ae60')};
    font-size: 1rem;
    margin-top: 10px;
`;

const Link = styled(RouterLink)`
    margin-top: 15px;
    cursor: pointer;
    color: #456757;
    font-size: 0.9rem;

    &:hover {
        text-decoration: underline;
        color: #3a5a49;
    }
`;

function Logar({ isLogin, onToggle }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();  // Adicionando o hook para navegação

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
            setIsLoading(false); // Desativa o carregamento após a resposta

            if (response.ok) {
                setMessage(result.message);
                // Redirecionar para a página home após o login bem-sucedido
                navigate('/calculadora');  // Você pode substituir '/home' pelo seu caminho de destino
            } else {
                setMessage(result.error || 'Erro ao tentar fazer login');
            }
        } catch (error) {
            setIsLoading(false); // Desativa o carregamento se houver erro
            setMessage('Usuário ou senha incorretos');
        }
    };

    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <Container>
            <Title>{isLogin ? 'Login' : 'Entre'}</Title>
            <Section>
                <Form onSubmit={handleSubmit}>  {/* Adicionando onSubmit no formulário */}
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
                        {isLoading ? 'Carregando...' : (isLogin ? 'Entrar' : 'Entrar')}
                    </Button>
                </Form>
                {message && <Message type={message.includes('Erro') ? 'error' : 'success'}>{message}</Message>} {/* Exibe a mensagem de erro ou sucesso */}
                <Link to='/cadastro' onClick={handleLinkClick}>Ainda não tem uma conta? Cadastre-se</Link>
            </Section>
        </Container>
    );
}

export default Logar;
