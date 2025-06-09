import React from 'react';

const Bemvindo = (props) => {
    return (
        <>
            <h2>Bem vinso {props.nome} </h2>
            <h3>Tenho {props.anos} anos </h3>
        </>
    )
}

function App() {
    return (
        <>
            Ue aqui tbm escreve??
            <Bemvindo nome="Chago" anos="todos" />
            <Bemvindo nome="Tchyagull" anos="todos" />
            <h1>Oia lá mundo</h1>
        </>
    )
}
export default App;