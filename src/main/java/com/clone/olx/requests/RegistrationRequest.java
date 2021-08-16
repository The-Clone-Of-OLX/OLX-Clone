package com.clone.olx.requests;

import com.sun.istack.NotNull;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.lang.Nullable;

@RequiredArgsConstructor
@Getter
@Setter
public class RegistrationRequest {

    @ApiModelProperty(example = "Jan", required = true)
    @NotNull
    private String firstName;

    @ApiModelProperty(example = "Kowalski", required = true)
    @NotNull
    private String lastName;

    @ApiModelProperty(example = "JanKowalski", required = true)
    @NotNull
    private String username;

    @ApiModelProperty(example = "*********", required = true)
    @NotNull
    private String password;

    @ApiModelProperty(example = "Poland")
    @Nullable
    private String country;

    @ApiModelProperty(example = "Warsaw")
    @Nullable
    private String town;

    @ApiModelProperty(example = "662458745")
    @Nullable
    private String phoneNumber;

    @ApiModelProperty(example = "jankowalski@gmail.com", required = true)
    @NotNull
    private String email;

    public RegistrationRequest(String firstName, String lastName, String username, String password, String email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.email = email;
    }

    @Override
    public String toString() {
        return "RegistrationRequest{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", country='" + country + '\'' +
                ", town='" + town + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
