package com.clone.olx.model;

import com.clone.olx.enums.Category;
import com.clone.olx.enums.Currency;
import com.clone.olx.enums.Status;
import lombok.*;
import org.hibernate.Hibernate;

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
    private Currency currency;
    private Category category;
    private String description;
    private Status status;
    private UUID appUserId;
    @ElementCollection
    private List<UUID> photos;

    @Transient
    Locale locale = new Locale("en", "PL");
    @Transient
    DateFormat dateFormat = DateFormat.getDateInstance(DateFormat.DEFAULT, locale);
    @Transient
    String date = dateFormat.format(new Date());

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
