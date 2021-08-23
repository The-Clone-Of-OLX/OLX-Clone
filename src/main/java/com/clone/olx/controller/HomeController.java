package com.clone.olx.controller;

import com.clone.olx.service.AppUserService;
import com.clone.olx.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @Autowired
    private final AppUserService appUserService;

    public HomeController(AppUserService appUserService) {
        this.appUserService = appUserService;
    }

    @GetMapping("/home")
    public String home(Model model){

        model.addAttribute("user", appUserService.getUsername());

        return "home";
    }
}
