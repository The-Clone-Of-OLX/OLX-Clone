package com.clone.olx.security.config;

import com.clone.olx.service.AppUserService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    private final AppUserService appUserService;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public WebSecurityConfig(AppUserService appUserService, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.appUserService = appUserService;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(daoAuthenticationProvider());
    }

    @Override
    public void configure(WebSecurity web) throws Exception {
        web
                .ignoring()
                .antMatchers("/resources/**", "**/static/**");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
       http
               .csrf().disable()
               .authorizeRequests()
                    .antMatchers("/assets/**", "/bootstrap/**", "/registration/**", "/user/**", "/greeting","/css/**", "/js/**", "/img/**", "/font/**", "/logos/**", "/home/**")
               .permitAll()
               .antMatchers("/**/static/**").authenticated()
               .anyRequest().authenticated()
               .and()
               .formLogin()
               .loginPage("/login").permitAll()
                   .usernameParameter("username")
                   .passwordParameter("password")
                   .defaultSuccessUrl("/home")
                   .permitAll();
    }

    @Bean
    public DaoAuthenticationProvider daoAuthenticationProvider(){
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setPasswordEncoder(bCryptPasswordEncoder);
        provider.setUserDetailsService(appUserService);
        return provider;
    }
}
