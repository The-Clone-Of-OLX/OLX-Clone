package com.clone.olx.controller;

import com.clone.olx.enums.Category;
import com.clone.olx.enums.Currency;
import com.clone.olx.enums.Status;
import com.clone.olx.model.Product;
import com.clone.olx.service.AppUserService;
import com.clone.olx.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import static com.clone.olx.enums.Status.AVAILABLE;


@Controller
@RequestMapping("/home")
public class HomeController {

    @Autowired
    private final AppUserService appUserService;
    private final ProductService productService;

    public HomeController(ProductService productService, AppUserService appUserService) {
        this.appUserService = appUserService;
        this.productService = productService;
    }


    //    @RequestMapping(method = RequestMethod.GET)
    @GetMapping("")
    public String home(Model model, ModelMap modelMap) {

        model.addAttribute("user", appUserService.getUsername());
        List<Product> list=new ArrayList<>();
        Product showedProduct = new Product(
                UUID.fromString("5bd1e73d-d99e-4330-9c07-6cbed90b4329"),
                "BMW 420d",
                BigDecimal.valueOf(5000),
                Currency.EUR,
                Category.Cars,
                "Wystawiam na sprzedaż BMW serii 4 420d Modern Line. \n" +
                        "Samochód kupiony w październiku 2020 od osoby prywatnej.\n" +
                        "Samochód używany przez osobę prywatną, garażowany, serwisowany w M-Service Serwis samochodów BMW w Czerwinie. \n" +
                        "Ostatni przegląd wykonany w maju 2021r. (wymiana oleju oraz piasty). \n" +
                        "W październiku 2020r. przy przebiegu 220 000 km wymieniono tarcze i klocki hamulcowe, rozrząd oraz wykonano pełny serwis olejowy. \n" +
                        "Samochód bez wkładu finansowego. Sprzedaję jako osoba prywatna.",
                AVAILABLE,
                UUID.fromString("3ebca2c6-80e4-40c8-8e67-1911ab85ab31"));

        Product showedProduct1 = new Product(
                UUID.fromString("9a761084-e100-4061-b4e1-1fd1a23852f7"),
                "BMW 7 Series",
                BigDecimal.valueOf(5000),
                Currency.EUR,
                Category.Cars,
                "Wystawiam na sprzedaż BMW serii 4 420d Modern Line. \n" +
                        "Samochód kupiony w październiku 2020 od osoby prywatnej.\n" +
                        "Samochód używany przez osobę prywatną, garażowany, serwisowany w M-Service Serwis samochodów BMW w Czerwinie. \n" +
                        "Ostatni przegląd wykonany w maju 2021r. (wymiana oleju oraz piasty). \n" +
                        "W październiku 2020r. przy przebiegu 220 000 km wymieniono tarcze i klocki hamulcowe, rozrząd oraz wykonano pełny serwis olejowy. \n" +
                        "Samochód bez wkładu finansowego. Sprzedaję jako osoba prywatna.",
                AVAILABLE,
                UUID.fromString("3ebca2c6-80e4-40c8-8e67-1911ab85ab31"));

        Product showedProduct2 = new Product(
                UUID.fromString("9a761084-e100-4061-b4e1-1fd1a23852f7"),
                "BMW Z4",
                BigDecimal.valueOf(5000),
                Currency.EUR,
                Category.Cars,
                "Wystawiam na sprzedaż BMW serii 4 420d Modern Line. \n" +
                        "Samochód kupiony w październiku 2020 od osoby prywatnej.\n" +
                        "Samochód używany przez osobę prywatną, garażowany, serwisowany w M-Service Serwis samochodów BMW w Czerwinie. \n" +
                        "Ostatni przegląd wykonany w maju 2021r. (wymiana oleju oraz piasty). \n" +
                        "W październiku 2020r. przy przebiegu 220 000 km wymieniono tarcze i klocki hamulcowe, rozrząd oraz wykonano pełny serwis olejowy. \n" +
                        "Samochód bez wkładu finansowego. Sprzedaję jako osoba prywatna.",
                AVAILABLE,
                UUID.fromString("3ebca2c6-80e4-40c8-8e67-1911ab85ab31"));

        Product showedProduct3 = new Product(
                UUID.fromString("9a761084-e100-4061-b4e1-1fd1a23852f7"),
                "AUDI RS5",
                BigDecimal.valueOf(7000),
                Currency.EUR,
                Category.Cars,
                "Wystawiam na sprzedaż BMW serii 4 420d Modern Line. \n" +
                        "Samochód kupiony w październiku 2020 od osoby prywatnej.\n" +
                        "Samochód używany przez osobę prywatną, garażowany, serwisowany w M-Service Serwis samochodów BMW w Czerwinie. \n" +
                        "Ostatni przegląd wykonany w maju 2021r. (wymiana oleju oraz piasty). \n" +
                        "W październiku 2020r. przy przebiegu 220 000 km wymieniono tarcze i klocki hamulcowe, rozrząd oraz wykonano pełny serwis olejowy. \n" +
                        "Samochód bez wkładu finansowego. Sprzedaję jako osoba prywatna.",
                AVAILABLE,
                UUID.fromString("3ebca2c6-80e4-40c8-8e67-1911ab85ab31"));

        list.add(showedProduct);
        list.add(showedProduct1);
        list.add(showedProduct2);
        list.add(showedProduct3);

        model.addAttribute("products", list);

        return "home";
    }
}
