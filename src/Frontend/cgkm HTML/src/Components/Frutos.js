import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.main`
    padding: 20px;
    background-color: #f9f9f9;
    color: #333;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
    color: #456757;
    margin-bottom: 20px;
`;

const Section = styled.section`
    max-width: 800px;
    margin-bottom: 40px;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Subtitle = styled.h2`
    color: #223f32;
    margin-bottom: 15px;
`;

const Paragraph = styled.p`
    line-height: 1.6;
    margin-bottom: 15px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const Input = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const Textarea = styled.textarea`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
`;

const Button = styled.button`
    padding: 10px;
    background-color: #456757;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #3a5a49;
    }
`;

function Frutos() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [statusMessage, setStatusMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = { name, email, message };
    
        try {
            const response = await fetch('http://localhost:3001/outros', {  // Alterar para /outros
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                setStatusMessage('Mensagem enviada com sucesso!');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                setStatusMessage('Erro ao enviar a mensagem');
            }
        } catch (error) {
            setStatusMessage('Erro ao enviar a mensagem');
        }
    };
    

    return (
        <Container>
            <Title>Não achou o fruto/vegetal que procurava?</Title>
            <Section>
                <Subtitle>Estamos aqui para ajudar!</Subtitle>
                <Paragraph>
                    Escreva abaixo que mandaremos um e-mail para você, com as informações que.
                </Paragraph>
                <Form onSubmit={handleSubmit}>
                    <Input 
                        type="text" 
                        placeholder="Seu Nome" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                    <Input 
                        type="email" 
                        placeholder="Seu E-mail" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <Textarea 
                        rows="5" 
                        placeholder="Sua Mensagem" 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        required 
                    />
                    <Button type="submit">Enviar</Button>
                </Form>
                {statusMessage && <p>{statusMessage}</p>}
            </Section>
        </Container>
    );
}

export default Frutos;
