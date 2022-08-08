import ContactPage from '../pages/contact-page';

describe('Blog page', () => {
  it('Should access the blog page and fill out the form, then assert the form has been submitted successfully', async () => {
    await ContactPage.open();

    await ContactPage.submitForm(
      'Sebastian',
      'corporate.att@gmail.com',
      '3233012211',
      'Test message'
    );

    // assert the message says:
    //Thanks for contacting us! We will be in touch with you shortly

    expect(ContactPage.alertSuccess).toHaveTextContaining(
      'Thanks for contacting us! We will be in touch with you shortly'
    );
  });
});
