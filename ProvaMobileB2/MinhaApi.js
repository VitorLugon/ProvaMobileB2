import React, { useState, useEffect } from 'react';

function MinhaApi() {
    const [vet, setVet] = useState([]);
    const [status, setStatus] = useState('Carregando...');

    useEffect(() => {
        const obterDados = async () => {
            try {
                const requests = Array.from({ length: 10 }, (_, index) =>
                    fetch(`https://swapi.dev/api/people/${index + 1}/`).then(response => response.json())
                );

                const resultados = await Promise.all(requests);

                setVet(resultados);
                setStatus('Dados carregados com sucesso!');
            } catch (error) {
                console.error('Erro ao obter dados:', error);
                setStatus('Erro ao carregar dados.');
            }
        };

        obterDados();
    }, []); 
    return (
        <div>
            <h1>{status}</h1>
            <ul>
                {vet.map((people, index) => (
                    <li key={index}>{people.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default MinhaApi;
