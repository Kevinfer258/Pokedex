import { useRef } from "react"
import { setTrainerName } from "../../store/slices/TrainerName.slice"
import { useDispatch} from "react-redux"
import './Styles/FormNameUser.css'
import { useNavigate } from "react-router-dom"

const FormNameUser = () => {
    const inputName = useRef()
    const dispatch=useDispatch()
    const navigate = useNavigate()
    
    const handleSubmit=e=>{
        e.preventDefault()
        dispatch(setTrainerName(inputName.current.value.trim()))
        navigate('/pokedex')
    }
   
   
  return (
   <form className="form" onSubmit={handleSubmit}>
    <input className="form_input" ref={inputName} placeholder="Enter your name here" type="text" />
        <button className="form_button" >Start</button>
   </form>
  )
}

export default FormNameUser