package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Courses;
import com.example.demo.service.CourseService;

@CrossOrigin
@RestController
public class CourseController {
	
	@Autowired
	private CourseService courseService;

	//get the course
	@GetMapping("/courses")
	public List<Courses> getCourses() {
		
		return this.courseService.getCourses();
	}
	
	//get the single course as per id 
	@GetMapping("/courses/{courseId}")
	public Courses getCourse(@PathVariable String courseId ) {
		return this.courseService.getCourse(Long.parseLong(courseId));
	} 
	
	//add new course
	@PostMapping("/courses")
	public Courses addCourses(@RequestBody  Courses course){
		return this.courseService.addCourses(course);
	}
	
	//update existing course as per id
	@PutMapping("/courses")
	public Courses updateCourses(@RequestBody Courses course) {
		return this.courseService.updateCourses(course);
	}
	
	@DeleteMapping("/courses/{courseId}")
	public ResponseEntity<HttpStatus> deleteCourses(@PathVariable String courseId){
		try {
			this.courseService.deleteCourse(Long.parseLong(courseId));
			return new ResponseEntity<>(HttpStatus.OK);
		}catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
