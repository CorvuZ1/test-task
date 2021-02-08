import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import Homepage from './pages/Homepage/Homepage';
import Login from './pages/Login/Login';
import News from './pages/News/News';
import Profile from './pages/Profile/Profile';
import ProtectedRoute from './pages/ProtectedRoute/ProtectedRoute';

// function App() {
//   let profileRoute = <Route path="/login" component={Login}/>

//   if (localStorage.getItem("isAuth") === "true") {
//     profileRoute = <Route path="/profile" component={Profile}/>
//   }

//   return (
//     <div className="App">
//       <Header/>
//       <Switch>
//         <Route path="/" exact component={Homepage}/>
//         <Route path="/news" component={News}/>
//         {profileRoute}
//         <Redirect to="/"/>
//       </Switch>
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" exact component={Homepage}/>
        <Route path="/news" component={News}/>
        <Route path="/login" component={Login}/>
        <ProtectedRoute path="/profile" component={Profile}/>
        <Redirect to="/"/>
      </Switch>
    </div>
  );
}

export default App;
