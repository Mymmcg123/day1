import React from 'react'
import {useState, useEffect} from "react";
import {Form, Button} from 'react-bootstrap';
import './day1.css'
import mark from './Mark.jpg'



const Example = ({addPost}) => {
    // Declare a new state variable, which we'll call "count"
    const [Name, setName] = useState(" ");
    const [ShName, setShName] = useState("Kittanon");

    const [LastName, setLastName] = useState(" ");
    const [ShLastName, setShLastName] = useState("Sonsung");

    const [Project, setProject] = useState(" ");
    const [post, setPost] = useState(["ProjectName: NumericalMethod Link : https://github.com/Mymmcg2/web"]);


    const AddName = (event) => {
        setName(event.target.value);
    }

    const AddLastName = (event) => {
        setLastName(event.target.value);
    }

    const ShowName = (event) => {
        event.preventDefault();
        setShName(Name);
        setName(" ");
    }


    const ShowLastName = (event) => {
        event.preventDefault();
        setShLastName(LastName);
        setLastName(" ");

    }

    const AddProject = (event) => {
        setProject(event.target.value);
    }

    const Posts = (event) => {
        event.preventDefault();
        setPost((pushPost) => {
            return [...post, Project]
        })
        setProject(" ");


    }

    return (
        <div className='grid-container'>
            <div className="grid img">
                <img src={mark} width="300" height="380"/>
            </div>
            <div className="grid Name">
                <h4>Name : {ShName}</h4>
            </div>
            <div className="grid LastName">
                <h4>Lastname : {ShLastName}</h4>
            </div>
            <div className="grid description">
                <h4>Description : <p>นักศึกษามหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ คณะวิทยาศาสตร์ประยุกต์ สาขาวิทยาการคอมพิวเตอร์
                                     ชั้นปีที่ 3 ภาษาโปรแกรมที่เขียนได้ HTML,Java,C++ งานอดิเรกชอบเล่นเกม เล่นกีฬา และ<br/>
                                     เป็นนักกีฬาบาสของหมาวิทยาลัย</p></h4>

            </div>
            <div className="grid ProjectName">
                <h4>My Project
                    {post.map((Arr, index) =>
                        <div className='my-project'>
                            <p>{Arr}</p>
                        </div>
                    )}
                </h4>
            </div>
            <div className="grid form">
                <Form>
                    <Form.Group controlId="grid formBasicEmail">

                        <div className="form-contain1">
                            <Form.Label className="label"><h6>Name</h6></Form.Label>
                            <div className="form-f1">
                                <Form.Control type="text" placeholder="Enter your name" value={Name} onChange={AddName}/>
                            </div>
                            <Button className="button" variant="primary" onClick={ShowName}>Add</Button>
                        </div>

                        <div className="form-contain2">
                            <Form.Label className="label2"><h6>Lastname</h6></Form.Label>
                            <div className="form-f2">
                                <Form.Control className="form-f" type="text" placeholder="Enter your Lastname" value={LastName} onChange={AddLastName}/>
                            </div>
                            <Button className="button" variant="primary" onClick={ShowLastName}>Add</Button>
                        </div>

                        <div className="form-contain3">
                            <Form.Label className="label3"><h6>My Project</h6></Form.Label>
                            <div className="form-f3">
                                <Form.Control type="text" placeholder="Enter your Description" value={Project} onChange={AddProject}/>
                            </div>
                            <Button className="button" variant="primary" type="submit" onClick={Posts}>Add</Button>
                        </div>
                    </Form.Group>
                </Form>
            </div>
        </div>

    );
}

export default Example;
