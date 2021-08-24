package com.clone.olx.repository;

import com.clone.olx.enums.Category;
import com.clone.olx.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface ProductRepository extends JpaRepository<Product, UUID> {
    List<Product> findByCategory(Category category);
    List<Product> findByTitleContains(String title);
    Product findProductByProductId(UUID id);
//    List<Product> findByApp_user_id(UUID appUserId);
}
