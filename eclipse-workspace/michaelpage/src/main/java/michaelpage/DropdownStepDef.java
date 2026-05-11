package michaelpage;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class DropdownStepDef {

	 WebDriver driver=new ChromeDriver();
	 
	 @Given("the user is in home page")
	 public void the_user_is_in_home_page() {
		 driver.get("https://www.michaelpage.co.in/");
	 }

	@When("the user clicks on salary min dropdown")
	public void the_user_clicks_on_salary_min_dropdown() {
		
		// Write code here that turns the phrase above into concrete actions
		WebElement dropdownElement = driver.findElement(By.id("edit-field-job-salary-min"));

		// Scroll the element into view using JavaScript
		((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", dropdownElement);

		// Now try the select logic
		Select dropdown = new Select(dropdownElement);
		dropdown.selectByValue("100");
		
	}

	@Then("User should see the dropdown  values in lacs")
	public void user_should_see_the_dropdown_values_in_lacs() {
	   
	}

}
