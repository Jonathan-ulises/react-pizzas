import React from 'react'
import Ticket from './Ticket'
import { useState } from 'react';
import { TipoPizza } from './Ticket';

const FormPizza = () => {

    const typoPizza: TipoPizza = {}

    const [tipoP, setTIpoP] = useState(typoPizza)
    const [numP, setNUmP] = useState()
    const [formP, setFormP] = useState('')
    const [nomCl, setNomCl] = useState('')
    const [tel, setTel] = useState('')
    const [direcc, setDirecc] = useState('')


    const sendPizza = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        const obj = {
            "lstTipoP": ev.currentTarget['lstTipoP'].value,
            "txtNumP": ev.currentTarget['txtNumP'].value,
            "rbFormaP": ev.currentTarget['rbFormaP'].value,
            "txtNombreCl": ev.currentTarget['txtNOmbreCl'].value,
            "txtTel": ev.currentTarget['txtTel'].value,
            "txtDireccion": ev.currentTarget['txtDireccion'].value,
        }

        let precio = obj.lstTipoP == 'Hawayana' ? 100 : 
                    obj.lstTipoP == 'Especial' ? 120 : 150
        
        setTIpoP({
            nombre: obj.lstTipoP,
            precio: precio
        })
        setNUmP(obj.txtNumP)
        setFormP(obj.rbFormaP)
        setNomCl(obj.txtNombreCl)
        setTel(obj.txtTel)
        setDirecc(obj.txtDireccion)
    }

    return (
        <main className='row justify-content-between mt-5'>
            <section className='col-6 shadow rounded bg-white'>
                <form className='row g-3 p-4' onSubmit={ev => sendPizza(ev)}>
                    <div className="col-md-4">
                        <label htmlFor='lstTipoP' className="form-label">Elige tu pizza</label>
                        <select className="form-select shadow-sm" aria-label="Default select example" id="lstTipoP">
                            <option value="Hawayana">Hawayana $100</option>
                            <option value="Especial">Especial $120</option>
                            <option value="Vegetariana">Vegetariana $150</option>
                        </select>
                    </div>

                    <div className="col-md-4">
                        <label htmlFor='txtNumP' className="form-label">Numero de Pizzas</label>
                        <input type="number" className="form-control shadow-sm" id="txtNumP" />
                    </div>

                    <div className="col-md-4">
                        <label htmlFor='inputEmail4' className="form-label">Formas de pago</label>
                        <div id='inputEmail4'>
                            <div className="form-check">
                                <input className="form-check-input shadow-sm" type="radio" value='Tarjeta de credito' name="rbFormaP" id="flexRadioDefault1" defaultChecked />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Tarjeta de credito
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input shadow-sm" type="radio" value='Paypal' name="rbFormaP" id="flexRadioDefault2" />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Paypal
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor='txtNOmbreCl' className="form-label">Nombre</label>
                        <input type="text" className="form-control shadow-sm" id="txtNOmbreCl" />
                    </div>

                    <div className="col-md-4">
                        <label htmlFor='txtTel' className="form-label">Telefono</label>
                        <input type="number" className="form-control shadow-sm" id="txtTel" />
                    </div>

                    <div className="col-md-4">
                        <label htmlFor='txtDireccion' className="form-label">Direccion</label>
                        <input type="text" className="form-control shadow-sm" id="txtDireccion" />
                    </div>

                    <div className="d-grid">
                        <button type='submit' className="btn btn-success shadow-sm">Enviar pedido</button>
                    </div>
                </form>
            </section>
            <aside className='col-5 shadow rounded bg-white'>
                <Ticket
                    cliente={nomCl}
                    direccion={direcc}
                    telefono={tel}
                    tipoPizza={tipoP}
                    numPizzas={numP}
                    formaPago={formP} />
            </aside>
        </main>
    )
}

export default FormPizza