package com.clone.olx.repository;

import com.clone.olx.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface AppUserRepository extends JpaRepository<AppUser, UUID> {
    AppUser findByUsername(String username);
    AppUser findByApp_user_id(UUID appUserId);
}
