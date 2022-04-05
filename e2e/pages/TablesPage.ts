import BasePage from './BasePage';

export const TABLE_ROWS = "//table[@id='table1']/tbody/tr";
export const TABLE_COLS = "//table[@id='table1']/thead/tr/th";
export const ITERATE_ROW = "//table[@id='table1']/tbody/tr[###]/td[2]";
export const TABLE_CELL = "//table[@id='table1']/tbody/tr[###]/td[$$$]";

let tableDataPersonArr = [];

class TablesPage extends BasePage {
    /**
     * Getter Methods
     */

    get tableRows() {
        return $$(TABLE_ROWS);
    }

    get tableCols() {
        return $$(TABLE_COLS);
    }

    /**
     * Action Methods
     */

    /**
     * Verification Methods
     */

    async verifyTableRowsCount(rowCount: number) {
        let actRowCount = await this.tableRows.length;
        expect(actRowCount).toBe(rowCount);
    }

    async verifyTableColsCount(colCount: number) {
        let actColCount = await this.tableCols.length;
        expect(actColCount).toBe(colCount);
    }

    /**
     *
     * @param rowNumber : Row number of cell in Table.
     * @param colNumber : Column number of cell in Table.
     * @param cellValue : Cell value to verify.
     */
    async verifyCellValue(rowNumber: number, colNumber: number, cellValue: string) {
        let actCellValue = await $(
            TABLE_CELL.replace('###', rowNumber.toString()).replace('$$$', colNumber.toString())
        ).getText();
        expect(actCellValue).toHaveTextContaining(cellValue);
    }
}
export default new TablesPage();
