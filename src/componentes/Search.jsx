import '../css/menu.css';
const Search = (props) => {
    const { setId } = props;
    const enviarId = (e) => {
        setId(e.target.value);
    }
    return (
        <div className="opciones">
            <label htmlFor="busqueda">ID:</label>
            <input type="number" placeholder='Coloca el ID' name='busqueda' id="axp" onChange={enviarId}/>
        </div>
    );
}
export default Search;