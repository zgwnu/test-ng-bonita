// ANGULAR Imports
import { Component, OnInit } from '@angular/core'

// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaBusinessDataService, ZgwnuBonitaErrorResponse, ZgwnuBonitaResponse, 
    ZgwnuBonitaBusinessDataQueryParms, ZgwnuBonitaBusinessDataListInterface } from '@zgwnu/ng-bonita'  

// APP Imports
import { TestCaseService } from '../test/test-case.service'
import { Ng2BonitaMasterInterface, ZgwnuBonitaIsDateType } from './bonita-business-data'

@Component({
    moduleId: module.id,
    selector: 'bdm-test',
    templateUrl: 'bdm-test.component.html',
    styleUrls: [ 'bdm-test.component.css' ],
})

export class BdmTestComponent implements OnInit { 

    // Generic Bonita Rest Api test vars
    response: ZgwnuBonitaResponse
    errorResponse: ZgwnuBonitaErrorResponse

    // BDM test vars
    objectType: string = 'Ng2BonitaMaster'
    queryName = 'findByMasterText'
    parameterValue: string = 'masterText=This is a test Text for zgwnu-ng2-bonita-testapp'
    dataQueryParms: ZgwnuBonitaBusinessDataQueryParms = new ZgwnuBonitaBusinessDataQueryParms(this.queryName, 0, 1, [this.parameterValue])
    ng2BonitaMasterList: ZgwnuBonitaBusinessDataListInterface
    passedTest_BusinessData_queryBusinessData: boolean = false

    
    passedTest_BusinessData_getBusinessData: boolean = false
    ng2BonitaMaster: Ng2BonitaMasterInterface
    


    constructor(
        private businessDataService: ZgwnuBonitaBusinessDataService, 
        public testCaseService: TestCaseService,  
    )
    {
    }
    
    ngOnInit() {
        this.test_BusinessData_queryBusinessData()
    }

    private test_BusinessData_queryBusinessData() {
        this.businessDataService.queryBusinessData<Ng2BonitaMasterInterface>(
            this.objectType,
            this.dataQueryParms,
            ZgwnuBonitaIsDateType)
        .subscribe(
            businessDataList => {
                this.ng2BonitaMasterList = businessDataList
                console.log('ng2BonitaMasterList', this.ng2BonitaMasterList)
                this.passedTest_BusinessData_queryBusinessData = true
                this.test_BusinessData_getBusinessData()
            }
        )

    }

    private test_BusinessData_getBusinessData() {
        this.businessDataService.getBusinessData<Ng2BonitaMasterInterface>(
            this.objectType, 
            this.ng2BonitaMasterList.items[0].persistenceId)
        .subscribe(
            businessDataObject => {
                this.ng2BonitaMaster = businessDataObject
                console.log('ng2BonitaMaster', this.ng2BonitaMaster)
                this.passedTest_BusinessData_getBusinessData = true
            },
            errorResponse => this.errorResponse = errorResponse
        )
    }

}