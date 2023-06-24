import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Modal from "./components/Modal";
import {generarId} from "./helpers/";

import IconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {
  const [presupuesto,setPresupuesto] = useState(0);
  // DEFINIMOS SI ES VALIDO O NO EL PRESUPUESTO
  const [isValidatePresupuesto, setIsValidatePresupuesto] = useState (false);
  // BOTON NUEVO GASTO
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const handleNuevoGasto = () => {
    setModal(true);
    // ANIMACION DEL MODAL
    setTimeout( () => {
      setAnimarModal(true);
    }, 300);

  }
  // BOTON FORMULARIO GASTO
  const [gastos, setGastos] = useState([]);
   // FUNCION GUARDAR
  const guardarGasto = gasto => {
    gasto.id = generarId();
    setGastos(...gastos, gasto)
    // ANIMACION DE CERRAR VENTANA 
    setAnimarModal(false);
    setTimeout(() => {
        setModal(false);
      }, 300);
  }
  return (
    <div>
      <Header 
        presupuesto = {presupuesto}
        setPresupuesto = {setPresupuesto}

        isValidatePresupuesto = {isValidatePresupuesto}
        setIsValidatePresupuesto = {setIsValidatePresupuesto}

      />
      {/* SI EL PRESUPUESTO ES VALIDO MUESTRAEL BOTON */}
      {isValidatePresupuesto&& (
        <div className="nuevo-gasto">
          <img 
            src={IconoNuevoGasto}
            alt ="icnono nuevo gasto"
            onClick={handleNuevoGasto}
          />
      </div>
      )}
      {modal &&
        <Modal 
          setModal = {setModal}
          animarModal = {animarModal}
          setAnimarModal = {setAnimarModal}

          guardarGasto = {guardarGasto}
        />
      }
     
    </div>
  );
}

export default App;
