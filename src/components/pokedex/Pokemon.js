const Pokemon = ({ nom, type, caracteristiques }) => {
    return (
        <>
            <div className='card' style={{ border: '1px solid black' }}>
                <h2> Nom : {nom} </h2>
                <p>Type de pokemon : {type}</p>
                <div className='card-body'>
                    <h2>Caracteristiques</h2>
                    <ul>
                        <li>P.V: {caracteristiques.pv}</li>
                        <li>Attaque: {caracteristiques.Attaque}</li>
                        <li>Défense: {caracteristiques.Defense}</li>
                        <li>Att. Spé.: {caracteristiques['Att. Spé.']}</li>
                        <li>Déf. Spé.: {caracteristiques['Déf. Spé.']}</li>
                        <li>Vitesse: {caracteristiques['Vitesse']}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Pokemon
