import { AppPage } from './app.po';
import { browser, by, element } from 'protractor'; 

describe('digital-protection-app App', () => {
  let page: AppPage;

  beforeEach(() => {
     page = new AppPage();
  });

  it('should display welcome message', () => {
    //page.navigateTo();
    //expect(page.getParagraphText()).toEqual('Welcome to app!');
  });

  it('should control  if the first name is  valid', function() {
    page.navigateTo();
    element(by.id('firstNameInvalid')).isDisplayed().then(function(visible) {
       expect(visible).toBeTruthy();
     });
     
     element(by.id('firstname')).sendKeys('LAURENT');
     element(by.id('next')).click();
     element(by.id('firstNameInvalid')).isDisplayed().then(function(visible) {
       expect(visible).toBeFalsy();
     });
    
   });

   it('should control  if the last name is  valid', function() {
    page.navigateTo();
    element(by.id('lastNameInvalid')).isDisplayed().then(function(visible) {
       expect(visible).toBeTruthy();
     });
     
     element(by.id('lastname')).sendKeys('Juste');
     element(by.id('next')).click();
     element(by.id('lastNameInvalid')).isDisplayed().then(function(visible) {
       expect(visible).toBeFalsy();
     });
    
   });


  it('should control if the email is  valid', function() {
    page.navigateTo();
    element(by.id('emailInvalid')).isDisplayed().then(function(visible) {
       expect(visible).toBeTruthy();
     });
     
     element(by.id('email')).sendKeys('aaa@yahoo.fr');
  element(by.id('next')).click();
     element(by.id('emailInvalid')).isDisplayed().then(function(visible) {
       expect(visible).toBeFalsy();
     });

     element(by.id('email')).clear();
     element(by.id('email')).sendKeys('testinvalidmail@');
     element(by.id('next')).click();
     element(by.id('emailInvalid')).isDisplayed().then(function(visible) {
       expect(visible).toBeTruthy();
     });
    
   });

   it('should navigate to next page after click on next boutton', function() {
    page.navigateTo();
     
     
     element(by.id('firstname')).sendKeys('LAURENT');
     element(by.id('lastname')).sendKeys('Juste');
     element(by.id('email')).sendKeys('laurent.juste@yahoo.fr');
     element(by.id('next')).click();
     expect(visible).toBeFalsy();
      
 
    
   });
});
