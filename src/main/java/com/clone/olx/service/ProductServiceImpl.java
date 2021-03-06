package com.clone.olx.service;

import com.clone.olx.enums.Category;
import com.clone.olx.model.Product;
import com.clone.olx.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class ProductServiceImpl implements ProductService {
    private final ProductRepository productRepository;

    @Override
    public Product saveProduct(Product product) {
        productRepository.saveProduct(
                product.getProductId().toString(),
                product.getTitle(),
                product.getPrice(),
                product.getCurrency().toString(),
                product.getCategory().toString(),
                product.getDescription(),
                product.getAppUserId().toString()
        );
        return productRepository.findProductByProductId(UUID.fromString("2158edbb-97d6-4740-949c-e7180a7730f7"));
    }

    @Override
    public Product getProductById(UUID productId) {
        return productRepository.findProductByProductId(productId);
    }

    @Override
    public List<Product> getProductsByTitle(String title) {
        return productRepository.findByTitleContains(title);
    }

    @Override
    public List<Product> getProductsByCategory(Category category) {
        return productRepository.findByCategory(category);
    }

    @Override
    public List<Product> getProductsByAppUserId(UUID appUserId) {
        return null;
    }

    @Override
    public Iterable<Product> findAll() {
        return productRepository.findAll();
    }

}
