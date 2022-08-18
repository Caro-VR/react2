import React from 'react'

const Boton = ({ingresar}) => {
  return (
    <div>
        <div className="col-md-3 mt-3">
            <button disabled={!ingresar} className="btn btn-warning" type="submit">Enviar</button>
        </div>
    </div>
  )
}

export default Boton