// ANGULAR Imports
import { Component, OnInit } from '@angular/core'

// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaBpmUserTaskService, ZgwnuBonitaErrorResponse, ZgwnuBonitaResponse, 
    ZgwnuBonitaSearchParms, ZgwnuBonitaUserTask, ZgwnuBonitaConfigService, 
    ZgwnuBonitaBusinessDataContext } from '@zgwnu/ng-bonita'  

// APP Imports
import { TestCaseService } from '../../test/test-case.service'
import { UserTaskContract } from './user-task-contract'

@Component({
    moduleId: module.id,
    selector: 'bpm-user-task-test',
    templateUrl: 'bpm-user-task-test.component.html',
    styleUrls: [ 'bpm-user-task-test.component.css' ],
})

export class BpmUserTaskTestComponent implements OnInit { 

    // Generic Bonita Rest Api test vars
    response: ZgwnuBonitaResponse
    errorResponse: ZgwnuBonitaErrorResponse

    // User Task test vars
    userTask: ZgwnuBonitaUserTask
    passedTest_BpmUserTask_getUserTask: boolean = false

    userTaskContext: any
    passedTest_BpmUserTask_getUserTaskContext: boolean = false

    assignUserName: string
    assignUserTask_ToSpecificUser_Response: ZgwnuBonitaResponse
    passedTest_BpmUserTask_assignUserTask_ToSpecificUser: boolean = false

    assignUserTask_ToCurrentUser_Response: ZgwnuBonitaResponse
    passedTest_BpmUserTask_assignUserTask_ToCurrentUser: boolean = false

    userTaskContract: UserTaskContract = new UserTaskContract('User Task Input')
    executeUserTaskResponse: ZgwnuBonitaResponse
    passedTest_BpmUserTask_executeUserTask: boolean = false

    constructor(
        private configService: ZgwnuBonitaConfigService,  
        private bpmUserTaskService: ZgwnuBonitaBpmUserTaskService, 
        private testCaseService: TestCaseService,  
    )
    {
    }
    
    ngOnInit() {
        this.test_BpmUserTaskGetUserTask()
    }

    private test_BpmUserTaskGetUserTask() {
        this.bpmUserTaskService.getUserTask(this.testCaseService.taskId)
            .subscribe(
                userTask => {
                    this.userTask = userTask
                    this.passedTest_BpmUserTask_getUserTask = true
                    // next test in chain (4)
                    this.test_BpmUserTask_getUserTaskContext()
                },
                errorResponse => this.errorResponse = errorResponse
            )
    }

    private test_BpmUserTask_getUserTaskContext() {
        this.bpmUserTaskService.getUserTaskContext(this.userTask.id)
            .subscribe(
                userTaskContext => {
                    this.userTaskContext = userTaskContext
                    this.passedTest_BpmUserTask_getUserTaskContext = true
                    // store business data context for business data tests
                    this.testCaseService.businessDataContext = new ZgwnuBonitaBusinessDataContext(userTaskContext.ng2bonitaData_ref)
                    // next test in chain (5)
                    this.test_BpmUserTask_assignUserTask_ToSpecificUser()
                },
                errorResponse => this.errorResponse = errorResponse
            )
    }

    private test_BpmUserTask_assignUserTask_ToSpecificUser() {
        this.bpmUserTaskService.assignUserTask(this.userTask.id, this.configService.session.user_id)
            .subscribe(
                response => {
                    this.assignUserTask_ToSpecificUser_Response = response
                    this.assignUserName = this.configService.session.user_name
                    this.passedTest_BpmUserTask_assignUserTask_ToSpecificUser = true
                    // next test in chain (6)
                    this.test_BpmUserTask_assignUserTask_ToCurrentUser()
                },
                errorResponse => this.errorResponse = errorResponse
            )
    }

    private test_BpmUserTask_assignUserTask_ToCurrentUser() {
        this.bpmUserTaskService.assignUserTask(this.userTask.id)
            .subscribe(
                response => {
                    this.assignUserTask_ToCurrentUser_Response = response
                    this.passedTest_BpmUserTask_assignUserTask_ToCurrentUser = true
                    // next test in chain (7)
                    this.test_BpmUserTask_executeUserTask()
                },
                errorResponse => this.errorResponse = errorResponse
            )
    }

    private test_BpmUserTask_executeUserTask() {
        this.bpmUserTaskService.executeUserTask(this.userTask.id, this.userTaskContract)
            .subscribe(
                response => {
                    this.executeUserTaskResponse = response
                    this.passedTest_BpmUserTask_executeUserTask = true
                    // next test in chain (8)
                },
                errorResponse => this.errorResponse = errorResponse
            )
    }

}