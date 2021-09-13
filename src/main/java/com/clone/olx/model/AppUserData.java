package com.clone.olx.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.NumberFormat;

import javax.persistence.Column;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import java.io.Serializable;

@Getter
@Setter
public class AppUserData implements Serializable {

    @NotBlank(message = "First name can not be empty")
    private String firstName;
    @NotEmpty(message = "Last name can not be empty")
    private String lastName;
    @NotBlank(message = "Username can not be empty")
    private String username;
    @NotEmpty(message = "Password can not be empty")
    private String password;
    private String country;
    private String town;
    private String phoneNumber;
    @NotEmpty(message = "Email can not be empty")
    @Email(message = "Please provide  valid email")
    private String email;

}
