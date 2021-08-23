package com.clone.olx.service;

import com.clone.olx.model.AppUser;
import com.clone.olx.repository.AppUserRepository;
import com.clone.olx.requests.AppUserRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@Transactional
@Slf4j
public class AppUserServiceImpl implements AppUserService {
    private final AppUserRepository appUserRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    private final static String USER_NOT_FOUND_MSG = "User with username %s not found";

    public AppUserServiceImpl(AppUserRepository appUserRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.appUserRepository = appUserRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    //for rest controller
    @Override
    public UUID createAppUser(AppUserRequest request) {
        AppUser newAppUser = new AppUser(
                request.getFirstName(),
                request.getLastName(),
                request.getUsername(),
                request.getPassword(),
                request.getCountry(),
                request.getTown(),
                request.getPhoneNumber(),
                request.getEmail()
        );

        AppUser savedAppUser = appUserRepository.save(newAppUser);
        return savedAppUser.getAppUserId();
    }

    @Override
    public AppUser saveAppUser(AppUser appUser) {
        return appUserRepository.save(appUser);
    }

    @Override
    public Optional<AppUser> getAppUser(String username) {
        return appUserRepository.findByUsername(username);
    }

    @Override
    public Optional<AppUser> getAppUserByUUID(UUID uuid) {
        return appUserRepository.findById(uuid);
    }

    @Override
    public List<AppUser> getUsers() {
        return appUserRepository.findAll();
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return appUserRepository.findByUsername(username).orElseThrow(() ->
                new UsernameNotFoundException(
                        String.format(USER_NOT_FOUND_MSG, username)));
    }

    @Override
    public String signUpUser(AppUser appUser) {
        boolean userExists = appUserRepository
                .findByUsername(appUser.getUsername())
                .isPresent();
        if (userExists) {
            throw new IllegalStateException("Username already taken");
        }

        String encodedPassword = bCryptPasswordEncoder
                .encode(appUser.getPassword());

        appUser.setPassword(encodedPassword);

        appUserRepository.save(appUser);
        return "";
    }

    @Override
    public String getUsername() {
        SecurityContext securityContext = SecurityContextHolder.getContext();
        AppUser principal;
        String username;
        String name = "";
        if (null != securityContext.getAuthentication()) {
            principal = (AppUser) securityContext.getAuthentication().getPrincipal();
            username = securityContext.getAuthentication().getName();
            name = principal.getFirstName() + " " + principal.getLastName() + " (" + username + ") ";
        }
        return name;
    }

    @Override
    public UUID getUUID() {
        SecurityContext securityContext = SecurityContextHolder.getContext();
        AppUser principal;
        UUID id = null;

        if (null != securityContext.getAuthentication()) {
            principal = (AppUser) securityContext.getAuthentication().getPrincipal();
            id = principal.getAppUserId();
        }
        return id;
    }

}
