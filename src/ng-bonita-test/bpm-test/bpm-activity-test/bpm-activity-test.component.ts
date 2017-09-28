// ANGULAR Imports
import { Component, OnInit } from '@angular/core'

// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaBpmActivityService, ZgwnuBonitaErrorResponse, ZgwnuBonitaResponse, 
    ZgwnuBonitaSearchParms, ZgwnuBonitaActivity } from '../../../ng-bonita'  

// APP Imports
import { TestCaseService } from '../../test/test-case.service'

@Component({
    moduleId: module.id,
    selector: 'bpm-activity-test',
    templateUrl: 'bpm-activity-test.component.html',
    styleUrls: [ 'bpm-activity-test.component.css' ],
})

export class BpmActivityTestComponent implements OnInit { 

    // Generic Bonita Rest Api test vars
    response: ZgwnuBonitaResponse
    errorResponse: ZgwnuBonitaErrorResponse

    // Activity test vars
    private readonly testActivityName = 'User Task'
    activity: ZgwnuBonitaActivity
    passedTest_BpmActivity_searchActivities: boolean = false
    passedTest_BpmActivity_getActivity: boolean = false

    constructor(
        private bpmActivityService: ZgwnuBonitaBpmActivityService, 
        private testCaseService: TestCaseService,  
    )
    {
    }
    
    ngOnInit() {
        this.test_BpmActivity_searchActivities()
    }

    private test_BpmActivity_searchActivities() {
        let testSearchParms: ZgwnuBonitaSearchParms = new ZgwnuBonitaSearchParms(0, 1)
        testSearchParms.filters = [
            'name=' + this.testActivityName,
            'parentCaseId=' + this.testCaseService.caseId
            ]

        this.bpmActivityService.searchActivities(testSearchParms)
            .subscribe(
                activities => {
                    this.activity = activities[0]
                    this.passedTest_BpmActivity_searchActivities = true
                    // next test in chain (1)
                    this.test_BpmActivity_getActivity()
                },
                errorResponse => this.errorResponse = errorResponse
            )
    }

    private test_BpmActivity_getActivity() {
        this.bpmActivityService.getActivity(this.activity.id)
            .subscribe(
                activity => {
                    this.activity = activity
                    this.passedTest_BpmActivity_getActivity = true
                    // next test in chain (2)
                    
                },
                errorResponse => this.errorResponse
            )
    }

}