
import axios from 'axios';
import { useState } from 'react';
import '../css/menu.css';
const ResultadoCard = (props) => {
    const { seleccion, data} = props;
    const [home, setHome] = useState("");

    const homeWorld =  (urlhome) => {
        axios.get(urlhome)
        .then(resp => {
            setHome(resp.data.name);
        })
        .catch(resp => {console.log(resp)});
    }
    if(seleccion==="" || JSON.stringify(data) === '{}'){
        return (
            <div>
                <img alt='imagen pro default' src="https://pm1.narvii.com/6285/3dca1258c54749b74a015e302e5299e5ca814545_hq.jpg"/>:
            </div>
        );
    }
    else if(seleccion==="People" && JSON.stringify(data) !== '{}' && (data.detail !== 'error')) {
        homeWorld(data.homeworld);
        return(
            <div className="carta" style={{backgroundColor:"#253655",display:"flex",flexDirection:"column"}}>
                <h1>People</h1>  
                <h2>{data.name}</h2>
                <h3><span style={{fontStyle:"italic"}}>Home World: </span>{home}</h3>
                <h3><span>Height: </span> {data.height} cm</h3>
                <h3><span>Eye Color: </span>{data.eye_color}</h3>
                <h3><span>Gender: </span> {data.gender}</h3>
            </div>             
        );
    }
    else if(seleccion==="Films" && JSON.stringify(data) !== '{}' && (data.detail !== 'error')) {
        return(
            <div className="carta" style={{backgroundColor:"#253655",display:"flex",flexDirection:"column"}}>
                <h1>Film</h1>  
                <h2>{data.title}</h2>
                <h3><span>Director: </span> {data.director}</h3>
                <h3><span>Producer: </span>{data.producer}</h3>
                <h3><span>Release Date: </span>{data.release_date}</h3>
                <h3><span>Opening: </span></h3>        
                <p>{data.opening_crawl}</p>   
            </div>
        );
    }
    else if(seleccion==="Starships" && JSON.stringify(data) !== '{}' && (data.detail !== 'error')) {
        return(
            <div className="carta" style={{backgroundColor:"#253655",display:"flex",flexDirection:"column"}}>
                <h1>Starship</h1>  
                <h2>{data.name}</h2>
                <h3><span>Model: </span> {data.model}</h3>
                <h3><span>Cargo Capacity: </span>{data.cargo_capacity}</h3>
                <h3><span>Crew: </span>{data.crew}</h3>
                <h3><span>Manufacturer: </span> {data.manufacturer}</h3>            
            </div>
        );
    }
    else if(seleccion==="Vehicles" && JSON.stringify(data) !== '{}' && (data.detail !== 'error')) {
        return(
            <div className="carta" style={{backgroundColor:"#253655",display:"flex",flexDirection:"column"}}>
                <h1>Vehicle</h1>  
                <h2>{data.name}</h2>
                <h3><span>Model: </span> {data.model}</h3>
                <h3><span>Passengers: </span>{data.passengers}</h3>
                <h3><span>Class: </span>{data.vehicle_class}</h3>
                <h3><span>Manufactuer: </span> {data.manufacturer}</h3>              
            </div>
        );
    }
    else if(seleccion==="Species" && JSON.stringify(data) !== '{}' && (data.detail !== 'error')) {
        return(
            <div className="carta" style={{backgroundColor:"#253655",display:"flex",flexDirection:"column"}}>
                <h1>Species</h1>  
                <h2>{data.name}</h2>
                <h3><span>Classification: </span> {data.classification}</h3>
                <h3><span>Eye colors: </span>{data.eye_colors}</h3>
                <h3><span>Designation: </span>{data.designation}</h3>
                <h3><span>Language: </span> {data.language}</h3>            
            </div>
        );
    }
    else if(seleccion==="Planets" && JSON.stringify(data) !== '{}' && (data.detail !== 'error')) {
        return(
            <div className="carta" style={{backgroundColor:"#253655",display:"flex",flexDirection:"column"}}>
                <h1>Planet</h1>  
                <h2>{data.name}</h2>
                <h3><span>Diameter: </span> {data.diameter} km</h3>
                <h3><span>Climate: </span>{data.climate}</h3>
                <h3><span>Terrain: </span>{data.terrain}</h3>
                <h3><span>Population: </span> {data.population}</h3>                
            </div>
        );
    }
    else {
        return(
            <div className="carta" style={{backgroundColor:"#253655",display:"flex",flexDirection:"column"}}>
                <h1><span style={{color: 'red'}}>Estos </span> no son los droides que está buscando</h1>      
                <img style={{justifySelf: 'center', width: '100%', height: 'auto'}} src="https://phantom-marca.unidadeditorial.es/a12ae8bfd4cbe2bbec80cc9c70ea6301/resize/1320/f/jpg/assets/multimedia/imagenes/2022/05/26/16535796722201.jpg" alt="Obi-Wan Kenobi" />     
            </div>
        );
    }

}
export default ResultadoCard;