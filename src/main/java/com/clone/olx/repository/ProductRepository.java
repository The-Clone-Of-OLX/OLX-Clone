package com.clone.olx.repository;

import com.clone.olx.enums.Category;
import com.clone.olx.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByCategory(Category category);
    List<Product> findByTitleContains(String title);
    List<Product> findByUser_register_idEquals(Long user_register_id);
}
