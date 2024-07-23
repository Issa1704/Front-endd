import React, { useState, useEffect } from 'react';
import './Style/App.css';
import Form from './componentes/Form';
import PostIt from './componentes/PostIt';




function App() {
  const [notas, setNotas] = useState([]);

  useEffect(() => {
    const notasGuardadas = JSON.parse(localStorage.getItem('notas'));
    if (notasGuardadas) {
      setNotas(notasGuardadas);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notas', JSON.stringify(notas));
  }, [notas]);

  const agregarNota = (titulo, descripcion, importante) => {
    const nuevaNota = { titulo, descripcion, importante };
    setNotas([...notas, nuevaNota]);
  };

  const eliminarNota = (index) => {
    const nuevasNotas = [...notas];
    nuevasNotas.splice(index, 1);
    setNotas(nuevasNotas);
  };

  return (
    <div className="App">
      <h1>Post-It Simulator !</h1>
      <Form agregarNota={agregarNota} />
      <div className="notes-container">
        {notas.map((nota, index) => (
          <PostIt
            key={index}
            index={index}
            titulo={nota.titulo}
            descripcion={nota.descripcion}
            importante={nota.importante}
            eliminarNota={eliminarNota}
          />
        ))}
      </div>
    </div>
  );
}


export default App;
