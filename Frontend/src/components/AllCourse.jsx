import React, { useEffect, useState } from 'react'
import Course from './Course'
import base_url from '../api/bootapi'
import axios from 'axios'
import { toast } from 'react-toastify'

function AllCourse() {

  useEffect(()=>{
    document.title= "View Course || Physics Tutor"
  },[])

  const getAllCoursesFromServer = ()=>{
    axios.get(`${base_url}/courses`).then(
      (response)=>{
        console.log(response.data)
        setCourses(response.data)
      },
      (error)=>{
        console.log(error);
        toast.error("something went wrong", {
          position:"bottom-center"
        })
      }
    )
  };

  useEffect(()=>{
    getAllCoursesFromServer();
  },[])
    const [courses, setCourses]= useState([]);

    const updateCourses=(id)=>{
      setCourses(courses.filter((c)=> c.id!=id))
    }

  return ( 
    <div>
        <h1>All Courses</h1>

        <p>List of Courses are as follows</p>

        {
            courses.length>0 ? courses.map((item)=><Course key={item.id} course={item} update={updateCourses}  />): "No Courses Available"
        }
    </div>
  )
}

export default AllCourse