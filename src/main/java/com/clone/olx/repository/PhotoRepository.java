package com.clone.olx.repository;

import com.clone.olx.model.AppUser;
import com.clone.olx.model.Photo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface PhotoRepository extends JpaRepository<Photo, UUID> {
}
