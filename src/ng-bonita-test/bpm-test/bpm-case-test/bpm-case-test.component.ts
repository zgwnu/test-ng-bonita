// ANGULAR Imports
import { Component, OnInit } from '@angular/core'

// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaBpmCaseService, ZgwnuBonitaErrorResponse, ZgwnuBonitaSearchParms, 
    ZgwnuBonitaCase } from '@zgwnu/ng-bonita'  

// APP Imports
import { TestCaseService } from '../../test/test-case.service'

@Component({
    moduleId: module.id,
    selector: 'bpm-case-test',
    templateUrl: 'bpm-case-test.component.html',
    styleUrls: [ 'bpm-case-test.component.css' ],
})

export class BpmCaseTestComponent implements OnInit { 

    // Generic Bonita Rest Api test vars
    errorResponse: ZgwnuBonitaErrorResponse

    // Bpm Case test vars
    caseGet: ZgwnuBonitaCase
    passedTest_BpmCase_getCase: boolean = false

    caseSearch: ZgwnuBonitaCase
    passedTest_BpmCase_searchCase: boolean = false

    caseContext: any
    passedTest_BpmCase_getCaseContext: boolean = false

    constructor(
        private bpmCaseService: ZgwnuBonitaBpmCaseService, 
        private testCaseService: TestCaseService,  
    )
    {
    }
    
    ngOnInit() {
        this.test_BpmCase_getCase()
    }

    private test_BpmCase_getCase() {
        this.bpmCaseService.getCase(this.testCaseService.caseId)
          .subscribe(
            bonitaCase => {
              this.caseGet = bonitaCase
              this.passedTest_BpmCase_getCase = true
              // next test in chain (1)
              this.test_BpmCase_searchCase()
            },
            errorResponse => this.errorResponse = errorResponse
          )
      }
    
    private test_BpmCase_searchCase() {
    let testSearchParms: ZgwnuBonitaSearchParms = new ZgwnuBonitaSearchParms(0, 1)
    testSearchParms.filters = [
        'id=' + this.caseGet.id, 
        'started_by=' + this.caseGet.started_by
        ]

    this.bpmCaseService.searchCases(testSearchParms)
        .subscribe(
        bonitaCases => {
            this.caseSearch = bonitaCases[0]
            this.passedTest_BpmCase_searchCase = true
            // next test in chain (2)
            this.test_BpmCase_getCaseContext()
        },
        errorResponse => this.errorResponse = errorResponse
        )
    }

    private test_BpmCase_getCaseContext() {
    this.bpmCaseService.getCaseContext(this.testCaseService.caseId)
        .subscribe(
        caseContext => {
            this.caseContext = caseContext
            this.passedTest_BpmCase_getCaseContext = true
            // next test in chain (3)
            
        },
        errorResponse => this.errorResponse = errorResponse
        )
    }

}