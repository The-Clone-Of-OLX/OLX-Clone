package com.clone.olx.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CGreeting {

    @GetMapping("/greeting")
    public String greeting(Model model) {
        model.addAttribute("name", "World");
        return "greeting";
    }
}
