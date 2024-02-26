
import './css/inputField.css'
function InputField({type,label,value ='',handleChange, name, checked}) {
    return(
        <div className="inputs">
          <label>{label}</label>
          <input
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
            checked={checked}
          />
        </div>
    )
}

export default InputField