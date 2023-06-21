import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'

const Header = ({presupuesto, setPresupuesto, isValidatePresupuesto,setIsValidatePresupuesto}) => {
  return (
    <header>
      <h1>Planificador de gastos</h1>
      { isValidatePresupuesto ? 
        <p>VALIDO</p> :
        <NuevoPresupuesto
          presupuesto = {presupuesto}
          setPresupuesto = {setPresupuesto}

          setIsValidatePresupuesto = {setIsValidatePresupuesto}
        />
      }
      
    </header>
  )
}

export default Header
