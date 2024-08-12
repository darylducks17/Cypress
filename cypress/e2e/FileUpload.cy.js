import 'cypress-file-upload'

describe('File upload', ()=>{
    it('single file upload', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('mooscles.jpeg')
        cy.get('#file-submit').click()
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')
    })

    it('File upload - Rename', () =>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'mooscles.jpeg', fileName:'test1.jpeg'})
        cy.get('#file-submit').click()
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')
    })

    it('File Upload - Drag and Drop', ()=> {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile('mooscles.jpeg', {subjectType: 'drag-n-drop'})
        cy.get("div[class='dz-preview dz-processing dz-image-preview dz-success dz-complete'] div[class='dz-filename']").contains('mooscles.jpeg')
    })

    it('Multiple file upload', ()=> {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(['mooscles.jpeg','philips_user_manual.pdf'])
        cy.get(':nth-child(6) > strong').should('contain.text', 'Files You Selected:')
    })

    it.only('File upload - Shadow DOM', ()=> {
        //shadow DOM - DOM containing another DOM  (Document Object Model)
        //shadow-root = shadow DOM starts
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        cy.get('.smart-browse-input', {includeShadowDom: true}).attachFile('mooscles.jpeg')
        cy.get('.smart-item-name', {includeShadowDom: true}).contains('mooscles.jpeg')
    })
})