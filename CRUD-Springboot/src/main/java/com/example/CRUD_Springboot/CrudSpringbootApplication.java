package com.example.CRUD_Springboot;

import controller.UserController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EntityScan(basePackages = "model")
@EnableJpaRepositories(basePackages = {"repository"})
@ComponentScan(basePackages = {"controller", "repository", "model", "exceptions"})
public class CrudSpringbootApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringbootApplication.class, args);
	}

}
