package com.clone.olx.service;

import com.clone.olx.model.AppUser;
import com.clone.olx.model.AppUserData;
import com.clone.olx.requests.AppUserRequest;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface AppUserService extends UserDetailsService {
    UUID createAppUser(AppUserRequest request);

    AppUser saveAppUser(AppUser appUser);

    void signUpUser(AppUser appUser);

    Optional<AppUser> getAppUser(String username);

    Optional<AppUser> getAppUserByUUID(UUID uuid);

    void updateAppUser(UUID uuid, String country, String town, String phoneNumber) throws IllegalAccessException;

    List<AppUser> getUsers();

    String getUsername();

    UUID getUUID();

    void register(AppUserData appUserData);
}
