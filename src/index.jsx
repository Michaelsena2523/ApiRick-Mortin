import { useState } from "react";

function DataApi() {
  const [mostrarName, setMostrarName] = useState("");
  const [mostrarPlaneta, setMostrarPlaneta] = useState("");
  const [imgPersonaje, setImgPersonaje] = useState("");
  const [textInput, setTextInput] = useState("");

  function recibirText(textInput) {
    setTextInput(textInput.target.value);
  }

  function btnClick() {
    infopData(textInput);
  }

  function infopData(infopNumero) {
    fetch(`https://rickandmortyapi.com/api/character/${infopNumero}`)
      .then((resultado) => resultado.json())
      .then(function (consulApi) {
        let nombrePersonaje = consulApi.name;
        let planetaPersonaje = consulApi.species;
        let imgPersonaje = consulApi.image;
        setMostrarName(nombrePersonaje);
        setMostrarPlaneta(planetaPersonaje);
        setImgPersonaje(imgPersonaje);
      });
  }

  return (
    <>
    <div className="contenedor">
            <h2>Api De Rick & Mortin</h2>
            <input
                type="text"
                value={textInput}
                onChange={recibirText}
                placeholder="Ingrese numero"
            />
            <button onClick={btnClick}>Buscar Personaje</button>
            <p>{mostrarName}</p>
            <p>{mostrarPlaneta}</p>
            <img src={imgPersonaje} alt="" />
      </div>
    </>
  );
}

export default DataApi;
