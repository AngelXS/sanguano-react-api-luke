import './App.css';
import Option from './componentes/Option';
import Search from './componentes/Search';
import Boton from './componentes/Boton';
import ResultadoCard from './componentes/ResultadoCard';
import { useState } from 'react';


function App() {
  const options = ["","People","Films","Starships","Vehicles","Species","Planets"];
  const [seleccion, setSeleccion] = useState("");
  const [data, setData] = useState({});
  const [id, setId] = useState("");
  const urlAux = "https://swapi.dev/api/"+seleccion.toLowerCase()+"/"+id+"/";
  return (
    <div className="App">
      <div>
        <Option options={options} setSeleccion={setSeleccion} setData={setData}></Option>
        <Search setId={setId}></Search>
        <Boton consulta={urlAux} setData={setData}></Boton>
      </div>
      <div>
        <ResultadoCard seleccion={seleccion} data={data} setData={setData}></ResultadoCard>
      </div>
    </div>
  );
}

export default App;
