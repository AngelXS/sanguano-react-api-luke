import '../css/menu.css';
import axios from 'axios';

const Boton = (props) => {
    const { consulta, setData } = props;
    const consultar =  () => {
        axios.get(consulta)
            .then(resp => {
                setData(resp.data);
            })
            .catch(resp => {setData({detail: "error"})});
    }
    return (
        <div>
            <button className='btn' onClick={consultar}>Search</button>
        </div>
    );
}
export default Boton;