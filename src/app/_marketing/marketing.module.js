import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import MarketingComponent from './marketing.component';
import MarketingRoutes from './marketing.routes';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild( MarketingRoutes );
  ],
  declarations: [
    MarketingComponent
  ],
  bootstrap: [MarketingComponent]
})

export class MarketingModule {}
