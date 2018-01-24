import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InventionsComponent } from './inventions/inventions.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';
import { Invention } from './inventions.class';
import { InventionsService } from './inventions.service'


@NgModule({
  declarations: [
    AppComponent,
    InventionsComponent,
    DetailsComponent
  ],
  imports: [
    RouterModule.forRoot([{
      path : '',
      redirectTo : 'inventions',
      pathMatch : 'full'
    },
    {
      path : 'inventions',
      component : InventionsComponent
    },
    {
      path : 'details/:id',
      component : DetailsComponent
    }
    ]),
    BrowserModule,
    FormsModule
  ],
  providers: [InventionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
