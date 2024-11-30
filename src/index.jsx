import { useState } from "react";

function DataApi() {
  const [mostrarName, setMostrarName] = useState("");
  const [mostrarPlaneta, setMostrarPlaneta] = useState("");
  const [imgPersonaje, setImgPersonaje] = useState("");
  const [textInput, setTextInput] = useState("");

  function alerErro() {
    Swal.fire({
      icon: "error",
      title: "Oops... <br> <br> Este rango de numero no exites <br> <br> El rango de numero llega hasta 826",
    });
  }

  function erroInserta() {
    Swal.fire({
      icon: "error",
      title: "Oops... <br> <br> Inserte un numero",
    });
  }

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
        if (textInput >= 827) {
          alerErro()
        } else if (textInput === "") {
          erroInserta()
        } else {

          let nombrePersonaje = consulApi.name;
          let planetaPersonaje = consulApi.species;
          let imgPersonaje = consulApi.image;
          setMostrarName(nombrePersonaje);
          setMostrarPlaneta(planetaPersonaje);
          setImgPersonaje(imgPersonaje);
        }
      });
  }

  return (
    <>
      <div className="contenedor">
        <img src="" alt="" className="img2" />
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
        <img src={imgPersonaje} alt="" className="img1" />
      </div>
    </>
  );
}

export default DataApi;
