import { NgModule }           from '@angular/core'
import { BrowserModule }      from '@angular/platform-browser'
import { ZgwnuBonitaModule }  from '@zgwnu/ng-bonita'

import { AppComponent }  from './app.component'

@NgModule({
  imports: [ 
    BrowserModule,
    ZgwnuBonitaModule, 
   ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
