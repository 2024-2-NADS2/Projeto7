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

function Fale() {
    return (
        <Container>
            <Title>Fale Conosco</Title>
            <Section>
                <Subtitle>Estamos aqui para ajudar!</Subtitle>
                <Paragraph>
                    Se você tiver alguma dúvida, sugestão ou feedback, entre em contato conosco preenchendo o formulário abaixo.
                </Paragraph>
                <Form>
                    <Input type="text" placeholder="Seu Nome" required />
                    <Input type="email" placeholder="Seu E-mail" required />
                    <Textarea rows="5" placeholder="Sua Mensagem" required />
                    <Button type="submit">Enviar</Button>
                </Form>
            </Section>
        </Container>
    );
}

export default Fale;
