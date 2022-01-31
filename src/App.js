import { useState } from 'react';
import './app.css';

function App (){

  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const [mensagem, setMensagem] = useState("");
  const [efeitos, setEfeitos] = useState("");
  const [imcMenssage, setImcMessage] = useState("");

  function calcularIMC (){

    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if(altura === "" && peso === ""){
      alert("Por Favor, preencha os pesos corretamente !");
    }else if(!alt){
        alert("Por Favor, preencha os pesos corretamente !");
        
    }else if (imc < 16.9){
     setMensagem(`Você está muito abaixo do peso !`);
     setEfeitos(`Efeitos colaterais: Queda de cabelo, infertilidade, ausência menstrual.`);
     setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
     
   }else if(imc >= 17 && imc < 18.4){
    setMensagem(`Você está Abaixo do peso !`);
    setEfeitos(`Efeitos colaterais:Fadiga, stress, ansiedade.`);
    setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
     
   }else if (imc >= 18.5 && imc < 24.9){
    setMensagem(`Você está com peso normal !`);
    setEfeitos(`Efeitos colaterais: Menor risco de doenças cardíacas e vasculares.`);
    setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
    
   }else if(imc >= 25 && imc < 29.9){
    setMensagem(`Você está acima do peso !`);
    setEfeitos(`Efeitos colaterais: Menor risco de doenças cardíacas e vasculares.`);
    setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
     
   }else if(imc >= 30 && imc < 34.9){
    setMensagem(`Você está com Obesidade Grau I !`);
    setEfeitos(`Efeitos colaterais: Apneia do sono, falta de ar.`);
    setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);

   }else if(imc >= 35 && imc < 40){
    setMensagem(`Você está com Obesidade Grau II !`);
    setEfeitos(`Efeitos colaterais: Diabetes, angina, infarto, aterosclerose`);
    setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
   }else if(imc >= 40){
    setMensagem(`Você está com Obesidade Grau III !`);
    setEfeitos(`Efeitos colaterais: Refluxo, dificuldade para se mover, escaras, diabetes, infarto, AVC.`);
    setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
   }
     setPeso("");
     setAltura("");
  }

  return(
   <div className="app">
      <h1>Calculadora de IMC</h1>
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

          <h2>
            {mensagem} <br/>
            {efeitos}  <br/>
            {imcMenssage}
          </h2>
      </div>
   </div>
  );
}

export default App;