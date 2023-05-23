import { useParams } from 'react-router-dom'
import Pokemon from '../components/pokedex/Pokemon'
import Poke from '../data/pokemon.json'
export default function PagePokemon() {
    const { id } = useParams()
    const pokemon = Poke.find((p) => p.id.toString() === id)

    if (!pokemon) {
        return <p>Pokemon introuvable</p>
    }
    return (
        <div className='App'>
            <Pokemon
                nom={pokemon.nom}
                type={pokemon.type}
                caracteristiques={pokemon.caracteristiques}
            />
        </div>
    )
}
