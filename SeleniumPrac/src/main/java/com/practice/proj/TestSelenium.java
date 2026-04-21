package com.practice.proj;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class TestSelenium {
	
	    WebDriver driver;
	    RegistrationPage page;
	    Login login;

	    @BeforeClass // Runs once for the whole class
	    public void setUp() {
	        String url = "https://sauce-demo.myshopify.com/";
			/* System.setProperty("webdriver.chrome.driver", "./lib/chromedriver.exe"); */
	        driver = new ChromeDriver();
	        driver.manage().window().maximize();
	        driver.get(url);
	        
	        // Initialize pages once
	        page = new RegistrationPage(driver);
	        login = new Login(driver);
	    }

	    @Test(priority = 1)
	    public void registrationSuccessful() {
	        // Navigate to signup
	        driver.findElement(By.linkText("Sign up")).click();
	        page.enterData("Mayuri", "Powar", "mayuripowar1993@gmail.com", "123");
	        page.clickOnCreate();
	    }

	    @Test(priority = 2)
	    public void loginSuccessful() {
	        // Since we are already on the site from the last test, 
	        // just navigate to the login link
	        driver.findElement(By.linkText("Log In")).click();
	        login.enterCredentials("mayuripowar1993@gmail.com", "123");
	        login.clickLogin();
	    }

	    @AfterClass // Runs once after all tests are finished
	    public void closeMethod() {
	        if (driver != null) {
	            driver.quit();
	        }
	    }
	}

