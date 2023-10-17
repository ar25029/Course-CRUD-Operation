import axios from 'axios'
import base_url from '../api/bootapi'
import React, {useEffect, useState} from 'react'
import { Button, Container, Form, FormGroup, Input } from 'reactstrap'
import { toast } from 'react-toastify'

function AddCourse() {

    useEffect(()=>{
        document.title= "Add Course || Physics Tutor"
      },[])

      const [course, setCourse] = useState({})

      const handleForm=(e)=>{
        console.log(course);
        toast.success("successfully added")
        postDataToServer(course)
        e.preventDefault();
      }

      const postDataToServer=(course)=>{
        axios.post(`${base_url}/courses`,course).then(
            (response)=>{
                console.log(response);
                console.log("successfully added");
            },
            (error)=>{
                console.log(error);
            }
        )
      }

  return (
    <div>
        <h1 className='text-center my-3'>Fill Course Details</h1>
        <Form onSubmit={handleForm}>
            <FormGroup>
                <label for='userId'>Course Id</label>
                <Input type="text" placeholder='Enter you course Id' name='id' id='userId'
                onChange={(e)=>{
                    setCourse({...course, id: e.target.value})
                }} />
            </FormGroup>

            <FormGroup>
                <label for='title'>Title</label>
                <Input type="text" placeholder='Enter the title here' id='title' 
                onChange={(e)=>{
                    setCourse({...course, title:e.target.value })
                }} />
            </FormGroup>

        <FormGroup>
            <label for="description">Course Description</label>
            <Input type='textarea' placeholder='Enter description here' id='description' style={{height:150}} 
            onChange={(e)=>{
                setCourse({...course, description:e.target.value})
            }} />
        </FormGroup>

        <FormGroup>
            <label for="description">Price</label>
            <Input type='text' placeholder='Enter the Course Price' id='price' 
            onChange={(e)=>{
                setCourse({...course, price:e.target.value})
            }} />
        </FormGroup>

        <Container className='text-center'>
            <Button type='submit' color='success' >Add Course</Button>
            <Button type='reset' color='warning' style={{marginLeft:10}}>Clear</Button>
        </Container>


        </Form>
    </div>
  )
}

export default AddCourse