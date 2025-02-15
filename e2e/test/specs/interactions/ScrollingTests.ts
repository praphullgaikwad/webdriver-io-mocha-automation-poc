import scrollingPage from '../../../pages/ScollingPage';

describe('Web Interactions - Handling various scrolling methods', () => {
    it('TC_BINT_100 - Verify user is able to scroll the page..', async () => {
        /**
         * Basic scrolling
         * Methods used:
         * 1. scrollIntoView()
         */

        await browser.url('https://amazon.com/');
        //  If you want to see element at top
        await (await scrollingPage.bookSection).scrollIntoView();
        //  If you want to see element at bottom
        await (await scrollingPage.bookSection).scrollIntoView(false);
    });

    it('TC_INT_101 -  Verify that user is able to scroll into visible portion..', async () => {
        /**
         * Scrolling
         *
         * Visible Portion
         * Windows object:
         * 1. scrollBy
         * Y -> [-]window.innerHeight
         */

        await browser.url('https://amazon.com');

        // scrollDown
        await browser.execute(() => {
            window.scrollBy(0, window.innerHeight);
        });

        // scrollUp
        await browser.execute(() => {
            window.scrollBy(0, -window.innerHeight);
        });
    });

    it('TC_INT_102 - Verify that user is able to scroll into invisible portion.', async () => {
        /**
         * Invisible Portion
         * Windows object:
         * 1. scrollTo
         *  document.body.scrollTop(scrollHeight)
         */

        await browser.url('https://amazon.com');

        // Scroll down
        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await browser.pause(5000);

        // Scroll top
        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollTop);
        });
        await browser.pause(5000);
    });
});
