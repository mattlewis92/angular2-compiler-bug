import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {DemoModule} from 'mwl-example-ng2-module'

@NgModule({
  declarations: [AppComponent],
  exports: [AppComponent],
  imports: [DemoModule],
  bootstrap: [AppComponent]
})
export class AppModule {}