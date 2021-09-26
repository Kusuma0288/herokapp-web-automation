$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AddItemsToCart.feature");
formatter.feature({
  "line": 1,
  "name": "AddItemsToCart in automationpractice site",
  "description": "",
  "id": "additemstocart-in-automationpractice-site",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4719072171,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "I want to be able to add 2 items to the cart and place an order",
  "description": "",
  "id": "additemstocart-in-automationpractice-site;i-want-to-be-able-to-add-2-items-to-the-cart-and-place-an-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user navigated to automationpractice webpage homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user adds two items to cart and proceed to checkout",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user logged into application with valid emailid and password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user pays by check and click on confirm order",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "verify if the order is placed successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "AddItemsToCart.user_navigated_to_automationpractice_webpage_homepage()"
});
formatter.result({
  "duration": 10210798304,
  "status": "passed"
});
formatter.match({
  "location": "AddItemsToCart.user_adds_two_items_to_cart_and_proceed_to_checkout()"
});
formatter.result({
  "duration": 161343777,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"h5 a[title\u003d\u0027Printed Chiffon Dress\u0027]\"}\n  (Session info: chrome\u003d80.0.3987.122)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027POORNASOWJI-PC\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\POORNA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:53210}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 7eb25bca83b448effcf58ad92fcf9e02\n*** Element info: {Using\u003dcss selector, value\u003dh5 a[title\u003d\u0027Printed Chiffon Dress\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.findElement(RemoteWebElement.java:185)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.findElementByCssSelector(RemoteWebElement.java:253)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.findElement(RemoteWebElement.java:181)\r\n\tat stepdefinition.AddItemsToCart.user_adds_two_items_to_cart_and_proceed_to_checkout(AddItemsToCart.java:64)\r\n\tat ✽.When user adds two items to cart and proceed to checkout(AddItemsToCart.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AddItemsToCart.user_logged_into_application_with_valid_emailid_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddItemsToCart.user_pays_by_check_and_click_on_confirm_order()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddItemsToCart.verify_if_the_order_is_placed_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 153693577,
  "status": "passed"
});
});