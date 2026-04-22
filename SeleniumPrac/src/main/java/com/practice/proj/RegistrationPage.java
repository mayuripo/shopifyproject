package com.practice.proj;

import java.io.File;
import java.text.SimpleDateFormat;
import java.time.Duration;
import java.util.Date;

import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.io.FileHandler;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.Test;

public class RegistrationPage {
WebDriverWait wait;
WebDriver driver;
	public RegistrationPage(WebDriver driver) {
		// TODO Auto-generated constructor stub
		this.driver=driver;
		wait=new WebDriverWait(driver, Duration.ofSeconds(1000));
	}

	public static void captureScreen(WebDriver driver, String screenshotName) throws Exception {
	    String timeStamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(new Date());
	    TakesScreenshot ts = (TakesScreenshot) driver;
	    File source = ts.getScreenshotAs(OutputType.FILE);
	    
	    // Ensure the directory exists
	    File directory = new File("./photo/");
	    if (!directory.exists()) directory.mkdirs();

	    File dst = new File("./photo/" + screenshotName + "_" + timeStamp + ".png");
	    org.openqa.selenium.io.FileHandler.copy(source, dst);
	}
	public void enterData(String firstname, String lastname, String email, String password) throws Exception {
		// TODO Auto-generated method stub
		WebElement element = wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("customer[first_name]")));
		element.sendKeys(firstname);

		element = driver.findElement(By.name("customer[last_name]"));
		element.sendKeys(lastname);

		element = driver.findElement(By.name("customer[email]"));
		element.sendKeys(email);

		element = driver.findElement(By.name("customer[password]"));
		element.sendKeys(password);
		
	    captureScreen(driver, lastname);
	   
	}
		


	public void clickOnCreate() {
		// TODO Auto-generated method stub
		WebElement submitBtn = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//input[contains(@value, 'Create')]")));
		submitBtn.click();
	}
}
