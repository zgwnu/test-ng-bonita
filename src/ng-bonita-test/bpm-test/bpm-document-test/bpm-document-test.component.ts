// ANGULAR Imports
import { Component, OnInit } from '@angular/core'

// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaBpmDocumentService, ZgwnuBonitaErrorResponse, ZgwnuBonitaSearchParms, 
    ZgwnuBonitaDocumentCreateInput, ZgwnuBonitaDocumentUpdateInput ,ZgwnuBonitaDocument 
} from '@zgwnu/ng-bonita'  

// APP Imports
import { TestCaseService } from '../../test/test-case.service'

@Component({
    moduleId: module.id,
    selector: 'bpm-document-test',
    templateUrl: 'bpm-document-test.component.html',
    styleUrls: [ 'bpm-document-test.component.css' ],
})

export class BpmDocumentTestComponent implements OnInit { 

    // Generic Bonita Rest Api test vars
    errorResponse: ZgwnuBonitaErrorResponse

    // BPM Document Test Vars
    documentCreateFromUrlInput: ZgwnuBonitaDocumentCreateInput
    documentCreatedFromUrl: ZgwnuBonitaDocument
    passedTest_BpmDocument_createDocumentFromUrl: boolean = false

    documentCreateFromTempFileInput: ZgwnuBonitaDocumentCreateInput
    documentCreatedFromTempFile: ZgwnuBonitaDocument
    passedTest_BpmDocument_createDocumentFromTempFile: boolean = false

    documentUpdateInput: ZgwnuBonitaDocumentCreateInput
    documentUpdated: ZgwnuBonitaDocument
    passedTest_BpmDocument_updateDocument: boolean = false

    documentGet: ZgwnuBonitaDocument
    passedTest_BpmDocument_getDocument: boolean = false

    documentsSearch: ZgwnuBonitaDocument[]
    passedTest_BpmDocument_searchDocument: boolean = false

    constructor(
        private bpmDocumentService: ZgwnuBonitaBpmDocumentService, 
        private testCaseService: TestCaseService,  
    )
    {
    }
    
    ngOnInit() {
        this.test_BpmDocument_createDocumentFromUrl()
        this.test_BpmDocument_createDocumentFromTempFile()
    }

    private test_BpmDocument_createDocumentFromUrl() {
        this.documentCreateFromUrlInput = {
            caseId: this.testCaseService.caseId,
            name: 'createDocumentTestFromUrl',
            url: 'http://www.zgwnu.nl/wp-content/uploads/2017/09/Hoe-zaakgericht-werken-de-digitale-transformatie-kan-ondersteunen.pdf'
        }
        this.bpmDocumentService.createDocument(this.documentCreateFromUrlInput)
            .subscribe(
                documentCreated => {
                    this.documentCreatedFromUrl = documentCreated
                    this.passedTest_BpmDocument_createDocumentFromUrl = true
                },
                errorResponse => {
                    this.errorResponse = errorResponse
                }
            )
    }

    private test_BpmDocument_createDocumentFromTempFile() {
        this.documentCreateFromTempFileInput = {
            caseId: this.testCaseService.caseId,
            file: this.testCaseService.uploadedDocFile.tempPath,
            name: 'createDocumentTestFromTempFile',
            fileName: this.testCaseService.uploadedDocFile.fileName,
            contentMimetype: this.testCaseService.uploadedDocFile.contentType
        }
        this.bpmDocumentService.createDocument(this.documentCreateFromTempFileInput)
            .subscribe(
                documentCreated => {
                    this.documentCreatedFromTempFile = documentCreated
                    this.passedTest_BpmDocument_createDocumentFromTempFile = true
                },
                errorResponse => {
                    this.errorResponse = errorResponse
                }
            )
    }

}