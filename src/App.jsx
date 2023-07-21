import { useState } from "react";

import Header from "./components/Header";
import Modal from "./components/Modal";
import ListadoGastos from "./components/ListadoGastos";
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
    setGastos([...gastos, gasto])
    // ANIMACION DE CERRAR VENTANA 
    setAnimarModal(false);
    setTimeout(() => {
        setModal(false);
      }, 300);
  }
  return (
    // CADA VEZ QUE SE A;ADE UN GASTO SE SOBREPONE ESTE ESTILO TOMO TODO EL ALTO DE LA PANTALLA 
    <div className={modal ? 'fijar' : '' }>
      <Header 
        gastos = {gastos}

        presupuesto = {presupuesto}
        setPresupuesto = {setPresupuesto}

        isValidatePresupuesto = {isValidatePresupuesto}
        setIsValidatePresupuesto = {setIsValidatePresupuesto}

      />
      {/* SI EL PRESUPUESTO ES VALIDO MUESTRAEL BOTON */}
      {isValidatePresupuesto&& (
        <>
          <main>
            <ListadoGastos
              gastos ={gastos}
            />
          </main>
          {/* BOTON NUEVO GASTO  */}
          <div className="nuevo-gasto">
            <img 
              src={IconoNuevoGasto}
              alt ="icnono nuevo gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      
      )}
        {/* SI PRESIONAMOS EL BOTON ENTONCES MOSTRAMOS EL COMPONENTE MODAL  */}
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
