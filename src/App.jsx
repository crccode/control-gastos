import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import Modal from "./components/Modal";
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
        />
      }
     
    </div>
  );
}

export default App;
