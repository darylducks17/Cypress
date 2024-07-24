describe ('Handle Tables', () => {
    // hook - executed before every it block - can be used for common steps
    /*beforeEach('Login', () => {
        cy.visit('https://practice.expandtesting.com/tables')
    })*/

    it('check number rows and colums', ()=>{
        cy.get('table#table1[class="table table-bordered"]>tbody>tr').should('have.length', 4)
        cy.get('table#table1[class="table table-bordered"]>thead>tr>th').should('have.length', 6)
    })

    it('check cell data from specific row and column', ()=> {
        cy.get('table#table1[class="table table-bordered"]>tbody>tr:nth-child(3)>td:nth-child(3)').contains('jdoe@hotmail.com')
    })

    it('read all the rows and columns data in the first page (only rows in the website)', () => {
        cy.get('table#table1[class="table table-bordered"]>tbody>tr')
        /*
        $rows = all the rows captured in the table
        index = store the index of the every row - repeat for every iteration
        $row = current row in table
        */
        .each(($row, index, $rows) => {
            //wrap = to get the first row first fo example
            cy.wrap($row).within(()=>{
                cy.get('td').each(($col, index, $cols)=>{
                    //extracting data
                    cy.log($col.text())
                })
            })

        })
    })

    it.only('pagination', () => {
        let totalPages=4
        cy.visit('https://datatables.net/examples/basic_init/alt_pagination.html')
        //cy.get('#example[class="display dataTable"]>tbody>tr')
        //using substring to capture the total entries of the data table
        /*cy.get('#example_info').then((e) =>{
            //returns text value and stores it in the variable
            //mytext contains the complete value
            let mytext=e.text()
            totalPages=mytext.substring(mytext.indexOf("of")+2, mytext.indexOf("entries")-1)
            cy.log("total number of entries in the table = "+totalPages)
        })*/

        for(let p=2; p<totalPages; p++) {
            if(totalPages>1) {
                //clicks the pages specified in totalPages
                cy.get(".dt-paging-button:nth-child("+p+")").click()
                cy.log("active page is:" +p)
                // get the 1st colum (names) of each entry in table
                cy.get('#example[class="display dataTable"]>tbody>tr')
                .each(($row, index, $rows) => {
                    //wrap = to get the first row first fo example
                    cy.wrap($row).within(()=>{
                        cy.get('td:nth-child(1)').then((e)=>{
                            cy.log(e.text())
                        })
                    })
                })
            }
        }
    })
})