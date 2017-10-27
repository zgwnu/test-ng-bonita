import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `<ng-bonita-test></ng-bonita-test>`,
})
export class AppComponent implements OnInit { 

  public name = 'Angular'

  constructor(
  )
  {}

  ngOnInit() {
  }

}
