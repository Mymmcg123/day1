import React from 'react'
import {useState} from "react";
import { Button,Row,Container,Col } from 'react-bootstrap';


const Example = () => {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>You clicked {count} times</p>
            <Button onClick={() => setCount(count + 1)}>
                Click me
            </Button>
            <Container>
                <Row xs={2} md={4} lg={6}>
                    <Col>1 of 2</Col>
                    <Col>2 of 2</Col>
                </Row>
                <Row xs={1} md={2}>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
        </div>
    );
}

export default Example;
