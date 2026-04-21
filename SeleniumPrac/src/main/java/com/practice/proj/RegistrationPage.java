package com.practice.proj;

import java.io.File;
import java.io.IOException;
import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.io.FileHandler;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class RegistrationPage {
WebDriverWait wait;
WebDriver driver;
	public RegistrationPage(WebDriver driver) {
		// TODO Auto-generated constructor stub
		this.driver=driver;
		wait=new WebDriverWait(driver, Duration.ofSeconds(1000));
	}

	

	public void enterData(String firstname, String lastname, String email, String password) {
		// TODO Auto-generated method stub
		WebElement element = wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("customer[first_name]")));
		element.sendKeys(firstname);

		element = driver.findElement(By.name("customer[last_name]"));
		element.sendKeys(lastname);

		element = driver.findElement(By.name("customer[email]"));
		element.sendKeys(email);

		element = driver.findElement(By.name("customer[password]"));
		element.sendKeys(password);
		TakesScreenshot scrShot = ((TakesScreenshot) driver);

	    // 2. Call getScreenshotAs method to create image file
	    File srcFile = scrShot.getScreenshotAs(OutputType.FILE);
String path="./photo";
	    // 3. Move image file to new destination
	    File destFile = new File(path);
	    try {
	        FileHandler.copy(srcFile, destFile);
	        System.out.println("Screenshot saved: " + destFile.getAbsolutePath());
	    } catch (IOException e) {
	        e.printStackTrace();
	    }
	}
		


	public void clickOnCreate() {
		// TODO Auto-generated method stub
		WebElement submitBtn = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//input[contains(@value, 'Create')]")));
		submitBtn.click();
	}
}
