// ANGULAR Imports
import { Component, OnInit } from '@angular/core'

// RXJS Imports

// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaConfigService, ZgwnuBonitaAuthenticationService, ZgwnuBonitaSessionService, 
    ZgwnuBonitaCredentials, ZgwnuBonitaSession, ZgwnuBonitaResponse, ZgwnuBonitaErrorResponse 
  } from '@zgwnu/ng-bonita'  

// APP Imports
import { TestCaseService } from '../test/test-case.service'

@Component({
  moduleId: module.id,
  selector: 'authentication-test',
  templateUrl: 'authentication-test.component.html',
  styleUrls: [ 'authentication-test.component.css' ],
})
export class AuthenticationTestComponent implements OnInit { 

  // Process test vars
  response: ZgwnuBonitaResponse
  session: ZgwnuBonitaSession
  errorResponse: ZgwnuBonitaErrorResponse
  passedTest_SessionService_getSession: boolean = false
  passedTest_AuthenticationService_login: boolean = false

  constructor(
    private configService: ZgwnuBonitaConfigService,
    private sessionService: ZgwnuBonitaSessionService,  
    private authenticationService: ZgwnuBonitaAuthenticationService,  
    private testCaseService: TestCaseService,  
  )
  {}

  ngOnInit() {
    this.test_AuthenticationService_login()
  }

  private test_AuthenticationService_login() {
    this.authenticationService.login(new ZgwnuBonitaCredentials('walter.bates', 'bpm'))
      .subscribe(
        response => {
          console.log(response)
          this.response = response
          this.passedTest_AuthenticationService_login = true
          this.test_SessionService_GetSession()
        },
        errorResponse => {
          console.log(errorResponse)
          this.errorResponse = errorResponse
        }
      )
  }

  private test_SessionService_GetSession() {
    this.sessionService.getSession()
      .subscribe(
        session => {
          console.log(session)
          this.session = session
          this.passedTest_SessionService_getSession = true
          console.log('this.configService.session', this.configService.session)
          this.testCaseService.isAuthorized = true
        },
        errorResponse => {
          console.log(errorResponse)
          this.errorResponse = errorResponse
        }
      )
  }

}
