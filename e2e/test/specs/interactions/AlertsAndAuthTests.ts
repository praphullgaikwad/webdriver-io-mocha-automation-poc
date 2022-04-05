import alertsPage from '../../../pages/AlertsPage';

describe('Web Interactions - Handling alerts & basic authentication', () => {
    it('TC_BINT_005 - Verify accept and dismiss alert.', async () => {
        /**
         * Handling alerts
         * Methods used:
         * 1. isAlertOpen()
         * 2. acceptAlert()
         * 3. dismissAlert()
         * 4. getAlertText()
         * 5. sendAlertText()
         */

        await alertsPage.openPage('JavaScript Alerts');

        /**
         * 1. isAlertOpen()
         * 2. acceptAlert()
         */
        await alertsPage.openAlert();
        await alertsPage.verifyAlertIsDisplayed();
        await alertsPage.acceptOpenAlert();
        await alertsPage.verifyAlertResultMessage('You successfully clicked an alert');

        /**
         * 3. dismissAlert()
         */
        await alertsPage.openConfirmAlert();
        await alertsPage.dismissOpenAlert();
        await alertsPage.verifyAlertResultMessage('You clicked: Cancel');

        /**
         * 4. getAlertText()
         * 5. sendAlertText()
         */
        await alertsPage.openPromptAlert();
        await alertsPage.verifyPromptAlertText('I am a JS prompt');
        await alertsPage.typeIntoAlertBox('This is a sample text.');
        await alertsPage.acceptOpenAlert();
        await alertsPage.verifyAlertResultMessage('You entered: This is a sample text.');
    });

    it('TC_BINT_006 - Verify working of basic authentication.', async () => {
        /**
         * Basic Auth - (Note: This looks like alert but we need to handle it differently)
         * In this case, we have handled 'basic auth' by providing username and password in
         * url as shown below.
         */
        await browser.url('https://admin:admin@the-internet.herokuapp.com/basic_auth');
    });
});
