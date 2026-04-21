package com.practice.proj;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Login {

WebDriver driver;
WebDriverWait wait;
	public Login(WebDriver driver) {
		// TODO Auto-generated constructor stub
		this.driver=driver;
		wait=new WebDriverWait(driver, Duration.ofSeconds(1000));
	}

	

	
	public void enterCredentials(String email, String pwd) {
	
		// TODO Auto-generated method stub
		
		WebElement 	element=(WebElement) wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("customer[email]")));
		element.sendKeys(email);
        driver.findElement(By.name("customer[password]")).sendKeys(pwd);
	}
	public void clickLogin() {
		// TODO Auto-generated method stub
		WebElement submitBtn = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//input[contains(@value, 'Sign In')]")));
		submitBtn.click();
	}

}
