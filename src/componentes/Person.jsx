import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import ResultadoCard from "./ResultadoCard";
import { useEffect } from "react";

const Person = () => {
    const { id } = useParams();
    const [people, setPeople] = useState({});
    const [selec, setSelec] = useState("NaN");

    useEffect(()=>{
        axios.get("https://swapi.dev/api/people/"+id+"/")
        .then(resp => {
            setSelec("People");
            setPeople(resp.data);
        })
        .catch(resp =>{
            setSelec("NaN");
            setPeople({status: "error"});
        });
    },[id]);
    return(
        <ResultadoCard seleccion={selec} data={people}></ResultadoCard> 
    );
}
export default Person;