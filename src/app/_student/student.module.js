import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import StudentComponent from './student.component';
import StudentRoutes from './student.routes';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild( StudentRoutes );
  ],
  declarations: [
    StudentComponent
  ],
  bootstrap: [StudentComponent]
})

export class StudentModule {}
