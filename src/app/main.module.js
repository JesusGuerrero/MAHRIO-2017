import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { ErrorComponent } from './error/error.component';
//import { MarketingModule } from 'mahrio-lms/marketing';
//import { StudentModule } from 'mahrio-lms/student';
//import { InstructorModule } from 'mahrio-lms/instructor';
//import { OwnerModule } from 'mahrio-lms/owner';
//import { MahrioAPI } from 'mahrio/api';

@NgModule({
  imports: [
    RouterModule,
    //MarketingModule,
    //StudentModule,
    //InstructorModule,
    //OwnerModule,
  ],
  declarations: [
    MainComponent,
    ErrorComponent
  ],
  providers: [
    //MahrioAPI
  ],
  bootstrap: [
    MainComponent
  ]
});

export class MainModule { }

