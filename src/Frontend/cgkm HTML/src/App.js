
import React, { useEffect, useState } from 'react';
import AppRoutes from './routes';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('https://v3hll9-5002.csb.app/') // Use o URL do seu servidor
      .then((response) => response.text())
      .then((data) => setData(data))
      .catch((error) => console.error('Erro:', error));
  }, []);

  return (
    <AppRoutes/>
  );
}

export default App;










