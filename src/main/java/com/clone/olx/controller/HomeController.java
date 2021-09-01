package com.clone.olx.controller;

import com.clone.olx.model.Product;
import com.clone.olx.service.AppUserService;
import com.clone.olx.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/home")
public class HomeController {

    @Autowired
    private final AppUserService appUserService;
    private final ProductService productService;

    public HomeController(ProductService productService, AppUserService appUserService) {
        this.appUserService = appUserService;
        this.productService = productService;
    }

    @GetMapping("")
    public String home(Model model, ModelMap modelMap) {

        model.addAttribute("user", appUserService.getUsername());

        List<Product> list = (List<Product>) productService.findAll();

        model.addAttribute("products", list);

        return "home";
    }
}
