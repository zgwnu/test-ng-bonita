import { NgModule }                 from '@angular/core'
import { BrowserModule }            from '@angular/platform-browser'

import { NgBonitaTestModule }  from '../ng-bonita-test'

import { AppComponent }  from './app.component'

@NgModule({
  imports: [ 
    BrowserModule,  
    NgBonitaTestModule,  
   ],
  declarations: [ AppComponent ],
  providers: [ ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
