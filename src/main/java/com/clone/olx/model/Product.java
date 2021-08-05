package com.clone.olx.model;

import com.clone.olx.enums.Category;
import com.clone.olx.enums.Currency;
import com.clone.olx.enums.Status;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID product_id;
    private String title;
    private BigDecimal price;
    private Currency currency;
    private Category category;
    private String description;
    private Status status;
    private UUID app_user_id;
    @ElementCollection
    private List<UUID> photos;
}
