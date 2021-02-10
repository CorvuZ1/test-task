import {useEffect} from "react"
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const Header = props => {

  const links = [
    {to: '/', label: 'Главная', exact: true},
    {to: '/news', label: 'Новости', exact: false}
  ]
  
  function isAuth() {
    if ((localStorage.getItem("isAuth") === "true")) {
      links.push({to: '/profile', label: 'Профиль', exact: false})
    } else {
      links.push({to: '/login', label: 'Профиль', exact: false})
    }
  }

  useEffect(() => {
    isAuth()
  },[props.isAuth])

  const renderLinks = links => {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.to}
            exact={link.exact}
            className={classes.link}
            activeClassName={classes.link_active}
          >
            {link.label}
          </NavLink>
        </li>
      )
    })
  }

  return (
    <>
      <header className={classes.Header}>
        <ul type="none" className={classes.Header__inner}>
          {isAuth()}
          {renderLinks(links)}
        </ul>
      </header>
    </>
  )
}

function mapStateToProps(state) {
  console.log(state)
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, null)(Header);
