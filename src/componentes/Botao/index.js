import './Botao.css'
// Tabem pode fazer assim passando o parametro "texto" para o form {props.texto}

const Botao = (props) => {
    return (
        <button>
            {props.children}
        </button>

    )
}
export default Botao