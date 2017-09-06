import { Component, OnInit } from '@angular/core'
import { ZgwnuBonitaModule } from '@zgwnu/ng-bonita'

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent implements OnInit { 

  public name = 'Angular' 

  ngOnInit() {
    
  }

}
