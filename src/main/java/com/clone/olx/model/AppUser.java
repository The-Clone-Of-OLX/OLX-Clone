package com.clone.olx.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity @Data @NoArgsConstructor @AllArgsConstructor
public class AppUser {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long user_register_id;
    private String f_name;
    private String l_name;
    private String username;
    private String password;

    private String country;
    private String town;
    private int phone_number;
    private String email;
    private byte[] photo;
    @ElementCollection
    private List<Integer> liked_products;
}
