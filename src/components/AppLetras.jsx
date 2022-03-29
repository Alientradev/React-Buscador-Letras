import Formulario from "./Formulario"
import useLetras from "../hooks/useLetras"
import Alerta from "./Alerta"
import Letra from "./Letra"

const AppLetras = () => {

    const { alerta, letra, cargando } = useLetras()

    return (
        <div>
            <header>
                <h1>Búsqueda de letras de caciones</h1>
            </header>

            <Formulario />

            <main>
                {
                alerta ? <Alerta>{alerta}</Alerta> :
                letra ? <Letra/> :
                cargando ? "Cargando..." :
                <p className="text-center">Busca la letra de tus canciones favoritas</p>
                }
            </main>
        </div>
    )
}

export default AppLetras