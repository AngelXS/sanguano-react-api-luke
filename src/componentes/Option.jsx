import '../css/menu.css';
const Option = (props) => {
    const {setSeleccion, options, setData} = props;
    const seleccionado = () => {
        setSeleccion(document.getElementById('sc').value);
        setData({});
    }
    return (
        <div className="opciones">
            <select name="opt" className="cbx" onChange={seleccionado} id={'sc'}>
                {
                    options.map((op,ind)=>{
                        return <option key={ind} value={op}>{op}</option>
                    })
                }
            </select>
        </div>
    );
}
export default Option;