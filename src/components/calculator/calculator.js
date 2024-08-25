import React from 'react';
import classes from './calculator.module.scss'
import SwitchTheme from "../UI/switch/switch-theme";
import {useSelector} from "react-redux";
import ButtonPanel from "../buttons-panel/button-panel";
import DisplayField from "../display-field/display-field";
const Calculator = () => {
    const state = useSelector(state => state.theme)
    return (
        <div className={`${classes.wrapper} ${state?'dark-theme':'light-theme'}`}>
            <SwitchTheme/>
            <DisplayField/>
            <ButtonPanel/>
        </div>
    );
};

export default Calculator;