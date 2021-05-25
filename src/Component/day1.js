import React from 'react'
import {useState,useEffect} from "react";
import { Form,Button } from 'react-bootstrap';
import './day1.css'
import mark from './Mark.jpg'
import axios from "axios";


const Example = ({addPost}) => {
    // Declare a new state variable, which we'll call "count"
    const [Name, setName] = useState(" ");
    const [ShName,setShName] = useState(" ");

    const [LastName, setLastName] = useState(" ");
    const [ShLastName,setShLastName] = useState(" ");

    const [Project,setProject] = useState(" ");
    const [post,setPost] = useState([]);


    const AddName = (event)=>{
        setName(event.target.value);
    }

    const AddLastName = (event)=>{
        setLastName(event.target.value);
    }

    const ShowName =(event)=>{
        event.preventDefault();
        setShName(Name);
    }


    const ShowLastName =(event)=>{
        event.preventDefault();
        setShLastName(LastName);
    }

    const AddProject = (event)=>{
        setProject(event.target.value);
    }

    const Posts = (event) =>{
        event.preventDefault();
        setPost((pushPost)=>{
            return[...post,Project]
        })


    }


    useEffect(() => {
        test()
    } ,[])

    const test = async () => {
        const {data} = await axios.get('https://disease.sh/v3/covid-19/countries/TH')
        console.log("Data : " + data.deaths);

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
                <h4>Description :</h4>
            </div>
            <div className="grid ProjectName">
                <h4>Project Name
                    {post.map((Arr,index)=>
                        <div>
                            <p>{Arr}</p>
                        </div>
                    )}
                </h4>

            </div>
            <div className="grid form">
                <Form >
                    <Form.Group controlId="grid formBasicEmail">
                        <div className="form-contain1">
                            <Form.Label className="label"><h6>Name</h6></Form.Label>
                            <div className="form-f1">
                                <Form.Control  type="text"  placeholder="Enter your name"  value={Name} onChange={AddName}/>
                            </div>
                            <Button  className="button" variant="primary" onClick={ShowName}>Add</Button>
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
