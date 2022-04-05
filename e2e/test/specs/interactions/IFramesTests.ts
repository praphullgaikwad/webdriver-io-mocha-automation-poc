import iFramesPage from '../../../pages/IFramesPage';
describe('Handling IFrames web interactions', () => {
    it('TC_BINT_008 - Verify that user is able to type into editor.', async () => {
        /**
         * iFrames Handling
         * Methods used:
         * 1. switchToFrame()
         * 2. switchToParentFrame()
         */
        await iFramesPage.openPage('Frames');

        // Click iFrame
        await iFramesPage.clickIFrameType();

        // Switch to iFrame
        await iFramesPage.switchToIFrame();

        // Click on iFrame editor
        await iFramesPage.editorField.click();

        // Interaction with frame
        await iFramesPage.typeIntoEditor(
            'A computer would deserve to be called intelligent if it could deceive a human into believing that it was human. - Alan Turing'
        );
    });

    it('TC_BINT_009 - Verify user is able to perform key press in editor.', async () => {
        /**
         * IFrames & Keypress (keyboard actions)
         *
         */
        await iFramesPage.openPage('Frames');

        // Click iFrame
        await iFramesPage.clickIFrameType();

        // Switch to iFrame
        await iFramesPage.switchToIFrame();

        // Click on iFrame editor
        await iFramesPage.editorField.click();

        // Perform a keypress operation inside the editor
        await browser.keys(['Meta', 'A']);
        await browser.keys('Delete');
        await iFramesPage.typeIntoEditor('Handling Key Press...');

        // Switch back to parent frame
        await browser.switchToParentFrame();
    });
});
