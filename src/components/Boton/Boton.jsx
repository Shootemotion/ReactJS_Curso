import  "./Boton.css"


const Boton = (props) => {
    const styleButton = {
        backgroundColor: props.color,
      }
    return(
    <button
        onClick={props.onClick}
        disabled={props.disabled}
        className={props.className}
        style={styleButton}
        onPress={props.onClick}
    >
        {props.text}
        </button>
    )
}

export default Boton
