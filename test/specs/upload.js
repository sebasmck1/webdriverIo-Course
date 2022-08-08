const path = require('path');

describe('Upload tests', () => {
  it('Simple upload test', async () => {
    await browser.url('https://the-internet.herokuapp.com/upload');

    // Store test file path
    const filePath = path.join(__dirname, '../data/logotitle.png');

    // First upload test file
    const remoteFilePath = await browser.uploadFile(filePath);

    // Set File path value in the input field
    await $('#file-upload').setValue(remoteFilePath);

    // click submit button
    await $('#file-submit').click();

    // Assertion
    await expect($('h3')).toHaveText('File Uploaded!');
  });

  it('Should Uppload on a hidden input field', async () => {
    //open url
    await browser.url('/cart/');

    // store test file path
    const filePath = path.join(__dirname, '../data/logotitle.png');

    // upload test file
    const remoteFilePath = await browser.uploadFile(filePath);

    // remove hidden class
    await browser.execute("document.querySelector('#upfile_1').className =''");

    // set file path value in the input field
    await $('#upfile_1').setValue(remoteFilePath);
    await $('#upload_1').click(); // click the upload button

    // Assertion
    await expect($('#wfu_messageblock_header_1_label_1')).toHaveTextContaining(
      'uploaded successfully'
    );
  });
});
