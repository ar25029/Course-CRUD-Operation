import React from 'react'
import axios from 'axios'
import base_url from '../api/bootapi'
import { Card, CardBody, CardTitle, CardSubtitle,
CardText, CardFooter, Button, Container } from 'reactstrap'
import { toast } from 'react-toastify'

function Course({course,update}) {

  const deleteCourse=(id)=>{
    axios.delete(`${base_url}/courses/${id}`).then(
      (response)=>{
        toast.success("Successfully deleted")
        update(id)
      },
      (error)=>{
        toast.error("Something went wrong")
      }
    )
  }

  return (
    <div>
        <Card className='text-center'>
            <CardBody>
                <CardSubtitle>{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <CardText>&#8377; {course.price}</CardText>
                <Container>
                    <Button onClick={()=>{
                      deleteCourse(course.id)
                    }} color='danger'>Delete</Button>
                    <Button color="warning" style={{marginLeft:10}}>Update</Button>
                </Container>
            </CardBody>
        </Card>
    </div>
  )
}

export default Course