import chai from "chai";
describe("Web Interactions - Handling various scrolling methods", () => {
    it("TC_BINT_010 - Verify user is able to scroll the page..", async () => {
        /**
         * Web table:
         * What are going to cover:
         * 1. Check number of rows and columns
         * 2. Get whole table data
         * 3. Get single row based on a condition
         * 4. Get single column
         * 5. Get single cell value based on another cell
         */

        //   1. Check number of rows and columns
        await browser.url("/tables");
        let rowCount = await $$("//table[@id='table1']/tbody/tr").length;
        chai.expect(rowCount).to.equal(4);

        let colCount = await $$("//table[@id='table1']/thead/tr/th").length;
        chai.expect(colCount).to.equal(6);

        //   2. Get whole table data
        let tableDataPersonArr = [];
        for (let i = 1; i <= rowCount; i++) {
            let personObj = {
                lastname: "",
                firstname: "",
                email: "",
                due: "",
                website: "",
            };
            for (let j = 1; j <= colCount; j++) {
                let cellValue = await (
                    await $(`//table[@id='table1']/tbody/tr[${i}]/td[${j}]`)
                ).getText();
                if (j === 1) {
                    personObj.lastname = cellValue;
                }
                if (j === 2) {
                    personObj.firstname = cellValue;
                }
                if (j === 3) {
                    personObj.email = cellValue;
                }
                if (j === 4) {
                    personObj.due = cellValue;
                }
                if (j === 5) {
                    personObj.website = cellValue;
                }
            }
            tableDataPersonArr.push(personObj);
        }
        console.log(
            "Table Data Person Array: " + JSON.stringify(tableDataPersonArr)
        );

        // 3. Get single row based on a condition
        let tableDataPersonArr1 = [];
        for (let i = 1; i <= rowCount; i++) {
            let personObj = {
                lastname: "",
                firstname: "",
                email: "",
                due: "",
                website: "",
            };
            let cellFirstName = await (
                await $(`//table[@id='table1']/tbody/tr[${i}]/td[2]`)
            ).getText();
            if (cellFirstName === "Jason") {
                for (let j = 1; j <= colCount; j++) {
                    let cellValue = await (
                        await $(`//table[@id='table1']/tbody/tr[${i}]/td[${j}]`)
                    ).getText();
                    if (j === 1) personObj.lastname = cellValue;
                    if (j === 2) personObj.firstname = cellValue;
                    if (j === 3) personObj.email = cellValue;
                    if (j === 4) personObj.due = cellValue;
                    if (j === 5) personObj.website = cellValue;
                }
                tableDataPersonArr1.push(personObj);
            }
        }
        console.log(
            `Table Data Person Array: ${JSON.stringify(tableDataPersonArr1)}`
        );

        //   4. Get single column
        let singleColumnDataArr = [];
        for (let i = 1; i <= rowCount; i++) {
            let cellValue = await (
                await $(`//table[@id='table1']/tbody/tr[${i}]/td[5]`)
            ).getText();
            singleColumnDataArr.push(cellValue);
        }
        console.log("Single column data [website]: " + singleColumnDataArr);

        //   5. Get single cell value based on another cell
        let dueMoreThan50DollarDataArr = [];
        for (let i = 1; i <= rowCount; i++) {
            let jsonObj = {
                firstname: "",
                lastname: "",
                dueAmount: "",
            };
            let dueAmt = await (
                await $(`//table[@id='table1']/tbody/tr[${i}]/td[4]`)
            ).getText();
            if (parseInt(dueAmt.replace("$", "")) > 50) {
                jsonObj.lastname = await (
                    await $(`//table[@id='table1']/tbody/tr[${i}]/td[1]`)
                ).getText();
                jsonObj.firstname = await (
                    await $(`//table[@id='table1']/tbody/tr[${i}]/td[2]`)
                ).getText();
                jsonObj.dueAmount = dueAmt;
                dueMoreThan50DollarDataArr.push(jsonObj);
            }
        }
        console.log(
            `People with due amount greater than \$50: ${JSON.stringify(
                dueMoreThan50DollarDataArr
            )}`
        );
    });
});
