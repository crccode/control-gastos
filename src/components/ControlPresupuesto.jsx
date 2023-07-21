import React from "react";

const ControlPresupuesto = ({ presupuesto, gastos }) => {

  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)
  // CADA VEZ QUE GASTOS SE MODIFIQUE SE RECALCULA 
  useEffect(() => {
    // ACUMULA UNA GRAN CANTIDAD DE DATOS EN UNA VARIABLE 
    const totalGastado = gastos.reduce( (total, gasto ) => gasto.cantidad + total, 0);
    const totalDisponible = presupuesto - totalGastado;

    // Calcular el porcentaje gastado
    const nuevoPorcentaje = (( ( presupuesto - totalDisponible ) / presupuesto  ) * 100).toFixed(2);

    
    setDisponible(totalDisponible)
    setGastado(totalGastado)
    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje)
    }, 1500);
  }, [gastos])

  // FORMATEAR EL PRESUPUESTO
  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>GRAFICO AQUI</p>
      </div>
      <div className="contenedor-presupuesto">
        <p>
          <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
        </p>
        <p>
          <span>Disponible: </span> {formatearCantidad(disponible)}
        </p>
        <p>
          <span>Gastado: </span> {formatearCantidad(gastado)}
        </p>
      </div>
      
    </div>
  );
};

export default ControlPresupuesto;
