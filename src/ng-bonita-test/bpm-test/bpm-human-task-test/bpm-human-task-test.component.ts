// ANGULAR Imports
import { Component, OnInit } from '@angular/core'

// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaBpmHumanTaskService, ZgwnuBonitaErrorResponse, ZgwnuBonitaResponse, 
    ZgwnuBonitaSearchParms, ZgwnuBonitaHumanTask } from '@zgwnu/ng-bonita'  

// APP Imports
import { TestCaseService } from '../../test/test-case.service'

@Component({
    moduleId: module.id,
    selector: 'bpm-human-task-test',
    templateUrl: 'bpm-human-task-test.component.html',
    styleUrls: [ 'bpm-human-task-test.component.css' ],
})

export class BpmHumanTaskTestComponent implements OnInit { 

    // Generic Bonita Rest Api test vars
    response: ZgwnuBonitaResponse
    errorResponse: ZgwnuBonitaErrorResponse

    // Human Task test vars
    private readonly testHumanTaskName = 'User Task'
    humanTask: ZgwnuBonitaHumanTask
    passedTest_BpmHumanTask_searchHumanTasks: boolean = false
    passedTest_BpmHumanTask_getHumanTask: boolean = false

    constructor(
        private bpmHumanTaskService: ZgwnuBonitaBpmHumanTaskService, 
        public testCaseService: TestCaseService,  
    )
    {
    }
    
    ngOnInit() {
        this.test_BpmHumanTask_searchHumanTasks()
    }

    private test_BpmHumanTask_searchHumanTasks() {
        let testSearchParms: ZgwnuBonitaSearchParms = new ZgwnuBonitaSearchParms(0, 1)
        testSearchParms.filters = [
            'name=' + this.testHumanTaskName,
            ]

        this.bpmHumanTaskService.searchHumanTasks(testSearchParms)
            .subscribe(
                humanTasks => {
                    console.log(humanTasks)
                    this.humanTask = humanTasks[0]
                    this.passedTest_BpmHumanTask_searchHumanTasks = true
                    // next test in chain (3)
                    this.test_BpmHumanTask_getHumanTask()
                },
                errorResponse => this.errorResponse = errorResponse
            )
    }

    private test_BpmHumanTask_getHumanTask() {
        this.bpmHumanTaskService.getHumanTask(this.humanTask.id)
            .subscribe(
                humanTask => {
                    this.humanTask = humanTask
                    this.passedTest_BpmHumanTask_getHumanTask = true
                    // next test in chain (4)
                    
                },
                errorResponse => this.errorResponse
            )
    }

}