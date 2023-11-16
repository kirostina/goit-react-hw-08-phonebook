import React from "react";
import style from 'components/Navigation/Navigation.module.css';
import { NavLink } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { selectAuthAuthenticated, selectAuthUserData} from "redux/auth.selectors";
import { logOutThunk } from "redux/authReducer";



const Navigation = () => {
    const user = useSelector(selectAuthUserData);
    const authenticated = useSelector(selectAuthAuthenticated);
    

    const dispatch = useDispatch();

    const onLogOut = () => {
        dispatch(logOutThunk());
    }


    return(
        <header className={style['header']}>

            <div className={style['header-nav']}>
            <p>PhoneBook</p>
            <nav className={style['header-link']}>
            <NavLink to='/'>
                HOME
            </NavLink>
            {authenticated ? 
            (<>
            <NavLink to='/contacts'>
                CONTACTS
            </NavLink>
            
                <p>{user.email}</p>
                <button className={style['logout']} onClick={onLogOut}>Log Out</button>

            
            </>) : 
            (<>
            <NavLink to='/login'>
                Login
            </NavLink>
            <NavLink to='/register'>
                Register
            </NavLink>
            </>)}
            </nav>
            </div>
        </header>
    )
}

export default Navigation;
