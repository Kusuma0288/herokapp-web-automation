package testrunner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;

import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions
		(
				features="Feature"
				,monochrome=true,
				strict=true,
				glue= {"stepdefinition"},
				dryRun=false,

				format= {"pretty","html:test-output"}
				,tags= {"@REGRESSION"}

		)



public class TestRunner {


}
