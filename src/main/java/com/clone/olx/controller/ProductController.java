package com.clone.olx.controller;

import com.clone.olx.enums.Category;
import com.clone.olx.enums.Currency;
import com.clone.olx.enums.Status;
import com.clone.olx.model.Product;
import com.clone.olx.service.AppUserService;
import com.clone.olx.service.ProductService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.math.BigDecimal;
import java.util.UUID;

@Controller
@RequestMapping("/product")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    //test method
    @GetMapping("/{uuid}")
    public String showProduct(@PathVariable String uuid, Model model) {
        UUID productUUID = UUID.fromString(uuid);
//        Product product = productService.getProductById(productUUID);
//        model.addAttribute("product", product);
//        model.addAttribute("title", product.getTitle());
        model.addAttribute("product1", new Product(
                UUID.fromString("5bd1e73d-d99e-4330-9c07-6cbed90b4329"),
                "BMW 420d",
                BigDecimal.valueOf(5000),
                Currency.EUR,
                Category.Cars,
                "BMW 420d for sale",
                Status.AVAILABLE));

        return "product-page";
    }
}
