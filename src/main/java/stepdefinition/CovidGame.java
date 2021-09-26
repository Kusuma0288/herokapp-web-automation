package stepdefinition;

import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.Random;
import java.util.concurrent.TimeUnit;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CovidGame {

	Properties prop = new Properties();
	FileInputStream fis;
	WebDriver driver;
	PageObjects pageObjects;

	//Load ObjectRepository properties file to read the test data and element locators from application under test and also initialize the Chrome driver
	@Before
	public void setUp() throws IOException {
		fis = new FileInputStream("ObjectRepository.properties");

		prop.load(fis);

		System.setProperty("webdriver.chrome.driver", prop.getProperty("chromeDriverPath"));

		driver = new ChromeDriver();

		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	//Open the application url in chrome browser and load the page factory class

	@Given("^user navigated to automation practice webpage homepage$")
	public void user_navigated_home_page() {

		driver.get(prop.getProperty("applicationUrl"));

		driver.manage().window().maximize();

		pageObjects = new PageObjects(driver);

	}

	@Given("^user enters username and navigates to game page$")
	public void user_navigates_to_game_page() {

		String userName = "H" + generateRandomNumber();
		pageObjects.username.sendKeys(userName);
		pageObjects.createWarriorBtn.click();
		pageObjects.startBtn.click();

	}

	@And("^user takes the news game challenge$")
	public void user_takes_news_game_challenge() {

        pageObjects.newsGameBtn.click();
        pageObjects.startBtn.click();
        pageObjects.answer1Btn.click();
        pageObjects.continueBtn.click();

	}

	@And("^user answers a question wrongly$")
	public void user_answers_question_wrongly() {

		pageObjects.answer1Btn.click();
		pageObjects.closeModalBtn.click();

	}

	@And("^verify user lands on the home page$")
	public void verify_user_lands_on_home_page() {
		Assert.assertEquals("User is not navigated to home page","COVID-19 THE GAME", driver.getTitle());
	}

	@And("^user takes the bus game challenge and doesn't responds the first question within the time limit$")
	public void user_takes_bus_game_challenge() throws InterruptedException {

		pageObjects.busGameBtn.click();
		pageObjects.busTimerStartBtn.click();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

	}

	@And("^now the user goes for a retry and navigates to leaderboard$")
	public void user_retries_and_navigates_to_leaderboard() {
		pageObjects.retryBtn.click();
		pageObjects.answer1Btn.click();
		pageObjects.leaderBoardLinkBtn.click();
		//Assert the leaderboard title page

	}

	@And("^user navigates to game page from leaderboard$")
	public void user_navigates_to_game_page_from_leaderboard() {

		pageObjects.leaderBoardLinkBtn.click();

	}

	@And("^verify user navigated to game page$")
	public void verify_user_navigates_to_game_page() {

		//Assert the game title page
	}

	public static String generateRandomNumber() {
		Random rnd = new Random();
		int n = rnd.nextInt(900);
		return String.valueOf(n);
	}
	
	//close the chrome browser after the execution is completed
	@After
	public void tearDown()
	{
		driver.close();
	}

}
