import  "./Boton.css"


const Boton = (props) => {

    return(
    <button
        onClick={props.onClick}
        disabled={props.disabled}
        className={props.className}
    >
        {props.text}
        </button>
    )
}

export default Boton
