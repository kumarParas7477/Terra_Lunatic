import { ChangeEvent } from 'react';
import "./Input.css";

interface Input{
  icon? : any,
  label :string,
  name :string,
  value? :string,
  onchange :  (e: ChangeEvent<HTMLInputElement>) => void,
  disabled? : boolean,
  placeholder? : string,
  type : string
}


const Input =  (props : Input) => (
  <div className="InputField" >
    {/* <img className="InputField__img" alt="icon" src={icon} /> */}
    <div className="InputField__content">
      {props.placeholder ? null : (
        <label className="InputField__label">{props.label}</label>
      )}
      <input
        required
        className="InputField__input"
        name={props.name}
        type={props.type}
        disabled={props.disabled}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onchange}
      />
    </div>
  </div>
);


export default Input;
