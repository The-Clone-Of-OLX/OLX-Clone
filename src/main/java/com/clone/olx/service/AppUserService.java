package com.clone.olx.service;

import com.clone.olx.model.AppUser;

import java.util.List;

public interface AppUserService {
    AppUser saveAppUser(AppUser appUser);
    AppUser getAppUser(String username);
    List<AppUser> getUsers();
}
