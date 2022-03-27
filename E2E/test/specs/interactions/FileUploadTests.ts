describe("Web Interactions - Handling file uploads", () => {
    it("TC_BINT_007 - Verify file upload is working properly or not.", async () => {
        /**
         * File upload
         *
         */
        console.log(">>Current Working Directory: " + process.cwd());
        await browser.url("/upload");
        await (
            await $("#file-upload")
        ).addValue(`${process.cwd()}/data/file-upload/dummy.txt`);
        await (await $("#file-submit")).click();
    });
});
