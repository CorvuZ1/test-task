import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({component: Component, ...rest}) => {
  let isAuth = localStorage.getItem("isAuth");
  return (
    <Route {...rest} render={props => isAuth 
      ? (<Component {...props} />)
      : (<Redirect to={{
        pathname: '/login',
        state: { from: props.location },
      }}
    />)}/>
  )
}

export default ProtectedRoute;