package com.clone.olx.controller;

import com.clone.olx.enums.Category;
import com.clone.olx.enums.Currency;
import com.clone.olx.model.Product;
import com.clone.olx.service.AppUserService;
import com.clone.olx.service.ProductService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Arrays;
import java.util.UUID;

@Controller
//@RequestMapping("/product")
public class ProductController {

    private final ProductService productService;
    private final AppUserService appUserService;

    public ProductController(ProductService productService, AppUserService appUserService) {
        this.productService = productService;
        this.appUserService = appUserService;
    }

    @GetMapping("/adding")
    public String addProduct(Model model) {
        Product product = new Product(appUserService.getUUID());
        product.setAppUserId(appUserService.getUUID());
        model.addAttribute("product", product);
        model.addAttribute("user", appUserService.getUsername());
        model.addAttribute("currencyList", Currency.values());
        model.addAttribute("categoryList", Category.values());
        return "adding-product";
    }

    @PostMapping("/success/product")
    public String successfulAdding(@Valid @ModelAttribute("product") Product product, Model model) {
        model.addAttribute("user", appUserService.getUsername());
        model.addAttribute("product", product);

        productService.saveProduct(product);

        model.addAttribute("product", product);
        return "successful-adding";
    }

    //test method
    @GetMapping("/product/{uuid}")
    public String showProduct(@PathVariable String uuid, Model model) {
        UUID productUUID = UUID.fromString(uuid);
        Product product = productService.getProductById(productUUID);
        model.addAttribute("product1", product);
        model.addAttribute("title", product.getTitle());
        model.addAttribute("productuser", appUserService.getAppUserByUUID(product.getAppUserId()));
        model.addAttribute("user", appUserService.getUsername());

        return "product-page";
    }
}
