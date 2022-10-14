import './App.css';
import { useState, useEffect} from "react"
import { Nota } from './components/Nota.jsx';

function App() {
  const [paises, SetPaises] = useState([])
  const [filtro, Setfiltro] = useState("")
  const [loading, Setloading] = useState(false)

const callAPI = () => {
  Setloading(true)
  fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((json) => {
    SetPaises(json);
    Setloading(false)
})}
useEffect( callAPI, []);

const filtroPaises = (e) => {
  Setfiltro(e.target.value); 
}
if (loading) return <div className="lds-ring"><div></div><div></div><div></div></div>

  return (
    <div className="app"> 
    <nav className='nav'> <h1>Conoce los paises y los contienentes del mundo aqui.</h1></nav>
    <form className='filtro'>
     <input onChange={(filtroPaises)} type="text" value={filtro} placeholder="Busca Por Paises o Continentes"/>
    </form>

      {paises.filter((filterr) => {
        return filterr.name.common.toLowerCase().includes(filtro) || filterr.region.toLowerCase().includes(filtro) || filterr.population.toString().includes(filtro)
      }).map((nota) => 
       <Nota key={nota.name.official} 
      capital={nota.capital}
       flag={nota.flags.png} 
       name={nota.name.common} 
       population={nota.population}
       subregion={nota.subregion}
       region={nota.region}/>)}   
    </div>
    
  );
}

export default App;


