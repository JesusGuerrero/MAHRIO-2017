import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import InstructorComponent from './instructor.component';
import InstructorRoutes from './instructor.routes';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild( InstructorRoutes );
  ],
  declarations: [
    InstructorComponent
  ],
  bootstrap: [InstructorComponent]
})

export class InstructorModule {}

