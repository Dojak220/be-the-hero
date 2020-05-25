import React from 'react';
import './global.css';
import Routes from './routes';

function App() {
  return (
    <Routes />
  );
}

export default App;





/*Como estava antes, para entender alguns conceitos


import React, {useState} from 'react';
import Header from './Header';

// JSX, que significa que temos elementos de HTML dentro de uma estrutura JS

function App() {
  const [counter, setCounter] = useState(0); //Não pode ser uma variável comum. Deve ter essa forma.

  // Array [valor, função de atualização do valor]

  function increment(){
      setCounter(counter + 1) //count++;
  }
  
  return (
    <div>
      <Header>Contador = {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}


export default App;

*/
