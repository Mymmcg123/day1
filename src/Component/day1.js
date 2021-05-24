import React from 'react'
import {useState} from "react";
import { Button,Row,Container,Col } from 'react-bootstrap';
import './day1.css'
import mark from './Mark.jpg'

const Example = () => {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    return (
        <div className='blockName'>
            <img src={mark} width='200' height='200' />
            <h2>Name :</h2>
            <h2>Lastname :</h2>
        </div>
    );
}

export default Example;
