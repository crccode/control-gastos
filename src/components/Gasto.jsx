import React from "react";
import { formatearFecha } from "../helpers";

// swipe
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"

// ICONOS DE LA CATEGORIA 
import IconoAhorro from '../img/icono_ahorro.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoGastos from '../img/icono_gastos.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'

// CREAMOS UN DICCIONARIO CON TODOS LOS GASTOS
const diccionarioIconos = {
  ahorro : IconoAhorro,
  comida : IconoComida,
  casa : IconoCasa,
  gastos : IconoGastos,
  ocio : IconoOcio,
  salud : IconoSalud,
  suscripciones : IconoSuscripciones
}


const Gasto = ({ key, gasto }) => {
  const { categoria, nombre, cantidad, id, fecha} = gasto;

  // FUNCIONES SWIPE
  const leadingActions = () => (
      <LeadingActions>
          <SwipeAction onClick={() => console.log('ed')}>
              Editar
          </SwipeAction>
      </LeadingActions>
  )

  const trailingActions = () => (
      <TrailingActions>
          <SwipeAction 
              onClick={() =>  console.log('ed')}
              destructive={true}
          >
              Eliminar
          </SwipeAction>
      </TrailingActions>
  )
  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
      <div className="gasto sombra">
        <div className="contenido-gasto">
          {/* COLOCAMOS LOS ICONOS  */}
          <img 
            src={diccionarioIconos[categoria]}
            alt="Icono Gasto"
          />
          {/* INFORMACION EXTRA  */}
          <div className="descripcion-gasto">
            <p className="categoria">{categoria}</p>
            <p className="nombre-gasto">{nombre}</p>
            <p className="fecha-gasto">
              Agregado el: {''}
              <span>{formatearFecha(fecha)}</span>
            </p>
          </div>     
        </div>
        <p className="cantidad-gasto">{cantidad}</p>
      </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Gasto;
