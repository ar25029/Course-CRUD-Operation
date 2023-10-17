package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Courses;

public interface CourseService {
	
	public List<Courses> getCourses();

	public Courses getCourse(long courseId);
	
	public Courses addCourses(Courses courses);

	public Courses updateCourses(Courses course);

	public void deleteCourse(long courseId);
}
