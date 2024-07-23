import React, { useState } from 'react';

function Form({ agregarNota }) {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [importante, setImportante] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar si el título contiene números
    if (/\d/.test(titulo)) {
      alert('El título no debe contener números.');
      return;
    }

    if (descripcion.trim() !== '') {
      agregarNota(titulo, descripcion, importante);
      setTitulo('');
      setDescripcion('');
      setImportante(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <div style={inputContainerStyle}>
        <input
          type="text"
          placeholder="Título (opcional)"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          style={inputStyle}
        />
      </div>
      <div style={textareaContainerStyle}>
        <textarea
          placeholder="Descripción (obligatorio)"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
          style={textareaStyle}
        ></textarea>
      </div>
      <div style={checkboxContainerStyle}>
        <input
          type="checkbox"
          id="importanteCheckbox"
          checked={importante}
          onChange={(e) => setImportante(e.target.checked)}
          style={checkboxStyle}
        />
        <label htmlFor="importanteCheckbox" style={labelStyle}>
          Importante
        </label>
      </div>
      <button type="submit" style={buttonStyle}>
        Agregar Nota
      </button>
    </form>
  );
}

const formStyle = {
  maxWidth: '600px',
  margin: '0 auto',
  padding: '8px',
  backgroundColor: '#EEE8AA',
  border: '1px solid #ced4da',
  borderRadius: '5px',
  boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '10px',
  flexWrap: 'wrap',
};

const inputContainerStyle = {
  flex: '1 1 25%',
  minWidth: '150px',
  marginRight: '10px',
};

const textareaContainerStyle = {
  flex: '1 1 50%',
  minWidth: '200px',
  marginRight: '10px',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  borderRadius: '3px',
  border: '1px solid #ced4da',
};

const textareaStyle = {
  width: '100%',
  padding: '8px',
  borderRadius: '3px',
  border: '1px solid #ced4da',
  height: '40px',
};

const checkboxContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  flex: '1 1 25%',
  minWidth: '150px',
};

const checkboxStyle = {
  marginRight: '8px',
};

const labelStyle = {
  margin: 0,
};

const buttonStyle = {
  backgroundColor: '#007bff',
  borderColor: '#007bff',
  borderRadius: '3px',
  padding: '6px 12px',
  color: '#fff',
  cursor: 'pointer',
  display: 'block',
  height: 'fit-content',
};

export default Form;
