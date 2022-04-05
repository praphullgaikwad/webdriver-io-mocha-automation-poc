import BasePage from './BasePage';

export const BOOKS_SECTION = 'span=Top Sellers in Books for you';

class ScrollingPage extends BasePage {
    /**
     * Getter Methods
     */

    get bookSection() {
        return $(BOOKS_SECTION);
    }

    /**
     * Action Methods
     */
}

export default new ScrollingPage();
