package com.clone.olx.requests;

import com.sun.istack.NotNull;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AppUserRequest {

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

    @ApiModelProperty(example = "Poland", required = true)
    @NotNull
    private String country;

    @ApiModelProperty(example = "Warsaw", required = true)
    @NotNull
    private String town;

    @ApiModelProperty(example = "662458745", required = true)
    @NotNull
    private String phoneNumber;

    @ApiModelProperty(example = "jankowalski@gmail.com", required = true)
    @NotNull
    private String email;

    public AppUserRequest() {

    }

    public AppUserRequest(String firstName, String lastName, String username, String password, String country, String town, String phoneNumber, String email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.country = country;
        this.town = town;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    @Override
    public String toString() {
        return "AppUserRequest{" +
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
