package com.practice.proj;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.time.Duration;
import java.util.Date;
import java.util.logging.FileHandler;

import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
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
	

	
	
	
		// TODO Auto-generated method stub
		public void enterCredentials(String email, String pwd, String stepName) throws IOException {
		    // 1. Locate and fill Email
		    WebElement emailField = wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("customer[email]")));
		    emailField.clear();
		    emailField.sendKeys(email);

		    // 2. Locate and fill Password
		    WebElement passField = driver.findElement(By.name("customer[password]"));
		    passField.clear();
		    passField.sendKeys(pwd);

		    // 3. Create unique timestamp for the filename
		    String timeStamp = new java.text.SimpleDateFormat("yyyyMMdd_HHmmssSS").format(new java.util.Date());

		    // 4. Capture Screenshot
		    TakesScreenshot ts = (TakesScreenshot) driver;
		    File source = ts.getScreenshotAs(OutputType.FILE);

		    // 5. Save with a unique name (StepName + Timestamp)
		    File dst = new File("./photo/" + stepName + "_" + timeStamp + ".png");
		    
		    // Ensure directory exists before copying
		    dst.getParentFile().mkdirs(); 
		    
		    org.openqa.selenium.io.FileHandler.copy(source, dst);
		    
		    System.out.println("Screenshot saved to: " + dst.getPath());
		}
        
	
	public void clickLogin() {
		// TODO Auto-generated method stub
		WebElement submitBtn = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//input[contains(@value, 'Sign In')]")));
		submitBtn.click();
	}

}
