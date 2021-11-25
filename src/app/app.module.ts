import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuperHeroComponent } from './superhero.component';
import { ChildComponent } from './parentchild.component';
import { UserDataComponent } from './userdata.component';
import { AvengersList } from './avengerslist.component';
import { AvengersDetails } from './avengersdetails.component';
import { RouterModule } from '@angular/router';
import { WhoUAre } from './whouare.component';
import { PageNotFound } from './page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperHeroComponent,
    ChildComponent,
    UserDataComponent,
    AvengersList,
    AvengersDetails
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot([{path: 'avengerlist', component: AvengersList},
    {path: 'avengerdetails', component: AvengersDetails},
    {path: 'whouare/:name', component: WhoUAre},
    {path: '**', component: PageNotFound} /*It should always keep in the end */
  ]),
    AppRoutingModule,
    FormsModule /*Imported for two-way binding*/
  ],
  providers: [],
  bootstrap: [AppComponent, SuperHeroComponent, ChildComponent, UserDataComponent]
})
export class AppModule { }
