import tablesPage from '../../../pages/TablesPage';

describe('Web Interactions - Handling data tables', () => {
    it('TC_BINT_010 - Verify table cell values the page..', async () => {
        /**
         * Web table:
         * What are going to cover:
         * 1. Check number of rows and columns
         * 2. Verify perticular cell data
         */

        await tablesPage.openPage('Sortable Data Tables');

        //   1. Check number of rows and columns
        let rowCount = await tablesPage.tableRows.length;
        let colCount = await tablesPage.tableCols.length;
        await tablesPage.verifyTableRowsCount(rowCount);
        await tablesPage.verifyTableColsCount(colCount);

        // 2. Verify perticular cell data
        await tablesPage.verifyCellValue(1, 1, 'John');
    });
});
