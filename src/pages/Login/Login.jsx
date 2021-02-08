import {useState, useRef, useEffect} from "react";
import classes from "./Login.module.css";
import Input from "../../components/UI/Input/Input"
import Button from "../../components/UI/Button/Button";
import { connect } from "react-redux";
import { signInSuccess } from "../../store/actions/auth";

const Login = props => {
  const messageRef = useRef();
  const [formValid, setFormValid] = useState(false);
  const [formControl, setFormControl] = useState({
    // Немного валидации
    login: {
      value: "",
      valid: false,
      shouldValidate: true,
      required: true,
      minLength: 5
    },
    password: {
      value: "",
      valid: false,
      shouldValidate: true,
      required: true,
      minLength: 5
    }
  });

  const validateControl = inputType => {
    if (!inputType.shouldValidate) {
      return true;
    }

    let valid = true;

    if (inputType.minLength) {
      valid = (inputType.value.length >= inputType.minLength) && valid;
    }

    if (inputType.required) {
      valid = (inputType.value.trim() !== "") && valid;
    }

    return valid;
  }

  const formValidChecker = () => {
    if (formControl.login.valid && formControl.password.valid) {
      setFormValid(true)
    } else {
      setFormValid(false)
    }
  }

  const onChangeHandler = event => {
    let newformControl = Object.assign({}, formControl);
    let placeholder = event.target.placeholder;
    if (placeholder === "Логин") {
      newformControl.login.value = event.target.value;
      newformControl.login.valid = validateControl(newformControl.login);
    } else if (placeholder === "Пароль"){
      newformControl.password.value = event.target.value;
      newformControl.password.valid = validateControl(newformControl.password);
    }
    setFormControl(newformControl)
    return formValidChecker()
  }

  function trueData() {
    let profileAccess = {
      value: "Admin",
      password: "12345"
    }
    return (formControl.login.value === profileAccess.value) && (formControl.password.value === profileAccess.password)
  }

  const btnClickHandler = () => {
    if (trueData() && formValid) {
      props.signInSuccess(true);
      props.history.push("/profile");
    } else {
      props.signInSuccess(false);
    }
  }

  useEffect(() => {
    messageRef.current.textContent = props.message;

    if (props.isAuth) {
      localStorage.setItem("isAuth", props.isAuth);
    }
  },[props.message, props.isAuth])

  return (
    <div className={classes.Login}>
      <div className={classes.Login__inner}>
        <h1 className={classes.Login__title}>Авторизация</h1>
        <h3 ref={messageRef} style={{color: props.isAuth ? "rgb(39,166,25)" : "rgb(255,41,41)"}} className={classes.Login__message}> </h3>
        <Input 
          value={formControl.login.value} 
          styles={{marginTop: "25px"}} 
          placeholder="Логин"
          onChange={event => onChangeHandler(event)}
        />
        <Input 
          value={formControl.password.password} 
          styles={{marginBottom: "25px"}} 
          placeholder="Пароль"
          onChange={event => onChangeHandler(event)}
        />
        <Button onClick={btnClickHandler} disabled={!formValid}>Войти</Button>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    isAuth: state.auth.isAuth,
    message: state.auth.message
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signInSuccess: status => dispatch(signInSuccess(status))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);