import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import Routes from './src/routes'

// <div> <p> <h1> <header>...
// <div> para tudo: <View> e <Text>
// Não existe semnântica, ou seja, não tem elementos "mais importantes", tipo <h1> e <p>
// Display:flex já é o padrão! Não precisa colocar
// No css do web, onde há um hífen, pega-se a próxima letra e deixa em caixa alta: background-color -> backgroundColor
// Não há estilização por herança, ou seja, se eu colocar estilização no container, o texto não vai receber a mudança. É necessário que haja uma especificação direta para o texto ou qualquer outro elemento que queremos modificar

export default function App() {
   return (
      <Routes />
   );
}

