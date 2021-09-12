package com.clone.olx.model;

import lombok.*;
import org.hibernate.Hibernate;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.util.*;

@Table(name = "app_user")
@Entity
@Getter
@Setter
@ToString
public class AppUser implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID appUserId;
    private String firstName;
    private String lastName;
    @Column(unique = true)
    private String username;
    private String password;
    private String country;
    private String town;
    private String phoneNumber;
    @Column(unique = true)
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

    public AppUser(UUID appUserId, String firstName, String lastName, String username, String password, String email) {
        this.appUserId = appUserId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.email = email;
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

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        SimpleGrantedAuthority authority = new SimpleGrantedAuthority("user");
        return Collections.singletonList(authority);
    }

    @Override
    public String getPassword() {
        return password;
    }

    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
