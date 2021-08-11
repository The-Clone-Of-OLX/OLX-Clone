package com.clone.olx.controller;

import com.clone.olx.model.AppUser;
import com.clone.olx.requests.AppUserRequest;
import com.clone.olx.service.AppUserService;
import com.clone.olx.service.AppUserServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/user")
//@Controller
@Transactional
@Slf4j
public class AppUserController {
    private final AppUserService appUserService;

    public AppUserController(AppUserService appUserService) {
        this.appUserService = appUserService;
    }

//    @GetMapping("/appusers")
//    public String getAppUsers(Model model){
//        model.addAttribute("userList",appUserService.getUsers() );
//        return "appusers";
//    }

    @GetMapping("/appusers")
    @ResponseStatus(HttpStatus.OK)
    public List<AppUser> getAppusers() {
        return appUserService.getUsers();
    }

    @PostMapping("/add-appuser")
    @ResponseStatus(HttpStatus.CREATED)
    public int createAppUser(@RequestBody AppUserRequest appUserRequest) {
        UUID appUserId = appUserService.createAppUser(appUserRequest);
        return 3121;
    }
}
