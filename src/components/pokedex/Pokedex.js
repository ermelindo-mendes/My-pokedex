import { Link } from 'react-router-dom'

const Pokedex = ({ id, nom, type }) => {
    return (
        <>
            <tr>
                <td>{id}</td>
                <td>
                    <Link key={id} to={`/${id}`}>
                        {' '}
                        {nom}{' '}
                    </Link>
                </td>
                <td> {type} </td>
            </tr>
        </>
    )
}

export default Pokedex
