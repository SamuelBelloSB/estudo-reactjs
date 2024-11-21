import './ListaSuspensa.css'
const ListaSuspensa = (props) => {
    
    
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} value={props.value} obrigatorio={props.required}>
                {props.animes.map(anime => <option key={anime}>{anime}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa