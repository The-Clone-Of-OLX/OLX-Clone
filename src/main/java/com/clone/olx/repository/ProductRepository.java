package com.clone.olx.repository;

import com.clone.olx.enums.Category;
import com.clone.olx.enums.Currency;
import com.clone.olx.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ProductRepository extends JpaRepository<Product, UUID> {

    @Modifying
    @Query(value = "INSERT INTO public.product_details (product_id, title, price, currency, category, description, status, app_user_id, photos, posting_date) VALUES (:product_id\\:\\:UUID, :title, :price, :currency\\:\\:currency, :category\\:\\:category, :description, 'available'\\:\\:status, :app_user_id\\:\\:UUID, null, DEFAULT)", nativeQuery = true)
    void saveProduct(@Param("product_id") String product_id, @Param("title") String title, @Param("price") BigDecimal price, @Param("currency") String currency, @Param("category") String category, @Param("description") String description, @Param("app_user_id") String app_user_id);

    List<Product> findByCategory(Category category);

    List<Product> findByTitleContains(String title);

    Product findProductByProductId(UUID id);
//    List<Product> findByApp_user_id(UUID appUserId);
}
