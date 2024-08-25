import React from 'react';
import classes from "./button-panel.module.scss";
import Button from "../UI/button/button";
import {useDispatch} from "react-redux";
const ButtonPanel = () => {
    const dispatch = useDispatch()
    return (
        <div className={classes.panel}>
            <div className={classes.specials}>
                <Button
                    color={'light-grey'}
                    onClick={() => dispatch({type: 'RESET_NUMBER'})}
                >
                    C
                </Button>
                <Button
                    color={'light-grey'}
                    onClick={() => dispatch({type: 'CHANGE_SIGN'})}
                >
                    ±
                </Button>
                <Button
                    color={'light-grey'}
                    onClick={() => dispatch({type: 'GET_PERCENT'})}
                >
                    %
                </Button>
            </div>
            <div className={classes.numbers}>
                <Button
                    color={'dark-grey'}
                    onClick={() => dispatch({type: 'ENTER_NUMBER', payload:{number: '1'}})}
                >
                    1
                </Button>
                <Button
                    color={'dark-grey'}
                    onClick={() => dispatch({type: 'ENTER_NUMBER', payload:{number: '2'}})}
                >
                    2
                </Button>
                <Button
                    color={'dark-grey'}
                    onClick={() => dispatch({type: 'ENTER_NUMBER', payload:{number: '3'}})}
                >
                    3
                </Button>
                <Button
                    color={'dark-grey'}
                    onClick={() => dispatch({type: 'ENTER_NUMBER', payload:{number: '4'}})}
                >
                    4
                </Button>
                <Button
                    color={'dark-grey'}
                    onClick={() => dispatch({type: 'ENTER_NUMBER', payload:{number: '5'}})}
                >
                    5
                </Button>
                <Button
                    color={'dark-grey'}
                    onClick={() => dispatch({type: 'ENTER_NUMBER', payload:{number: '6'}})}
                >
                    6
                </Button>
                <Button
                    color={'dark-grey'}
                    onClick={() => dispatch({type: 'ENTER_NUMBER', payload:{number: '7'}})}
                >
                    7
                </Button>
                <Button
                    color={'dark-grey'}
                    onClick={() => dispatch({type: 'ENTER_NUMBER', payload:{number: '8'}})}
                >
                    8
                </Button>
                <Button
                    color={'dark-grey'}
                    onClick={() => dispatch({type: 'ENTER_NUMBER', payload:{number: '9'}})}
                >
                    9
                </Button>
                <Button
                    color={'dark-grey'}
                    onClick={() => dispatch({type: 'ENTER_NUMBER', payload:{number: '.'}})}
                >
                    .
                </Button>
                <Button
                    color={'dark-grey'}
                    onClick={() => dispatch({type: 'ENTER_NUMBER', payload:{number: '0'}})}
                >
                    0
                </Button>
                <Button
                    color={'dark-grey'}
                    onClick={() => dispatch({type: 'BACKSPACE'})}
                >
                    <img src={'/img/del.svg'} alt={''}/>
                </Button>
            </div>
            <div className={classes.operators}>
                <Button
                    color={'blue'}
                    onClick={() => dispatch({type: 'ADD_OPERATOR', payload:{operator: '/'}})}
                >
                    ÷
                </Button>
                <Button
                    color={'blue'}
                    onClick={() => dispatch({type: 'ADD_OPERATOR', payload:{operator: '*'}})}
                >
                    ×
                </Button>
                <Button
                    color={'blue'}
                    onClick={() => dispatch({type: 'ADD_OPERATOR', payload:{operator: '-'}})}
                >
                    -
                </Button>
                <Button
                    color={'blue'}
                    onClick={() => dispatch({type: 'ADD_OPERATOR', payload:{operator: '+'}})}
                >
                    +
                </Button>
                <Button
                    color={'blue'}
                    onClick={() => dispatch({type: 'GET_RESULT'})}
                >
                    =
                </Button>
            </div>
        </div>
    );
};

export default ButtonPanel;