import Pokemon from '../data/pokemon.json'

import Pokedex from '../components/pokedex/Pokedex'

export default function Main() {
    return (
        <div className='App'>
            <h3>Pokedex</h3>

            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>Id</th>
                        <th scope='col'>Nom</th>
                        <th scope='col'>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {Pokemon.map((data) => (
                        <>
                            <tr>
                                <Pokedex id={data.id} nom={data.nom} type={data.type} />
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
