// ANGULAR Imports
import { Component, OnInit } from '@angular/core'

// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaBpmDataService, ZgwnuBonitaErrorResponse, ZgwnuBonitaResponse, 
    ZgwnuBonitaSearchParms, ZgwnuBonitaCaseVariable } from '@zgwnu/ng-bonita'  

// APP Imports
import { TestCaseService } from '../../test/test-case.service'

@Component({
    moduleId: module.id,
    selector: 'bpm-data-test',
    templateUrl: 'bpm-data-test.component.html',
    styleUrls: [ 'bpm-data-test.component.css' ],
})

export class BpmDataTestComponent implements OnInit { 

    // Generic Bonita Rest Api test vars
    response: ZgwnuBonitaResponse
    errorResponse: ZgwnuBonitaErrorResponse

    // Bpm Data test vars
    caseVariableName: string = 'testCaseVariable'
    searchCaseVariables: ZgwnuBonitaCaseVariable[]
    getCaseVariable: ZgwnuBonitaCaseVariable
    passedTest_BpmData_searchCaseVariables: boolean = false
    passedTest_BpmData_getCaseVariable: boolean = false

    constructor(
        private bpmDataService: ZgwnuBonitaBpmDataService, 
        public testCaseService: TestCaseService,  
    )
    {
    }
    
    ngOnInit() {
        this.test_BpmData_searchCaseVariables()
    }

    private test_BpmData_searchCaseVariables() {
        let testSearchParms: ZgwnuBonitaSearchParms = new ZgwnuBonitaSearchParms(0, 1)
        testSearchParms.filters = [
            'name=' + this.caseVariableName,
            'case_id=' + this.testCaseService.caseId
            ]
    
        this.bpmDataService.searchCaseVariables(testSearchParms)
          .subscribe(
            caseVariables => {
              this.searchCaseVariables = caseVariables
              this.passedTest_BpmData_searchCaseVariables = true
              // next test in chain (1)
              this.test_BpmData_getCaseVariable()
            },
            errorResponse => this.errorResponse = errorResponse
          )
      }
    
      private test_BpmData_getCaseVariable() {
        this.bpmDataService.getCaseVariable(this.testCaseService.caseId, this.caseVariableName)
          .subscribe(
            caseVariable => {
              this.getCaseVariable = caseVariable
              this.passedTest_BpmData_getCaseVariable = true
              // next test in chain (1)
    
            },
            errorResponse => this.errorResponse = errorResponse
          )
    
      }
    
}