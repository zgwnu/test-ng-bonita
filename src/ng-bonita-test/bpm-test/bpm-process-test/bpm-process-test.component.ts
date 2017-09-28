// ANGULAR Imports
import { Component, OnInit } from '@angular/core'

// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaBpmProcessService, ZgwnuBonitaErrorResponse, 
    ZgwnuBonitaCreateCaseSuccessResponse, ZgwnuBonitaProcessDefinition, ZgwnuBonitaSearchParms
  } from '@zgwnu/ng-bonita'  

// APP Imports
import { TestCaseService } from '../../test/test-case.service'

// bpm process create test classes
import { CreateCaseContract } from './create-case-contract'
import { Ng2BonitaMasterContract } from './ng2-bonita-master-contract'
import { Ng2BonitaDetailContract } from './ng2-bonita-detail-contract'
import { Ng2BonitaXrefContract } from './ng2-bonita-xref-contract'

@Component({
    moduleId: module.id,
    selector: 'bpm-process-test',
    templateUrl: 'bpm-process-test.component.html',
    styleUrls: [ 'bpm-process-test.component.css' ],
})

export class BpmProcessTestComponent implements OnInit { 

  // Generic Bonita Rest Api test vars
  errorResponse: ZgwnuBonitaErrorResponse

  // Process test vars
  processDefinition: ZgwnuBonitaProcessDefinition
  passedTest_BpmProcess_searchProcessDefinitions: boolean = false
  passedTest_BpmProcess_getProcessDefinition: boolean = false
  passedTest_BpmProcess_createCase: boolean = false
  createCaseData: any = {
    masterKey: 'Master1 ',
    masterDate: new Date(2017, 0, 12),
    details: [
      {detailKey: 'Detail1 ', xrefKey: 'XrefA'},
      {detailKey: 'Detail2 ', xrefKey: 'XrefB'},
      {detailKey: 'Detail3 ', xrefKey: 'XrefC'},
    ],
    masterBoolean: true,
    masterDouble: Number.MAX_VALUE,
    masterFloat: 1000.327436,
    masterInteger: 10000,
    masterLong: 100000,
    masterText: 'This is a test Text for zgwnu-ng2-bonita-testapp'
  }
  createCaseSuccessResponse: ZgwnuBonitaCreateCaseSuccessResponse

  constructor(
    private bpmProcessService: ZgwnuBonitaBpmProcessService, 
    private testCaseService: TestCaseService,  
  )
  {
  }

  ngOnInit():void {
    console.log('InitTestComponent')

    // start testchain
    this.test_BpmProcess_searchProcessDefinitions()

  }

  private test_BpmProcess_searchProcessDefinitions() {
    let bonitaSearchParms: ZgwnuBonitaSearchParms = new ZgwnuBonitaSearchParms(0, 1)
    bonitaSearchParms.filters = ['name=Basic Test', 'version=0.0.2']

    this.bpmProcessService.searchProcessDefinitions(bonitaSearchParms)
      .subscribe(
        processDefinitions => {
          this.processDefinition = processDefinitions[0]
          this.passedTest_BpmProcess_searchProcessDefinitions = true
          console.log('processDefinitions', processDefinitions)
          // next test in chain (2)
          this.test_BpmProcess_getProcessDefinition()
        },
        errorResponse => this.errorResponse = errorResponse
      )
  }

  private test_BpmProcess_getProcessDefinition() {
    this.bpmProcessService.getProcessDefinition(this.processDefinition.id)
      .subscribe(
        processDefinition => {
          this.processDefinition = processDefinition
          this.passedTest_BpmProcess_getProcessDefinition = true
          // next test in chain (3)
          this.test_BpmProcess_createCase()
        },
        errorResponse => this.errorResponse = errorResponse
      )
  }

  private test_BpmProcess_createCase() {
    let contract: CreateCaseContract = new CreateCaseContract(this.createCaseData)  
    console.log(contract)
    this.bpmProcessService.createCase(this.processDefinition.id, contract)
      .subscribe(
        createCaseSuccessResponse => {
          this.createCaseSuccessResponse = createCaseSuccessResponse
          this.testCaseService.caseId = createCaseSuccessResponse.caseId
          this.passedTest_BpmProcess_createCase = true
        },
        errorResponse => this.errorResponse = errorResponse
      )

  }

}