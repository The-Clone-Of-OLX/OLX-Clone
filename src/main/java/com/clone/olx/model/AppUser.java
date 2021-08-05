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
    private UUID app_user_id;
    private String f_name;
    private String l_name;
    private String username;
    private String password;

    private String country;
    private String town;
    private String phone_number;
    private String email;
    @ElementCollection
    private List<UUID> liked_products;
    private UUID avatar;
}
