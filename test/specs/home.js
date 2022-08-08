// Practice e-commerce site - automation bro
// https://practice.automationbro.com

import HomePage from '../pages/home-page';

describe('Home', () => {
  // before(async () => {
  //   await HomePage.open();
  // });

  beforeEach(async () => {
    await HomePage.open();
  });

  it('Open the URL and assert the title', async () => {
    await expect(browser).toHaveTitle(
      'Practice E-Commerce Site – Automation Bro'
    );
  });

  it('Should open the about page and assert URL', async () => {
    //Open about page
    await browser.url('https://practice.automationbro.com/about');

    // Assert the URL
    await expect(browser).toHaveUrl(
      'https://practice.automationbro.com/about/'
    );
  });

  it('Should open the homepage', async () => {
    // Open the homepage
    await HomePage.open();
    // Click get started button
    await $('#get-started').click();
    // Assert url contains get-started text
    await expect(browser).toHaveUrlContaining('get-started');
  });

  it('Should assert page is no longer at get-started anchor', async () => {
    // Open the homepage
    await HomePage.open();
    // Click get started button
    await $('#get-started').click();
    // Assert the get-started content is there
    await expect(browser).toHaveUrlContaining('get-started');
    // Click on get the automation bro link Upper left corner
    await $('.custom-logo').click();
    // Check that the url has changed back to the homepage
    await expect(browser).not.toHaveUrlContaining('get-started');
  });

  it.only('Should assert homepage title is x vs x', async () => {
    await HomePage.open();
    const headingEl = await $('.elementor-widget-container h1');
    const headingText = await headingEl.getText();

    // Assert the text
    await expect(headingEl).toHaveText('Think different. Make different.');
  });
});
