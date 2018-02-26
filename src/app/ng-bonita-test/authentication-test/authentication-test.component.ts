// ANGULAR Imports
import { Component, OnInit } from '@angular/core'

// RXJS Imports

// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaConfigService, ZgwnuBonitaAuthenticationService, ZgwnuBonitaCredentials, 
  ZgwnuBonitaSession, ZgwnuBonitaErrorResponse
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
  session: ZgwnuBonitaSession
  errorResponse: ZgwnuBonitaErrorResponse
  passedTest_AuthenticationService_login: boolean = false

  constructor(
    private configService: ZgwnuBonitaConfigService,
    private authenticationService: ZgwnuBonitaAuthenticationService,  
    public testCaseService: TestCaseService,  
  )
  {
  }

  ngOnInit() {
    this.test_AuthenticationService_login()
  }

  private test_AuthenticationService_login() {
    this.authenticationService.login(new ZgwnuBonitaCredentials('walter.bates', 'bpm'))
      .subscribe(
        session => {
          this.session = session
        },
        errorResponse => {
          console.log(errorResponse)
          this.errorResponse = errorResponse
        },
        () => {
          this.passedTest_AuthenticationService_login = true
          this.testCaseService.isAuthorized = true
          console.log('configService', this.configService)
        }
      )
  }

}
