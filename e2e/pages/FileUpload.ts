import BasePage from './BasePage';

export const FILE_UPLOAD_FIELD = '#file-upload';
export const FILE_SUBMIT_FIELD = '#file-submit';
export const UPLOADED_FILES = '#uploaded-files';

class FileUpload extends BasePage {
    /**
     * Getter Methods
     */
    get fileUpload() {
        return $(FILE_UPLOAD_FIELD);
    }

    get fileSubmit() {
        return $(FILE_SUBMIT_FIELD);
    }

    get uploadedFiles() {
        return $(UPLOADED_FILES);
    }

    /**
     * Action Methods
     */

    /**
     * @param filePath : Provide a valid path of file to upload.
     */
    async typeFilePathToUpload(filePath: string) {
        await this.typeInto(await this.fileUpload, filePath);
    }

    async clickUploadButton() {
        await this.click(await this.fileSubmit);
    }

    /**
     * Verification Methods
     */

    async verifyFileUploaded(fileName: string) {
        expect(await this.uploadedFiles).toHaveTextContaining(fileName);
    }
}
export default new FileUpload();
