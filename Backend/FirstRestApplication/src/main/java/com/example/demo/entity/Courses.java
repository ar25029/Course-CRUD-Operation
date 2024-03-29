package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Courses {
	
	@Id
	private long id;
	private String title;
	private String description;
	private int price;
	
	public Courses(long id, String title, String description, int price) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.price=price;
		
	}

	public Courses() {
		super();
		// TODO Auto-generated constructor stub
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	public int getPrice() {
		return price;
	}
	
	public void setPrice(int price) {
		this.price=price;
	}

	@Override
	public String toString() {
		return "Courses [id=" + id + ", title=" + title + ", description=" + description +", price="+price+ "]";
	}
}
