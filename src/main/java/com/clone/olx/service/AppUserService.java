package com.clone.olx.service;

import com.clone.olx.model.AppUser;
import com.clone.olx.requests.AppUserRequest;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface AppUserService {
    UUID createAppUser(AppUserRequest request);

    AppUser saveAppUser(AppUser appUser);

    Optional<AppUser> getAppUser(String username);

    List<AppUser> getUsers();
}
