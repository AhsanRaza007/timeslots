import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeslotButtonComponent } from './components/timeslot-button/timeslot-button.component';
import { EditTimeslotUserComponent } from './components/edit-timeslot-user/edit-timeslot-user.component';
import { TimeslotViewComponent } from './components/timeslot-view/timeslot-view.component';
import { StoreModule } from '@ngrx/store';
import { timeSlotReducer } from './store/reducers/timeslot.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TimeslotButtonComponent,
    EditTimeslotUserComponent,
    TimeslotViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      timeslot: timeSlotReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
