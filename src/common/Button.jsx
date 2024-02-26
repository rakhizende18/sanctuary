
import './css/inputField.css'
function Button({children,handleSubmit}) {
    return(
        <div className="inputs">
         <button onClick={handleSubmit}>{children}</button>
        </div>
    )
}

export default Button