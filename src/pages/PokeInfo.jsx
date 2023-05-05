import { useParams } from "react-router-dom"
import UseFetch from "../hooks/Usefetch"
import { useEffect } from "react"
import './styles/PokeInfo.css'


const PokeInfo = () => {
    const { name } = useParams()
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    const [pokemon, getPokemoByName, hasError] = UseFetch(url)
    useEffect(() => {
        getPokemoByName()
    }, [name])

    return (
        <div className="PokeInfo">
            {
                hasError
                    ? <h1>this pokemon is not exist ❌</h1>
                    : <>

                        <div className="pokeInfo_top-1">
                            <div className="pokeInfo_rojo"></div>
                            <img className='PokeInfo_img' src=".//pokedexx.png" alt="" />
                            <div className="pokeInfo_negro"></div>
                        </div>

                        <div className="pokeInfo_card_arriba">
                            <header className={`pokeInfo_header bg-${pokemon?.types[0].type.name}`}><img className={`pokeInfoImg ${pokemon?.types[0].type.name}`} src={pokemon?.sprites.other['official-artwork'].front_default} alt="" /></header>
                            <section className="pokeInfo_infoPokeCard">
                                <h2 className={`pokeInfo_infoPolkeCard-title`}>{pokemon?.name}</h2>
                                <ul className="pokeInfo_infoPolkeCard-label">
                                    <li className="pokeInfo_infoPolkeCard-value"><span>Peso</span><span className="pokeInfo_infoPolkeCard-item"> {pokemon?.weight}</span></li>
                                    <li className="pokeInfo_infoPolkeCard-value"><span>Altura</span><span className="pokeInfo_infoPolkeCard-item"> {pokemon?.height}</span></li>
                                </ul>
                            </section>
                            <section className="pokeInfo_types-skills">
                                <ul className="pokeInfo_types-skills-label">
                                    <li className="pokeInfo_types-skills-value"><span>Type</span><span className="pokeInfo_types-skills-item"> {pokemon?.types[0].type.name} {pokemon?.types[1] ? ` / ${pokemon.types[1].type.name}` : ''}</span></li>
                                    <li className="pokeInfo_types-skills-value"><span>Skills</span><span className="pokeInfo_types-skills-item"> {pokemon?.abilities[0]?.ability.name} {pokemon?.abilities[1]?.ability.name ? `/ ${pokemon.abilities[1].ability.name}` : ''}</span></li>
                                </ul>
                            </section>

                            <footer className="pokeInfo_footer">
                                <h3 className="pokeInfo_footer-h3">Stats:</h3>
                                <ul className="pokeInfo_footer-label">
                                    
                                    {pokemon?.stats.map((objStat) => (
                                        <li
                                            className={`pokeInfo_footer-value bg-${pokemon?.types[0].type.name}`}
                                            key={objStat.stat.url}
                                            style={{
                                                background: `linear-gradient(90deg, rgba(252, 214, 118) 0px, rgba(230, 144, 30, 1) ${objStat.base_stat}%,  rgb(231, 231, 231) ${objStat.base_stat}%,  rgb(231, 231, 231) 100%)`,
                                            }}>
                                            <span className="pokeInfo_footer-item">
                                                {objStat.stat.name}
                                            </span>
                                            <span
                                                className={`pokeInfo_footer-item color-${pokemon?.types[0].type.name}`}>
                                                    {objStat.base_stat}
                                            </span>
                                        </li>
                                    ))}
                                    {/* Cabe recalgar que esta fue con boostrap que no funciono -20 años de vida <li className="pokeInfo_footer-value">Hp: <span className="pokeInfo_footer-item">{pokemon?.stats[0].base_stat}
                                    </span></li>
                                    <li className="pokeInfo_footer-value">Stroke: <span className="pokeInfo_footer-item">{pokemon?.stats[1].base_stat}
                                    </span></li>
                                    <li className="pokeInfo_footer-value">Defending: <span className="pokeInfo_footer-item">{pokemon?.stats[2].base_stat}
                                    </span></li>
                                    <li className="pokeInfo_footer-value">special-attack: <span className="pokeInfo_footer-item">{pokemon?.stats[3].base_stat}
                                    </span></li> */}
                                </ul>
                            </footer>
                            <section className="PokeInfo_moves">
                                <h3 className="PokeInfo_title">Special Moves</h3>
                                <ul className="pokeInfo_moves-list">
                                    {
                                        pokemon?.moves.map((ObjMovie) => (
                                            <li className="pokeInfo_moves-Item" key={ObjMovie.move.url}>
                                                {ObjMovie.move.name}
                                            </li>
                                        ))
                                    }

                                </ul>
                            </section>
                        </div>
                    </>
            }
        </div>
    )
}


export default PokeInfo
