/// <reference types="cypress" />

describe("locating demo", function () {
  it("sauce demo 1", function () {
    //open url
    cy.visit("https://www.saucedemo.com/"); 
    //1.sign in
    cy.get("#user-name")
      .should("be.visible")
      .should("be.enabled")
      .type("standard_user")
      .should("have.value", "standard_user");
    cy.get("#password")
      .should("be.visible")
      .should("be.enabled")
      .type("secret_sauce")
      .should("have.value", "secret_sauce");

    cy.get("#login-button").should("be.visible").click(); 
    cy.wait(3000)
    
    //2.Verify the URL https://www.saucedemo.com/inventory.html
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html"); 
    //3.Click on any product of your choice
    cy.get("#item_4_img_link > .inventory_item_img").click(); 
    cy.wait(3000);
    //4. Verify the product name and price is similar to the product you selected
    cy.get('.inventory_details_name').invoke('text').should('equal','Sauce Labs Backpack')
    cy.get('.inventory_details_price').invoke('text').should('equal','$29.99')
    //5. Click on add to cart
    cy.get("#add-to-cart-sauce-labs-backpack").click(); 
    //6. Click on the Shopping Cart icon
    cy.get(".shopping_cart_link").click(); 
    //7. Verify the URL is https://www.saucedemo.com/cart.html
    cy.url().should("eq", "https://www.saucedemo.com/cart.html"); 
    //8. Verify the added product name and the price is similar to your selection
    assert.equal("Sauce Labs Backpack", "Sauce Labs Backpack", "equal");
    assert.equal("$29.99", "$29.99", "equal"); 
    //9. Click on Remove
    cy.get("#remove-sauce-labs-backpack").click(); 
    cy.wait(3000);
    //10 Verify the product is no longer in the cart
    cy.get(".cart_item").should("not.exist"); 
     //11. Click on continue shopping
    cy.get("#continue-shopping").click();
    cy.wait(3000);
    
    //12. Add any 2 products to the cart
    cy.get('#item_5_title_link > .inventory_item_name').click(); 
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
    cy.get('[data-test="back-to-products"]').click()
  
    cy.get("#item_2_img_link > .inventory_item_img").click();
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
    cy.wait(3000);
    cy.get('.shopping_cart_link').click()
    //13. Verify the product name and price is similar to the products you selected
    assert.equal(
      "Sauce Labs Fleece Jacket",
      "Sauce Labs Fleece Jacket",
      "equal"
    );
    assert.equal("$49.99", "$49.99", "equal");
    assert.equal("Sauce Labs Onesie", "Sauce Labs Onesie", "equal");
    assert.equal("$7.99", "$7.99", "equal");
    cy.wait(3000);
    //14. Click on checkout
    cy.get("#shopping_cart_container").click();
    cy.get("#checkout").click(); 
    cy.wait(3000);
    //15. Fill the necessary fields, use suitable element locators
    cy.get('[data-test="firstName"]').type("Sankalpani");
    cy.get('[data-test="lastName"]').type("Ranasinghe");
    cy.get('[data-test="postalCode"]').type("457"); 
    cy.wait(3000);
    //16. Click on Continue
    cy.get('[data-test="continue"]').click();
    //17. Verify the Item Total is similar to the total of the products you selected
    cy.get('.shopping_cart_badge').invoke('text').should('equal','2')
    //18. Click on finish
    cy.get('[data-test="finish"]').click(); 
    cy.wait(3000);
    //19. Verify the Thank You for your order text is visible.
    cy.get(".complete-header").should("be.visible").should("contain", "THANK YOU FOR YOUR ORDER"); 
    //20. Verify the URL https://www.saucedemo.com/checkout-complete.html
    cy.url().should("eq", "https://www.saucedemo.com/checkout-complete.html"); 
  });
});
