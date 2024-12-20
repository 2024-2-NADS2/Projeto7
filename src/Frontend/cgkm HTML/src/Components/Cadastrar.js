import { useState } from 'react';
import styled from 'styled-components';

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
`;

function AuthPage({ isLogin, onToggle }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Dados para cadastro ou login
        const data = { email, password };

        if (!isLogin) {
            data.name = name; // Adiciona nome se for cadastro
        }

        try {
            const response = await fetch(isLogin ? 'http://localhost:3001/login' : 'http://localhost:3001/cadastro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            if (response.ok) {
                setMessage(result.message);
                // Aqui você pode redirecionar o usuário para o login ou a página principal
            } else {
                setMessage(result.error || 'Erro ao tentar realizar a operação');
            }
        } catch (error) {
            setMessage('Erro na comunicação com o servidor');
        }
    };

    return (
        <Container>
            <Title>{isLogin ? 'Login' : 'Cadastro'}</Title>
            <Section>
                <Form onSubmit={handleSubmit}>
                    {!isLogin && (
                        <Input 
                            type="text" 
                            placeholder="Nome" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                    )}
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
                    <Button type="submit">{isLogin ? 'Entrar' : 'Cadastrar'}</Button>
                </Form>
                {message && <p>{message}</p>}
            </Section>
        </Container>
    );
}

export default AuthPage;
