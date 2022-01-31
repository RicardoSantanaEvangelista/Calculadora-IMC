import { useState } from 'react';
import './app.css';

function App (){

  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  function calcularIMC (){
    alert("Clicou")
  }

  return(
   <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos Calcular seu IMC ?</span>

      <div className="area-input">
          <input 
            type="text"
            placeholder="Peso em [KG] Ex: 75"
            value={peso}
            onChange={ (e) => setPeso(e.target.value) }
          />

          <input 
            type="text"
            placeholder="Altura em [CM] Ex: 170"
            value={altura}
            onChange={ (e) => setAltura(e.target.value) }
          />

          <button onClick={calcularIMC}>
            Calcular
          </button>

          <h2>Seu IMC foi 25, você está abaixo do peso !</h2>
      </div>
   </div>
  );
}

export default App;