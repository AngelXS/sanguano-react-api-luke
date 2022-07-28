import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import ResultadoCard from "./ResultadoCard";

const Person = () => {
    const { id } = useParams();
    const [people, setPeople] = useState({});
    useEffect(() => {
        axios.get("https://swapi.dev/api/people/"+id+"/")
        .then(resp => {
            setPeople(resp.data);
        })
        .catch(resp => {console.log(resp)});
    }, [id]);

    return(
        <ResultadoCard seleccion={"People"} data={people}></ResultadoCard> 
    );
}
export default Person;
