package com.clone.olx.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;
import java.util.UUID;

@Entity @Data @NoArgsConstructor @AllArgsConstructor
public class AppUser {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID appUserId;
    private String firstName;
    private String lastName;
    private String username;
    private String password;

    private String country;
    private String town;
    private String phoneNumber;
    private String email;
    @ElementCollection
    private List<UUID> likedProducts;
    private UUID avatar;
}
