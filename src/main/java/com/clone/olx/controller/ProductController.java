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

import java.util.UUID;

@Controller
@RequestMapping("/product")
public class ProductController {

    private final ProductService productService;
    private final AppUserService appUserService;

    public ProductController(ProductService productService, AppUserService appUserService) {
        this.productService = productService;
        this.appUserService = appUserService;
    }

    //test method
    @GetMapping("/{uuid}")
    public String showProduct(@PathVariable String uuid, Model model) {
        UUID productUUID = UUID.fromString(uuid);
        Product product = productService.getProductById(productUUID);
        model.addAttribute("product1", product);
        model.addAttribute("title", product.getTitle());
        model.addAttribute("user", appUserService.getAppUserByUUID(product.getAppUserId()));

        return "product-page";
    }
}
