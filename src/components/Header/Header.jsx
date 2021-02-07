import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = props => {

  const links = [
    {to: '/test-task', label: 'Главная', exact: true},
    {to: '/test-task/news', label: 'Новости', exact: false}
  ]
  
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

  if ((localStorage.getItem("isAuth") === "true")) {
    links.push({to: '/test-task/profile', label: 'Профиль', exact: false})
  } else {
    links.push({to: '/test-task/login', label: 'Профиль', exact: false})
  }

  return (
    <header className={classes.Header}>
      <ul type="none" className={classes.Header__inner}>
        {renderLinks(links)}
      </ul>
    </header>
  )
}

export default Header;