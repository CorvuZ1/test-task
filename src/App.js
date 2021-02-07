import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import Homepage from './pages/Homepage/Homepage';
import Login from './pages/Login/Login';
import News from './pages/News/News';
import Profile from './pages/Profile/Profile';

function App() {
  let profileRoute = <Route path="/test-task/login" component={Login}/>

  if (localStorage.getItem("isAuth") === "true") {
    profileRoute = <Route path="/test-task/profile" component={Profile}/>
  }

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/test-task" exact component={Homepage}/>
        <Route path="/test-task/news" component={News}/>
        {profileRoute}
        <Redirect to="/test-task"/>
      </Switch>
    </div>
  );
}

export default App;
