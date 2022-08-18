import React from 'react'

const Formulario = ({setIngresar}) => {


  return (
    <div className="row">
        <div className="col-md-3 d-flex flex-column">
            <label>Nombre</label>
            <input type="text" placeholder="Ingrese Nombre" />
            <label>Contraseña</label>
            <input type="password" placeholder="Ingrese Contraseña" onChange={(e) => e.target.value === '252525'?setIngresar(true):setIngresar(false) }/>
        </div>
       
    </div>

  )
}

export default Formulario