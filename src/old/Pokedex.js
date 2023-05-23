import { Link } from 'react-router-dom'

const Pokedex = ({ id, nom, type }) => {
    return (
        <>
            <td>{id}</td>
            <td>
                <Link key={id} to={`/${id}`}>
                    {' '}
                    {nom}{' '}
                </Link>
            </td>
            <td> {type} </td>
        </>
    )
}

export default Pokedex
