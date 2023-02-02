import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import { useState } from 'react';

function App() {

  const [cliente, setClientes] = useState([])

  const aoNovoClienteAdicionado = (cliente) => {
    console.log(cliente)
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoClienteCadastrado={cliente => aoNovoClienteAdicionado(cliente)}/>

    </div>
  );
}

export default App;
