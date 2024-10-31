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

const ToggleLink = styled.p`
    margin-top: 15px;
    cursor: pointer;
    color: #456757;
    font-size: 0.9rem;

    &:hover {
        text-decoration: underline;
        color: #3a5a49;
    }
`;

function AuthPage({ isLogin, onToggle }) {
    return (
        <Container>
            <Title>{isLogin ? 'Login' : 'Cadastro'}</Title>
            <Section>
                <Form>
                    {!isLogin && (
                        <Input type="text" placeholder="Nome" required />
                    )}
                    <Input type="email" placeholder="E-mail" required />
                    <Input type="password" placeholder="Senha" required />
                    <Button type="submit">{isLogin ? 'Entrar' : 'Cadastrar'}</Button>
                </Form>
                <ToggleLink onClick={onToggle}>
                    {isLogin ? 'Ainda não tem uma conta? Cadastre-se' : 'Já tem uma conta? Faça login'}
                </ToggleLink>
            </Section>
        </Container>
    );
}

export default AuthPage;
