// ANGULAR Imports
import { Component, OnInit } from '@angular/core'

// RXJS Imports

// ZGWNU Ng Bonita Module Imports

// APP Imports
import { TestCaseService } from './test-case.service'

@Component({
  moduleId: module.id,
  selector: 'ng-bonita-test',
  templateUrl: 'test.component.html',
  styleUrls: [ 'test.component.css' ],
})
export class TestComponent implements OnInit {

  constructor(
    private testCaseService: TestCaseService
  )
  {

  }

  ngOnInit() {
  }

}
