package com.clone.olx.model;

import com.clone.olx.enums.Category;
import com.clone.olx.enums.Currency;
import com.clone.olx.enums.Status;
import lombok.*;
import org.hibernate.annotations.Type;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.*;

@Table(name = "product_details")
@Entity
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID productId;
    private String title;

    private BigDecimal price;

    @Enumerated(EnumType.STRING)
    private Currency currency;

    @Enumerated(EnumType.STRING)
    private Category category;

    private String description;

    @Enumerated(EnumType.STRING)
    private Status status;

    private UUID appUserId;

    @ElementCollection
    @Nullable
    private List<UUID> photos;

    @Type(type = "date")
    private Date postingDate;

    public String getTitle() {
        return title;
    }

    public Product(UUID productId, String title, BigDecimal price, String currency, String category, String description, Status status, UUID appUserId) {
//        this.productId = productId;
        this.title = title;
        this.price = price;
        this.currency = Currency.valueOf(currency);
        this.category = Category.valueOf(category);
        this.description = description;
        this.status = status;
        this.appUserId = appUserId;
    }

    public Product(UUID appUserId) {
        this.productId = UUID.randomUUID();
        this.appUserId = appUserId;
    }

    public void setCurrency(String currency) {
        this.currency = Currency.valueOf(currency);
    }

    public void setCategory(String category) {
        this.category = Category.valueOf(category);
    }
}
