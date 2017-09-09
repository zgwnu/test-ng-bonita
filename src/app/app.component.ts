import { Component, OnInit } from '@angular/core'
import { ZgwnuBonitaAuthenticationService, ZgwnuBonitaCredentials } from '@zgwnu/ng-bonita'

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent implements OnInit { 

  public name = 'Angular'

  constructor(
    private authenticationService: ZgwnuBonitaAuthenticationService,
  )
  {}

  ngOnInit() {
    let creds: ZgwnuBonitaCredentials = new ZgwnuBonitaCredentials('configurator', 'zgw')

    this.authenticationService.login(creds)
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      )
    
  }

}
