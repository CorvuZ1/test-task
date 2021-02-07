import classes from "./Input.module.css";

const Input = props => {
  return (
    <input 
      style={props.styles} 
      placeholder={props.placeholder} 
      className={classes.Input} 
      value={props.value}
      onChange={props.onChange}
      autoComplete="true" 
      type="text"
    />
  )
}

export default Input;