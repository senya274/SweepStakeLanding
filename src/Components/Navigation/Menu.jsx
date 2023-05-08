import React from "react"
import { NavLink } from "react-router-dom"
import styles from './Menu.module.css'


export const Menu = () => {
    return(
        <div className={styles.menu_container}>
        <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              First Task
            </NavLink>
          </li>
          <li>
            <NavLink to="/Advertisement" activeClassName="active">
              Second Task
            </NavLink>
          </li>
        
        </ul>
      </nav>
      </div>
    )
}