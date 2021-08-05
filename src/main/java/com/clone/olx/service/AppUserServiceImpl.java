package com.clone.olx.service;

import com.clone.olx.model.AppUser;
import com.clone.olx.repository.AppUserRepository;
import com.clone.olx.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service @RequiredArgsConstructor @Transactional @Slf4j
public class AppUserServiceImpl implements AppUserService{
    private final AppUserRepository appUserRepository;
    private final ProductRepository productRepository;

    @Override
    public AppUser saveAppUser(AppUser appUser) {
        return null;
    }

    @Override
    public AppUser getAppUser(String username) {
        return null;
    }

    @Override
    public List<AppUser> getUsers() {
        return null;
    }
}
