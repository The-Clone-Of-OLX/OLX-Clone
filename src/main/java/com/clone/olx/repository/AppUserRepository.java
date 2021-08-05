package com.clone.olx.repository;

import com.clone.olx.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppUserRepository extends JpaRepository<AppUser, Long> {
    AppUser findByUsername(String username);
    AppUser findByUser_register_id(String user_register_id);
}
