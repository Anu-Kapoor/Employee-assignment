import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>EMPLOYEES</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/Employees' activeClassName={classes.active}>
              Home
            </NavLink>
          </li>
          
          <li>
            <NavLink to='/MedicalPolicy' activeClassName={classes.active}>
            Medical Policy
            </NavLink>
          </li>
          <li>
            <NavLink to='/Bonus' activeClassName={classes.active}>
            Yearly Bonus
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
