
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dados = () => {
    const [dados, setDados] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/dados'); // Altere para a URL do seu backend
                setDados(response.data);
            } catch (error) {
                console.error('Erro ao buscar os dados:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Dados do Backend</h1>
            <pre>{JSON.stringify(dados, null, 2)}</pre>
        </div>
    );
};

export default Dados;
