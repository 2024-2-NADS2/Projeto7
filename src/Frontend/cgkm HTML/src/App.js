import React, { useState } from 'react';
import AppRoutes from './routes'; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // Estado para controlar se o usuário está logado

  return (
    <div>
      <AppRoutes isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}

export default App;
