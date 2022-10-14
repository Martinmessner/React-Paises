export const Nota = ({capital,flag,name,region,population,subregion}) => {
    return (  
      <div>

        <ul className="app__ul">
          
      <li className="app__li">
      
       
        <img src={flag} alt="imagen"/>
         <h1> {name}</h1>
         <h2>Poblacion: {population}</h2>
        <h2>Region: {region}</h2>
        <h2>SubRegion: {subregion}</h2>
        <h2>Capital: {capital}</h2>
       </li>
        </ul>
        </div>
        
        )
  }