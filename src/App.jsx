import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [presupuesto,setPresupuesto] = useState(0);
  // DEFINIMOS SI ES VALIDO O NO EL PRESUPUESTO
  const [isValidatePresupuesto, setIsValidatePresupuesto] = useState (false);
  return (
    <div>
      <Header 
        presupuesto = {presupuesto}
        setPresupuesto = {setPresupuesto}

        isValidatePresupuesto = {isValidatePresupuesto}
        setIsValidatePresupuesto = {setIsValidatePresupuesto}

      />
    </div>
  );
}

export default App;
