package com.george.dev.passwordgenerator.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by George on 16/11/2018
 */

@Controller
public class HomeController {

    @RequestMapping({"/","/index"})
    public String indexPage(){
        return "index";
    }
}
