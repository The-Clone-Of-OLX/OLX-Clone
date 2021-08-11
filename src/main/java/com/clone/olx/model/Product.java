package com.clone.olx.model;

import com.clone.olx.enums.Category;
import com.clone.olx.enums.Currency;
import com.clone.olx.enums.Status;
import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

@Table(name = "product_details")
@Entity
@Getter
@Setter
@ToString
//@RequiredArgsConstructor
//@NoArgsConstructor
//@AllArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID productId;
    private String title;
    private BigDecimal price;
    private Currency currency;
    private Category category;
    private String description;
    private Status status;
    private UUID appUserId;
    @ElementCollection
    private List<UUID> photos;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Product product = (Product) o;

        return Objects.equals(productId, product.productId);
    }

    @Override
    public int hashCode() {
        return 2042274511;
    }
}
