import { useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const [dadosFormulario, setDadosFormulario] = useState(null);

  const enviaDados = (dados) => {
    setDadosFormulario(dados);
  };

  return (
    <div className="container">
      <Form formulario={enviaDados} />
      <Table dados={dadosFormulario} />
    </div>
  );
}

export default App;
