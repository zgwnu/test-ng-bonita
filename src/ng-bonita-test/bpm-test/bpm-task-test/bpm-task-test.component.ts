// ANGULAR Imports
import { Component, OnInit } from '@angular/core'

// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaBpmTaskService, ZgwnuBonitaErrorResponse, ZgwnuBonitaResponse, 
    ZgwnuBonitaSearchParms, ZgwnuBonitaTask } from '../../../ng-bonita'  

// APP Imports
import { TestCaseService } from '../../test/test-case.service'

@Component({
    moduleId: module.id,
    selector: 'bpm-task-test',
    templateUrl: 'bpm-task-test.component.html',
    styleUrls: [ 'bpm-task-test.component.css' ],
})

export class BpmTaskTestComponent implements OnInit { 

    // Generic Bonita Rest Api test vars
    response: ZgwnuBonitaResponse
    errorResponse: ZgwnuBonitaErrorResponse

    // Task test vars
    private readonly testTaskName = 'User Task'
    task: ZgwnuBonitaTask
    passedTest_BpmTask_searchTasks: boolean = false
    passedTest_BpmTask_getTask: boolean = false

    constructor(
        private bpmTaskService: ZgwnuBonitaBpmTaskService, 
        private testCaseService: TestCaseService,  
    )
    {
    }
    
    ngOnInit() {
        this.test_BpmTask_searchTasks()
    }

    private test_BpmTask_searchTasks() {
        let testSearchParms: ZgwnuBonitaSearchParms = new ZgwnuBonitaSearchParms(0, 1)
        testSearchParms.filters = [
            'name=' + this.testTaskName,
            ]

        this.bpmTaskService.searchTasks(testSearchParms)
            .subscribe(
                Tasks => {
                    console.log(Tasks)
                    this.task = Tasks[0]
                    this.passedTest_BpmTask_searchTasks = true
                    // next test in chain (3)
                    this.test_BpmTask_getTask()
                },
                errorResponse => this.errorResponse = errorResponse
            )
    }

    private test_BpmTask_getTask() {
        this.bpmTaskService.getTask(this.task.id)
            .subscribe(
                task => {
                    this.task = task
                    this.passedTest_BpmTask_getTask = true
                    // next test in chain (4)
                    this.testCaseService.taskId = task.id
                },
                errorResponse => this.errorResponse
            )
    }

}