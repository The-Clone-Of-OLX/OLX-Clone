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
public class RegistrationController {

    private final AppUserService appUserService;

    public RegistrationController(AppUserService appUserService) {
        this.appUserService = appUserService;
    }

    @GetMapping("/registration")
    public String showRegistrationForm(Model model) {
        model.addAttribute("appUserData", new AppUserData());
        return "registration-form";
    }

    @PostMapping("/registration")
    public String submitRegistrationForm(@Valid AppUserData appUserData, final BindingResult bindingResult, final Model model){
        model.addAttribute("registration-form", appUserData);
        if(bindingResult.hasErrors()){
            //model.addAttribute("registration-form", appUserData);
            return "/registration-form";
        }
        //model.addAttribute("registration-form", appUserData);
        return "registration-form-2";
    }


//    @PostMapping("/registration2")
//    public String showRegistrationForm2(Model model, @Validated AppUser appUser, RedirectAttributes redirectAttributes) {
//        model.addAttribute("app_user", appUser);
//        try {
//            appUserService.signUpUser(appUser);
//        } catch (Exception e) {
//            redirectAttributes.addAttribute("registration-failed", true);
//            return "redirect:/registration";
//        }
//        return "registration-form-2";
//    }

    @GetMapping("/registration2")
    public String showRegistrationForm2(Model model, @Valid AppUserData appUserData) {
        model.addAttribute("appUserData", appUserData);
        return "registration-form-2";
    }

    @PostMapping("/registration2")
    public String submitRegistrationForm2(final BindingResult bindingResult, final Model model, AppUserData appUserData){
        if(bindingResult.hasErrors()){
            model.addAttribute("registrationForm", appUserData);
            return "registration-form-2";
        }
        model.addAttribute("registrationForm", appUserData);
        return "login1"; //for now
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
