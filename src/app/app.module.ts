import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { CollapseModule } from 'ngx-bootstrap/collapse';
// import { AccordionModule } from 'ngx-bootstrap/accordion';

//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomeModule } from './components/home/home.module';

import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';

const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //FontAwesomeModule,
    HomeModule,
    NgWizardModule.forRoot(ngWizardConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
