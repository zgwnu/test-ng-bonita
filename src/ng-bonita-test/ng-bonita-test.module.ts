// ANGULAR Imports
import { NgModule }     from '@angular/core'
import { CommonModule }   from '@angular/common'

// ZGWNU Ng Bonita Module Imports
import { ZgwnuNgBonitaModule } from '@zgwnu/ng-bonita'

// APP Imports
import { TestCaseService } from './test/test-case.service'
import { TestComponent } from './test/test.component'
import { AuthenticationTestComponent } from './authentication-test/authentication-test.component'
import { BpmProcessTestComponent } from './bpm-test/bpm-process-test/bpm-process-test.component'
import { BpmCaseTestComponent } from './bpm-test/bpm-case-test/bpm-case-test.component'
import { BpmActivityTestComponent } from './bpm-test/bpm-activity-test/bpm-activity-test.component'
import { BpmHumanTaskTestComponent } from './bpm-test/bpm-human-task-test/bpm-human-task-test.component'
import { BpmTaskTestComponent } from './bpm-test/bpm-task-test/bpm-task-test.component'
import { BpmUserTaskTestComponent } from './bpm-test/bpm-user-task-test/bpm-user-task-test.component'
import { BpmDataTestComponent } from './bpm-test/bpm-data-test/bpm-data-test.component'
import { BpmDocumentTestComponent } from './bpm-test/bpm-document-test/bpm-document-test.component'
import { FileUploadTestComponent } from './file-upload-test/file-upload-test.component'
import { BdmTestComponent } from './bdm-test/bdm-test.component'

@NgModule({
  imports: [
    CommonModule, 
    ZgwnuNgBonitaModule,  
   ],
  providers: [
    TestCaseService,  
  ],
  declarations: [
    TestComponent,  
    AuthenticationTestComponent,  
    BpmProcessTestComponent,  
    BpmCaseTestComponent,  
    BpmActivityTestComponent,  
    BpmHumanTaskTestComponent,  
    BpmTaskTestComponent,  
    BpmUserTaskTestComponent,  
    BpmDataTestComponent,  
    BpmDocumentTestComponent,  
    FileUploadTestComponent,  
    BdmTestComponent,  
  ],
  exports: [
    TestComponent,  
  ]
})
export class NgBonitaTestModule { }