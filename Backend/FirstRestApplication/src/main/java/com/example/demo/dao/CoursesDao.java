package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.entity.Courses;

public interface CoursesDao extends JpaRepository<Courses, Long> {

}
