package com.clone.olx.model;

import com.clone.olx.enums.Category;
import com.clone.olx.enums.Currency;
import com.clone.olx.enums.Status;
import lombok.*;
import org.hibernate.Hibernate;
import org.hibernate.annotations.Type;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import java.math.BigDecimal;
import java.text.DateFormat;
import java.util.*;

@Table(name = "product_details")
@Entity
@Getter
@Setter
@ToString
@RequiredArgsConstructor
//@RequiredArgsConstructor
//@NoArgsConstructor
//@AllArgsConstructor
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

    public Product(UUID productId, String title, BigDecimal price, Currency currency, Category category, String description, Status status, UUID appUserId) {
        this.productId = productId;
        this.title = title;
        this.price = price;
        this.currency = currency;
        this.category = category;
        this.description = description;
        this.status = status;
        this.appUserId = appUserId;
    }
}
