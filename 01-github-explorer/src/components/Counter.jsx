import { useState } from "react";
//Sempre que uma funçção que estamos importanto começar com use, ela é chamada
//Hook -> gancho

//imutabilidade

//usuarios = ['usuario1', 'usuario2', 'usuario3']

//usuarios.push('usuaio4') !!!ERRADO!!!

//novosUsuarios = [...usuarios, 'usuario4'] CORRETO

export function Counter() {
  const [counter, setCounter] = useState(0);
  function incremment() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={incremment}>
        Incremment
      </button>
    </div>
  );
}
