import React from 'react'

export interface TipoPizza {
  nombre?: string,
  precio?: number
}

type Pedido = {
    cliente: string,
    direccion: string,
    telefono: string,
    tipoPizza: TipoPizza
    numPizzas?: number,
    formaPago: string
}

const calTotal = (tipoP: TipoPizza, numP: number, methPago: string): number => {
  let total = tipoP.precio! * numP;
  if (methPago == 'Tarjeta de credito') {
    total = total + (total * 0.10);
  } else {
    total = total + (total * 0.20)
  }
  return total;
}

const Ticket = ({cliente, direccion, telefono, tipoPizza, numPizzas, formaPago}: Pedido) => {
  return (
    <div className='row p-4'>
        <div className="col">
            <p>Cliente:</p>
            <p>Direccion:</p>
            <p>Telefono:</p>
            <p>Pizza:</p>
            <p>Numero de pizzas:</p>
            <p>Forma de pago:</p>
            <p>Total a pagar:</p>
        </div>
        <div className="col">
            <p id='1'>{cliente}</p>
            <p id='2'>{direccion}</p>
            <p id='3'>{telefono}</p>
            <p id='4'>{tipoPizza.nombre}</p>
            <p id='5'>{numPizzas}</p>
            <p id='6'>{formaPago}</p>
            <p id='7'>{tipoPizza.nombre == undefined ? '' : calTotal(tipoPizza, numPizzas!, formaPago)}</p>
        </div>
    </div>
  )
}

export default Ticket