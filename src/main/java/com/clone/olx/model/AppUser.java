package com.clone.olx.model;

import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

@Table(name = "app_user")
@Entity
@Getter
@Setter
@ToString
//@RequiredArgsConstructor
//@NoArgsConstructor
//@AllArgsConstructor
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

    public AppUser(String firstName, String lastName, String username, String password, String country, String town, String phoneNumber, String email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.country = country;
        this.town = town;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    public AppUser() {

    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        AppUser appUser = (AppUser) o;

        return Objects.equals(appUserId, appUser.appUserId);
    }

    @Override
    public int hashCode() {
        return 741337932;
    }
}
