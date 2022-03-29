import { useState } from 'react'
import useLetras from '../hooks/useLetras'

const Formulario = () => {

    const { setAlerta, busquedaLetra } = useLetras()

    const [busqueda, setBusqueda] = useState({
        artista: '',
        cancion: ''
    })

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(busqueda).includes('')){
            setAlerta('Ingresa el nombre del artista y la cacion')
            return
        }
        busquedaLetra(busqueda)
    }

    return (
        <div>
            <form
                onSubmit={handleSubmit}    
            >
                <legend>Busca por el nombre del artista y la canción</legend>

                <div className='form-grid'>
                    <div>
                        <label>Artista</label>
                        <input
                            type='text'
                            name='artista'
                            placeholder='Ingresa el nombre del artista'
                            value={busqueda.artista}
                            onChange = { e => setBusqueda({
                                ...busqueda,
                                [e.target.name] : e.target.value
                            })}
                        />
                    </div>
                    <div>
                        <label>Canción</label>
                        <input
                            type='text'
                            name='cancion'
                            placeholder='Ingresa el nombre de la canción'
                            value={busqueda.cancion}
                            onChange = { e => setBusqueda({
                                ...busqueda,
                                [e.target.name] : e.target.value
                            })}
                        />
                    </div>
                    <input type='submit' value='Buscar' />
                </div>
            </form>
        </div>
    )
}

export default Formulario