package stepdefinition;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PageObjects {

	WebDriver driver;

	public PageObjects(WebDriver driver) {

		this.driver = driver;
		// This initElements method will create all WebElements
		PageFactory.initElements(driver, this);

	}

	@FindBy(id="worrior_username")
	WebElement username;

	@FindBy(id="warrior")
	WebElement createWarriorBtn;

	@FindBy(id="start")
	WebElement startBtn;

	@FindBy(id="news")
	WebElement newsGameBtn;

	@FindBy(id="bus")
	WebElement busGameBtn;

	@FindBy(id="restaurant")
	WebElement restaurantGameBtn;

	@FindBy(id="office")
	WebElement officeGameBtn;

	@FindBy(id="answer_1")
	WebElement answer1Btn;

	@FindBy(id="answer_2")
	WebElement answer2Btn;

	@FindBy(id="continue")
	WebElement continueBtn;

	@FindBy(id="close_modal_btn_2")
	WebElement closeModalBtn;

	@FindBy(id="retry")
	WebElement retryBtn;

	@FindBy(id="bus_timer_start")
	WebElement busTimerStartBtn;

	@FindBy(id="close_correct_modal_btn")
	WebElement closeCorrectModalBtn;

	@FindBy(id="leaderboard_link")
	WebElement leaderBoardLinkBtn;

}
