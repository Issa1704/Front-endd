import React from 'react';
import './PostIt.css';



function PostIt({ index, titulo, descripcion, importante, eliminarNota }) {
  return (
    <div className={`post-it ${importante ? 'post-it-importante' : ''}`}>
      <button
        type="button"
        className="btn btn-sm btn-danger btn-eliminar"
        onClick={() => eliminarNota(index)}
      >
        X
      </button>
      {titulo && <h3>{titulo}</h3>}
      <p>{descripcion}</p>
    </div>
  );
}



export default PostIt;

