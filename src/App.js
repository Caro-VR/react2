import { useState } from 'react'


import Titulo from './components/Titulo'
import Formulario from './components/Formulario'
import Boton from './components/Boton'


const App = () => {

  const [ingresar, setIngresar] = useState(false)

    return (
      <div className="container mt-5">
        <Titulo />
        <Formulario setIngresar={setIngresar} />
        <Boton ingresar={ingresar} />
      </div>
    )
}

export default App
