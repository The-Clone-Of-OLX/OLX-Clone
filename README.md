# ![black](https://user-images.githubusercontent.com/60079684/135493908-5cc231ce-57c8-4823-95c5-6b3ad611ab31.png) OLX-Clone

Group project in progress. A web app inspired by OLX. It allows user to browse through products for sell, create account and add own products.

[![Java CI with Maven](https://github.com/The-Clone-Of-OLX/OLX-Clone/actions/workflows/maven.yml/badge.svg)](https://github.com/The-Clone-Of-OLX/OLX-Clone/actions/workflows/maven.yml)

## Technologies used
Java, Spring Boot, PostgresSQL, Bootstrap 4, Thymeleaf, Maven

### [Demo app](https://the-olx-clone.herokuapp.com)

## Usage
To create your own database image - go to *docker* folder and run command:  ```docker-compose up```.\
In order to connect app to your datasource - go to *application.properties* file and paste your database credentials
```
spring.datasource.url=jdbc:postgresql://localhost:7432/olx_database
spring.datasource.username=olx_user
spring.datasource.password=AhSYYiJpjPAqqFb1jtShHPIbbjI9tsbgOoVDixdYXdNQZCC1zMa++A==
```

## Authors
* [Hubert Nakielski](https://github.com/nakielsh)
* [Sameer Jha](https://github.com/sameerjha18)
* [Martyna Jakubowska](https://github.com/mjakubowska)

