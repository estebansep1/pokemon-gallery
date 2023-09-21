export default function ButtonBar(props) {
    return (
        <div>
            <button onClick={() => props.setPokemonId(props.setPokemonId - 1)}>Back</button>
            <button onClick={() => props.setPokemonId(props.setPokemonId + 1)}>Next</button>
        </div>
    )
}