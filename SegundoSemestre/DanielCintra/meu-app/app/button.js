'use client'

import "./globals.css";

export default function Button({ ativo }) {
    const estilo = {border: '5px solid red', padding: '10px', margin: '5px'};
  return (
    <>
      <button style={estilo} className={ativo ? "btn active" : "btn inactive"} onClick={onClick}>
        Clique Aqui!
      </button>
    </>
  );
}
