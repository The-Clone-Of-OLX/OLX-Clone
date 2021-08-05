package com.clone.olx.service;

import com.clone.olx.enums.Category;
import com.clone.olx.model.Product;

import java.util.List;
import java.util.UUID;

public interface ProductService {
    Product saveProduct(Product product);
    Product getProductById(UUID id);
    List<Product> getProductsByTitle(String title);
    List<Product> getProductsByCategory(Category category);
    List<Product> getProductsByAppUserId(UUID id);
}
