import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import UseFetch from "../../hooks/Usefetch"
import './Styles/Formpoke.css'
const FormPoke = ({ setFormUrl, urlBase, setStateCategory }) => {

    const inputPoke = useRef()
    const navigate = useNavigate()

    const url = 'https://pokeapi.co/api/v2/type/'
    const [types, getAllTypes] = UseFetch(url)

    useEffect(() => {
        getAllTypes()
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        const path = `/pokedex/${inputPoke.current.value.trim().toLowerCase()}`
        navigate(path)
    }

    const handleChange = e => {
        setFormUrl(e.target.value)
        setStateCategory(
            e.target.value == 0 ? 0 : 1
        )
    }
 
    
    return (
        <div className="form_poke">
            <form className="form_poke-poke" onSubmit={handleSubmit}>
                <input className="form_poke_input" ref={inputPoke} type="text" />
                <button className="form_poke_btn">Search</button>
            </form>
            <select className="form_poke_select" onChange={handleChange}>
                <option className="form_poke_option" value={0}>All Pokemons</option>
                {
                    types?.results.map(type => (
                        <option className="form_poke_option_2"
                            key={type.url}
                            value={type.url}
                        >{type.name}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default FormPoke