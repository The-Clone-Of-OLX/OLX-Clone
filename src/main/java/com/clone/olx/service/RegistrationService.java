package com.clone.olx.service;

import com.clone.olx.model.AppUser;
import com.clone.olx.requests.AppUserRequest;
import com.clone.olx.requests.RegistrationRequest;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class RegistrationService {

    private final AppUserServiceImpl appUserService;

    public RegistrationService(AppUserServiceImpl appUserService) {
        this.appUserService = appUserService;
    }


    public UUID register(AppUserRequest request) {
        return appUserService.createAppUser(request);
    }
}
