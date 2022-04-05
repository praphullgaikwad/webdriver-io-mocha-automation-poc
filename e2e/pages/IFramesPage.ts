import BasePage from './BasePage';
export const IFRAME_TYPE = '=iFrame';
export const IFRAME = '#mce_0_ifr';
export const EDITOR_FIELD = '#tinymce';

class IFramesPage extends BasePage {
    /**
     * Getter Methods
     */

    get iFrameType() {
        return $(IFRAME_TYPE);
    }

    get editorField() {
        return $(EDITOR_FIELD);
    }

    get iFrameElement() {
        return $(IFRAME);
    }

    /**
     * Action Methods
     */
    async clickIFrameType() {
        await this.click(await this.iFrameType);
    }

    async switchToIFrame() {
        await browser.switchToFrame(await this.iFrameElement);
    }

    async switchToParentIFrame() {
        await browser.switchToParentFrame();
    }
    async typeIntoEditor(text: string) {
        await this.typeInto(await this.editorField, text, 200);
    }
    /**
     * Verification Methods
     */
}
export default new IFramesPage();
