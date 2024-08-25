import React from 'react';
import classes from './display-field.module.scss'
import {useSelector} from "react-redux";
const DisplayField = () => {
    const state = useSelector(state => state.calculator)

    return (
        <div className={classes.fields}>
            <span className={classes.details}>
                {state.previousNumber} {state.operator} {state.number}
            </span>
            <span className={classes.main}>
                {state.visible}
            </span>
        </div>
    );
};

export default DisplayField;