import React from 'react';
import classes from "./switch-theme.module.scss";
import {useDispatch, useSelector} from "react-redux";
const SwitchTheme = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.theme)
    return (
        <label className={classes.switch}>
            <input type={'checkbox'} checked={!state} onChange={() => dispatch({type: 'CHANGE_THEME'})}/>
            <span className={classes.slider}>
                <img src={'/img/sun.svg'} alt={''}/>
                <img src={'/img/moon.svg'} alt={''}/>
            </span>
        </label>
    );
};

export default SwitchTheme;