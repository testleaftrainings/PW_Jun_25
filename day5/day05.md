
Week3.day1

09:00 - 09.45 -> DropDown
09:45 - 10:10 -> Breakout+Break
10:10 - 10:45 -> Playwright locators
10:45 - 11:45 -> Xpath
11:45 - 12:15 -> Breakout + Break
12:15 - 01:00 -> Advance Xpath & Assertion 

CSS Selectors
Universal Selector ()*: Selects all elements within a page.

Class Selector (.className): Selects all elements with a specific class.

ID Selector (#idName): Selects a single element with a specific ID.

Name Selector([name='value'])

Text => [text='textValue']

Css:

frist()-> choose first value
last()-> choos last value
nth()-> choose the value inbetween nth-> index value start from '0' nth(2)-> 3 index value

await page.locator(".inputLogin").first().fill("DemoSalesManager")
await page.locator("#PassWord").last().fill("crmsfa")
await page.locator(".Click").nth().click()

DropDown:
list of value 
2 types of DropDown:
1. with Select tag and Option tag -> SelectOption()
2. without Select tag -> you can handle as normal click()

Select Tag and Option Tag:
Three methods to handle it.
M1 -> using index value -> start from '0'
M2 -> using label -> with help text value
M3 -> using value -> value attribute will be present


classRoom 1
DropDown

https://www.telerik.com/contact
What can we help you with?  -> index 5
Product Interest -> UI for react -> label
Country/Territory -> canada -> value




Playwright getBy Locators:
Playwright provides a set of getBy methods to locate elements in the DOM, which can be more expressive and 
powerful compared to traditional CSS selectors. These methods are used to interact with web elements 
in a more human-readable way.

Commonly Used getBy Locators
getByText: Selects elements containing specific text.
Example: page.getByText('Submit') selects an element with the text "Submit".

 page.getByText('Leads').click()


getByRole: Selects elements based on their ARIA roles.
Example: page.getByRole('button', { name: 'Login' }) selects a button element with the accessible name "Login".

page.getByRole('input',{name:'companyName'})

getByLabel: Selects form elements associated with a specific label.
Example: page.getByLabel('Username') selects the input field associated with the label "Username".

getByPlaceholder: Selects input elements based on their placeholder attribute.
Example: page.getByPlaceholder('Enter your password') selects an input field with the placeholder "Enter your password".

getByAltText: Selects images and other elements with an alt attribute.
Example: page.getByAltText('Product image') selects an image with the alt text "Product image".






Absolute xpath: /html/body/div[2]/div[2]/div/form/p/input

Relative Xpath

//tagName[@attributename='attributevalue']

1.Attribute based Xpath: //tagName[@attributeName='attributeValue'] ex://input[@id='username']

2.TextBased Xpath:

//tagName[text()='text value'] ex://a[text()='Bestsellers']

3.partial Attribute based xpath: //tagName[contains(@attribute,'attributevalue)] //input[contains(@name,'erna')]

4.partial Text based xpath: //tagname[contains(text(),'text value')] ex://a[contains(text(),'Customer')]

5.Collection or Index based xpath

(//tagName[text()='Text value'])[index value] index value -> 1 index value should not go beyond 5 index value can use 1 - 5

ex:(//input[contains(@name,'TextField')])[2]

Axes Xpath: 1.parent to child basic xpath/tagName of child ex://div[@class='nav-search-field ']/input

2.GrandParent to GrandChild basic xpath for GP//tagname of GC ex://div[@id='usernamegroup']//input

3.Elder sibling to Younger sibling

basic xpath for ES/following-sibling::tagname of YS //label[text()='Username']/following-sibling::input

4.Elder cousin to Younger cousin

basic xpath for EC/following::tagname of YC //input[@id='username']/following::input[@id='password']