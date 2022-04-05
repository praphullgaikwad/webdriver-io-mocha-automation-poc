import fileUpload from '../../../pages/FileUpload';
describe('Web Interactions - Handling file uploads', () => {
    it('TC_BINT_007 - Verify file upload is working properly or not.', async () => {
        /**
         * File upload
         * Methods used:
         * 1. addValue()
         */
        await fileUpload.openPage('File Upload');

        // Upload a file
        await fileUpload.typeFilePathToUpload(`${process.cwd()}/data/file-upload/dummy.txt`);
        await fileUpload.clickUploadButton();

        // Verify file uploaded succesfully
        await fileUpload.verifyFileUploaded('dummy.txt');
    });
});
