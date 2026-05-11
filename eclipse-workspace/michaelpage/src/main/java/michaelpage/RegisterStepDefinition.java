package michaelpage;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

import org.apache.poi.EncryptedDocumentException;
import org.apache.poi.sl.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class RegisterStepDefinition {

	@Given("When the user is in sign up page")
	public void when_the_user_is_in_sign_up_page() {
	   System.out.println("user is already in signup page");
	}

	@When("the user enters registration details from Excel")
	public void the_user_enters_registration_details_from_excel() throws EncryptedDocumentException, IOException {
	   System.out.println("inside the the_user_enters_registration_details_from_excel()");
	   String path="C:\\Users\\MAYURI\\OneDrive\\Documents\\TestData.xlsx";
	   FileInputStream fis=new FileInputStream(new File(path));
	   Workbook book=WorkbookFactory.create(fis);
	    org.apache.poi.ss.usermodel.Sheet s=book.getSheetAt(0);//get the first sheet
	   System.out.println("sheet name"+s.getSheetName());
	   Row rowdata=s.getRow(0);//get the first row
	   String firstname=rowdata.getCell(1).getStringCellValue();
	   String lastname=rowdata.getCell(2).getStringCellValue();
	   String email=rowdata.getCell(3).getStringCellValue();
	   String confirmemail=rowdata.getCell(4).getStringCellValue();
	   String password=rowdata.getCell(5).getStringCellValue();
	   System.out.println("fs"+firstname);
	   WebDriver driver=new ChromeDriver();
	   WebElement ele=driver.findElement(By.id("edit-field-first-name-0-value"));
	   ele.sendKeys(firstname);
	   driver.findElement(By.id("edit-field-first-name-0-value"));
			   book.close();
			   fis.close();

	}

	@Then("Account should be created successfully")
	public void account_should_be_created_successfully() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

}
