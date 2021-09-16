package com.clone.olx.controller;

import com.clone.olx.model.AppUser;
import com.clone.olx.model.AppUserData;
import com.clone.olx.service.AppUserService;
import com.clone.olx.service.AppUserServiceImpl;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;

@Controller
@RequestMapping("")
@SessionAttributes("appUserData")
public class RegistrationController {

    private final AppUserService appUserService;

    public RegistrationController(AppUserService appUserService) {
        this.appUserService = appUserService;
    }

    @ModelAttribute("appUserData")
    public AppUserData appUserData() {
        return new AppUserData();
    }

    @GetMapping("/registration")
    public String showRegistrationForm(@ModelAttribute("appUserData") AppUserData appUserData, Model model) {
        model.addAttribute("appUserData", new AppUserData());
        return "registration-form";
    }

    @PostMapping("/registration")
    public String submitRegistrationForm(@Valid @ModelAttribute("appUserData") AppUserData appUserData,
                                         final BindingResult bindingResult, RedirectAttributes attributes){
        if(bindingResult.hasErrors()){
            attributes.addFlashAttribute("appUserData", appUserData);
            return "/registration-form";
        }
        attributes.addFlashAttribute("appUserData", appUserData);
        return "registration-form-2";
    }


    @GetMapping("/registration2")
    public String showRegistrationForm2(ModelMap model) {
        return "registration-form-2";
    }

    @PostMapping("/registration2")
    public String submitRegistrationForm2(@Valid @ModelAttribute("appUserData") AppUserData appUserData,
                                          final BindingResult bindingResult, RedirectAttributes attributes){
        if(bindingResult.hasErrors()){
            attributes.addFlashAttribute("appUserData", appUserData);
            return "registration-form-2";
        }
        attributes.addFlashAttribute("appUserData", appUserData);

        return "login1"; //for now, need to finish register method in service
    }

    @PostMapping("/registration/success")
    public String processRegistration(@Validated AppUser appUser, RedirectAttributes redirectAttributes) {
        try {
            appUserService.updateAppUser(appUser.getAppUserId(),
                    appUser.getCountry(), appUser.getTown(), appUser.getPhoneNumber());
        } catch (Exception e) {
            redirectAttributes.addAttribute("registration-failed", true);
            return "redirect:/registration";
        }
        return "registration-success";
    }


}
