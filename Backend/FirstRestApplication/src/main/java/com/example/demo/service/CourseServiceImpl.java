package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.CoursesDao;
import com.example.demo.entity.Courses;

@Service
public class CourseServiceImpl implements CourseService {
	
	@Autowired
	private CoursesDao coursesDao;

//	List<Courses> list;
	
	public CourseServiceImpl() {
		
//		list = new ArrayList<>();
//		list.add(new Courses(1,"English course","This is english course",800));
//		list.add(new Courses(2,"SStudy", "this is social study course", 600));
		
	}
	
	@Override
	public List<Courses> getCourses() {
		return coursesDao.findAll() ;
	}

	@Override
	public Courses getCourse(long courseId) {
//		Courses c= null;
//		for(Courses course: list) {
//			if(course.getId()==courseId) {
//				c= course; 
//				break;
//			}
//		}
//		return coursesDao.findById(courseId);
		return coursesDao.getOne(courseId);
	}

	@Override
	public Courses addCourses(Courses courses) {
//		list.add(courses);
		coursesDao.save(courses);
		return courses;
	}

	@Override
	public Courses updateCourses(Courses course) {
//		list.forEach(e->{
//			if(e.getId()==course.getId()) {
//				e.setTitle(course.getTitle());
//				e.setDescription(course.getDescription());
//			}
//		});
		coursesDao.save(course);
		return course;
	}

	@Override
	public void deleteCourse(long courseId) {
		
//		list = list.stream().filter(e->e.getId()!=courseId).collect(Collectors.toList());
		Courses entity = coursesDao.getOne(courseId);
		coursesDao.delete(entity);
	}
	
	

}
